import React, { useState, useEffect } from 'react';
import { Antibiotic } from '../types';
import { AlertCircle, Calendar, Weight, Activity, Syringe, Info, RefreshCw, AlertTriangle, ArrowRight } from 'lucide-react';

interface DoseCalculatorProps {
  antibiotic: Antibiotic;
}

export default function DoseCalculator({ antibiotic }: DoseCalculatorProps) {
  const [ageCategory, setAgeCategory] = useState<'neonatal' | 'pediatric' | 'adult'>('pediatric');
  const [weight, setWeight] = useState<number>(12); // standard child: 12kg
  const [neonatalAgeDays, setNeonatalAgeDays] = useState<number>(10); // for baby
  const [severity, setSeverity] = useState<'normal' | 'severe'>('normal');
  const [customDosagePerKg, setCustomDosagePerKg] = useState<number>(0);

  // Initialize custom dosage based on selection
  useEffect(() => {
    if (ageCategory === 'neonatal' && antibiotic.dosageRules.neonatal) {
      const min = antibiotic.dosageRules.neonatal.minMgPerKgPerDay;
      const max = antibiotic.dosageRules.neonatal.maxMgPerKgPerDay;
      setCustomDosagePerKg(severity === 'severe' ? max : Math.round((min + max) / 2));
    } else if (ageCategory === 'pediatric' && antibiotic.dosageRules.pediatric) {
      const min = antibiotic.dosageRules.pediatric.minMgPerKgPerDay;
      const max = antibiotic.dosageRules.pediatric.maxMgPerKgPerDay;
      setCustomDosagePerKg(severity === 'severe' ? max : Math.round((min + max) / 2));
    } else if (ageCategory === 'adult' && antibiotic.dosageRules.adult) {
      // flat adult dose in milligrams
      const adultRule = antibiotic.dosageRules.adult;
      setCustomDosagePerKg(severity === 'severe' ? adultRule.maxMgPerDay : adultRule.recommendedSingleDoseMg * (24 / adultRule.frequencyHours));
    }
  }, [ageCategory, antibiotic, severity]);

  // Adjust neonatal age default rules if Cefotaxime or other
  useEffect(() => {
    if (ageCategory === 'neonatal' && antibiotic.id === 'cefotaxime') {
      if (neonatalAgeDays < 7) {
        setCustomDosagePerKg(100); // 100 mg/kg/day standard
      } else {
        setCustomDosagePerKg(150); // 150 mg/kg/day standard
      }
    }
  }, [ageCategory, neonatalAgeDays, antibiotic.id]);

  // Read current rule limits
  const isNeonatalAvailable = !!antibiotic.dosageRules.neonatal;
  const isPediatricAvailable = !!antibiotic.dosageRules.pediatric;
  const isAdultAvailable = !!antibiotic.dosageRules.adult;

  let ruleMinMgPerKg = 0;
  let ruleMaxMgPerKg = 0;
  let frequencyHours = 12;
  let ruleDescription = '';

  if (ageCategory === 'neonatal' && isNeonatalAvailable) {
    const rules = antibiotic.dosageRules.neonatal!;
    ruleMinMgPerKg = rules.minMgPerKgPerDay;
    ruleMaxMgPerKg = rules.maxMgPerKgPerDay;
    frequencyHours = rules.frequencyHours;
    ruleDescription = rules.description || '';

    // Adjust frequency hours for neonate based on age
    if (antibiotic.id === 'cefotaxime') {
      frequencyHours = neonatalAgeDays < 7 ? 12 : 8;
    } else if (antibiotic.id === 'augmentin') {
      frequencyHours = neonatalAgeDays < 8 ? 12 : 8;
    } else if (antibiotic.id === 'meropenem') {
      frequencyHours = neonatalAgeDays < 7 ? 12 : 8;
    }
  } else if (ageCategory === 'pediatric' && isPediatricAvailable) {
    const rules = antibiotic.dosageRules.pediatric!;
    ruleMinMgPerKg = rules.minMgPerKgPerDay;
    ruleMaxMgPerKg = rules.maxMgPerKgPerDay;
    frequencyHours = rules.frequencyHours;
    ruleDescription = rules.description || '';
  }

  // Double check inputs
  const currentWeight = Math.max(0.5, Math.min(150, weight));
  const currentNeonatalDays = Math.max(1, Math.min(28, neonatalAgeDays));

  // Calculations
  let totalDailyDoseMg = 0;
  let singleDoseMg = 0;
  let timesPerDay = 1;

  if (ageCategory === 'adult' && isAdultAvailable) {
    const rules = antibiotic.dosageRules.adult!;
    timesPerDay = 24 / rules.frequencyHours;
    if (severity === 'severe') {
      totalDailyDoseMg = rules.maxMgPerDay;
    } else {
      totalDailyDoseMg = rules.recommendedSingleDoseMg * timesPerDay;
    }
    // ensure within range
    totalDailyDoseMg = Math.max(rules.minMgPerDay, Math.min(rules.maxMgPerDay, totalDailyDoseMg));
    singleDoseMg = totalDailyDoseMg / timesPerDay;
  } else {
    // weight-based
    timesPerDay = 24 / frequencyHours;
    totalDailyDoseMg = customDosagePerKg * currentWeight;
    singleDoseMg = totalDailyDoseMg / timesPerDay;
  }

  // Volumes standard calculations
  const mgPerMl = antibiotic.reconstitutionConcentrationMgMl;
  const singleDoseMl = singleDoseMg / mgPerMl;
  const totalDailyDoseMl = totalDailyDoseMg / mgPerMl;

  // Vial math
  const vialStrength = antibiotic.vialStrengthMg;
  const numVialsPerSingleDose = singleDoseMg / vialStrength;
  const numVialsPerDay = totalDailyDoseMg / vialStrength;

  // Safety evaluations
  let isExceedsMaxAdultDaily = false;
  let isExceedsRuleMax = false;
  let warningMessage = '';

  if (ageCategory === 'adult' && isAdultAvailable) {
    if (totalDailyDoseMg > antibiotic.dosageRules.adult!.maxMgPerDay) {
      isExceedsMaxAdultDaily = true;
      warningMessage = `Liều vượt quá giới hạn tối đa người lớn khuyến cáo: ${antibiotic.dosageRules.adult!.maxMgPerDay} mg/ngày.`;
    }
  } else {
    if (customDosagePerKg > ruleMaxMgPerKg) {
      isExceedsRuleMax = true;
      warningMessage = `Liều lượng chỉ chỉ định (${customDosagePerKg} mg/kg/ngày) vượt quá khuyến nghị tối đa của thuốc (${ruleMaxMgPerKg} mg/kg/ngày).`;
    }
    // Also pediatric dosage shouldn't exceed adult maximum absolute dose for safety!
    if (isAdultAvailable && totalDailyDoseMg > antibiotic.dosageRules.adult!.maxMgPerDay) {
      isExceedsMaxAdultDaily = true;
      warningMessage = `Liều trẻ em tính toán (${totalDailyDoseMg.toFixed(0)} mg) đã vượt quá liều tối đa cho phép của người lớn (${antibiotic.dosageRules.adult!.maxMgPerDay} mg/ngày). Vui lòng điều chỉnh giảm liều lượng!`;
    }
  }

  const handleWeightPreset = (v: number) => {
    setWeight(v);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="dose-calculator-component">
      {/* Parameter Entry: 5 columns */}
      <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-100 p-5 md:p-6 space-y-6">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Activity className="w-5 h-5 text-indigo-600" />
          Tham số bệnh nhân & Chỉ định
        </h3>

        {/* Age group selector */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Phân nhóm Độ tuổi</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setAgeCategory('neonatal')}
              className={`py-2.5 px-2 rounded-xl text-xs font-medium border transition-all ${
                ageCategory === 'neonatal'
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100'
                  : 'bg-slate-50 border-slate-150 text-slate-600 hover:bg-slate-100'
              }`}
            >
              🎉 Sơ sinh
              <span className="block text-[9px] opacity-75 mt-0.5">&lt; 28 ngày tuổi</span>
            </button>
            <button
              onClick={() => setAgeCategory('pediatric')}
              className={`py-2.5 px-2 rounded-xl text-xs font-medium border transition-all ${
                ageCategory === 'pediatric'
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100'
                  : 'bg-slate-50 border-slate-150 text-slate-600 hover:bg-slate-100'
              }`}
            >
              🧒 Trẻ em
              <span className="block text-[9px] opacity-75 mt-0.5">1 tháng - 12 tuổi</span>
            </button>
            <button
              onClick={() => setAgeCategory('adult')}
              className={`py-2.5 px-2 rounded-xl text-xs font-medium border transition-all ${
                ageCategory === 'adult'
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100'
                  : 'bg-slate-50 border-slate-150 text-slate-600 hover:bg-slate-100'
              }`}
            >
              🧑 Người lớn
              <span className="block text-[9px] opacity-75 mt-0.5">&gt; 12 tuổi</span>
            </button>
          </div>
        </div>

        {/* Warning if drug has no pediatric or neonatal rules */}
        {ageCategory === 'neonatal' && !isNeonatalAvailable && (
          <div className="bg-amber-50 border border-amber-250 rounded-xl p-4 flex items-start gap-2.5 text-amber-800 text-xs text-slate-650">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block text-amber-950">Lưu ý lâm sàng:</strong>
              Thuốc <strong>{antibiotic.name}</strong> không có dữ liệu tiêu chuẩn lâm sàng được phê duyệt cho trẻ sơ sinh dưới 28 ngày tuổi. Cân nhắc dùng kháng sinh khác an toàn hơn hoặc hội chẩn chuyên khoa nhi sâu!
            </div>
          </div>
        )}

        {/* Detailed inputs depending on Category */}
        {ageCategory === 'neonatal' && isNeonatalAvailable && (
          <div className="bg-slate-50 rounded-xl p-4 space-y-4 border border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-indigo-500" />
                Tuổi nhi sơ sinh (ngày tuổi)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="28"
                  value={neonatalAgeDays}
                  onChange={(e) => setNeonatalAgeDays(Math.max(1, Math.min(28, parseInt(e.target.value) || 1)))}
                  className="w-16 text-center text-sm font-bold bg-white border border-slate-205 rounded-lg py-1 text-slate-800"
                />
                <span className="text-xs text-slate-550">ngày</span>
              </div>
            </div>
            {/* Slide day quickly */}
            <input
              type="range"
              min="1"
              max="28"
              value={neonatalAgeDays}
              onChange={(e) => setNeonatalAgeDays(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>1 ngày</span>
              <span>14 ngày</span>
              <span>28 ngày</span>
            </div>
          </div>
        )}

        {/* Weight input for neonates & pediatric */}
        {ageCategory !== 'adult' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Weight className="w-4 h-4 text-indigo-500" />
                Cân nặng bệnh nhân (kg)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.1"
                  min="0.5"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(0.1, Math.min(150, parseFloat(e.target.value) || 0)))}
                  className="w-20 text-center text-sm font-bold bg-white border border-slate-250 rounded-lg py-1.5 text-slate-800"
                />
                <span className="text-xs text-slate-550 font-medium">kg</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5">
              {ageCategory === 'neonatal' ? (
                [1.5, 2.5, 3.2, 4.0].map((v) => (
                  <button
                    key={v}
                    onClick={() => handleWeightPreset(v)}
                    className={`text-[10px] px-2 py-1 rounded bg-slate-100 hover:bg-slate-205 text-slate-600 font-medium transition-all ${
                      weight === v ? 'ring-1 ring-indigo-500 bg-indigo-50 text-indigo-700' : ''
                    }`}
                  >
                    {v} kg
                  </button>
                ))
              ) : (
                [6, 10, 15, 20, 30, 40].map((v) => (
                  <button
                    key={v}
                    onClick={() => handleWeightPreset(v)}
                    className={`text-[10px] px-2 py-1 rounded bg-slate-100 hover:bg-slate-205 text-slate-600 font-medium transition-all ${
                      weight === v ? 'ring-1 ring-indigo-500 bg-indigo-50 text-indigo-700' : ''
                    }`}
                  >
                    {v} kg
                  </button>
                ))
              )}
            </div>

            <input
              type="range"
              min={ageCategory === 'neonatal' ? '0.5' : '2'}
              max={ageCategory === 'neonatal' ? '6' : '70'}
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        )}

        {/* Severity level & guidance mapping */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Mức độ Nhiễm khuẩn lâm sàng</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSeverity('normal')}
              className={`py-2 px-3 rounded-lg text-xs font-medium border text-left transition-all ${
                severity === 'normal'
                  ? 'bg-slate-550 border-slate-550 text-white bg-slate-800 border-slate-800 shadow-sm'
                  : 'bg-slate-50 border-slate-150 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <strong className="block text-xs">Phổ Thông / Thường</strong>
              <span className="text-[9px] opacity-75">Nhiễm khuẩn hô hấp, tiết niệu, mô mềm</span>
            </button>
            <button
              onClick={() => setSeverity('severe')}
              className={`py-2 px-3 rounded-lg text-xs font-medium border text-left transition-all ${
                severity === 'severe'
                  ? 'bg-rose-50 border-rose-200 text-rose-850 bg-rose-900 border-rose-900 text-white shadow-sm'
                  : 'bg-slate-50 border-slate-150 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <strong className="block text-xs">⚠️ Nặng / Nguy kịch</strong>
              <span className="text-[9px] opacity-75">Viêm màng não, nhiễm trùng huyết, Sepsis nhạy cảm</span>
            </button>
          </div>
        </div>

        {/* Slide Dose dosage rules mg/kg/day */}
        {ageCategory !== 'adult' && (ruleMinMgPerKg > 0) && (
          <div className="space-y-3 bg-indigo-50/40 p-4 rounded-xl border border-indigo-100/50">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-indigo-950">Liều lượng chỉ định:</span>
              <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">
                {customDosagePerKg} mg/kg/ngày
              </span>
            </div>

            <input
              type="range"
              min={ruleMinMgPerKg}
              max={severity === 'severe' ? ruleMaxMgPerKg * 1.2 : ruleMaxMgPerKg} // Allow pushing slightly higher for demonstration or emergencies, with warning
              step="1"
              value={customDosagePerKg}
              onChange={(e) => setCustomDosagePerKg(parseInt(e.target.value))}
              className="w-full h-1.5 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />

            <div className="flex justify-between text-[10px] text-indigo-700/80">
              <span>Đề xuất tối thiểu: {ruleMinMgPerKg} mg/kg</span>
              <span>Đề xuất tối đa: {ruleMaxMgPerKg} mg/kg</span>
            </div>

            {ruleDescription && (
              <p className="text-[10px] italic text-indigo-950/70 leading-relaxed pt-1.5 border-t border-indigo-100">
                💡 {ruleDescription}
              </p>
            )}
          </div>
        )}

        {/* Display Adult default ranges flatly if chosen */}
        {ageCategory === 'adult' && isAdultAvailable && (
          <div className="bg-indigo-50/40 p-4 rounded-xl border border-indigo-100/50 space-y-2">
            <h5 className="text-[11px] font-bold text-indigo-950 uppercase">Phác đồ Người lớn tiêu chuẩn</h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-indigo-950">
              <div className="bg-white/80 p-2 rounded border border-indigo-50">
                <span className="text-[10px] text-slate-500 block">Dải liều khuyến nghị:</span>
                <strong className="text-sm text-indigo-950">
                  {antibiotic.dosageRules.adult!.minMgPerDay.toLocaleString()} - {antibiotic.dosageRules.adult!.maxMgPerDay.toLocaleString()} mg/ngày
                </strong>
              </div>
              <div className="bg-white/80 p-2 rounded border border-indigo-50">
                <span className="text-[10px] text-slate-500 block">Tần suất chia liều:</span>
                <strong className="text-sm text-indigo-950">
                  Mỗi {antibiotic.dosageRules.adult!.frequencyHours} giờ ({24 / antibiotic.dosageRules.adult!.frequencyHours} lần/ngày)
                </strong>
              </div>
            </div>
            <p className="text-[10px] text-indigo-950/60 leading-relaxed italic">
              *Không phụ thuộc trực tiếp vào cân nặng trừ trường hợp bệnh nhân suy kiệt nặng (&lt; 40kg) hoặc béo phì loại III, điều chỉnh liều lâm sàng phụ thuộc tỷ lệ thanh thải CrCl tại thận.
            </p>
          </div>
        )}
      </div>

      {/* Calculator Result details: 7 columns */}
      <div className="lg:col-span-7 space-y-6">
        {/* Main numeric card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-slate-900/10">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-500/10 rounded-full blur-xl"></div>

          <div className="relative space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-widest block font-medium">Báo cáo kết quả kê liều</span>
                <h4 className="text-lg font-bold text-teal-400 mt-0.5">{antibiotic.vietnameseName}</h4>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-700">
                  {timesPerDay} lần / ngày
                </span>
              </div>
            </div>

            {/* Calculations layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Single Dose */}
              <div className="p-4 bg-slate-850/60 border border-slate-800 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-medium">Liều đơn đề xuất (mỗi lần tiêm):</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    {singleDoseMg.toFixed(1).replace('.0', '')}
                  </span>
                  <span className="text-sm font-bold text-teal-400">mg</span>
                </div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  Tương đương dung tích: <strong className="text-slate-300">{singleDoseMl.toFixed(2)} mL</strong> hoàn nguyên
                </div>
              </div>

              {/* Total Daily Dose */}
              <div className="p-4 bg-slate-850/60 border border-slate-800 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-medium">Tổng liều lượng cả ngày:</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-teal-300 tracking-tight">
                    {totalDailyDoseMg.toFixed(1).replace('.0', '')}
                  </span>
                  <span className="text-sm font-bold text-teal-400">mg</span>
                </div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  Có thể cần dùng: <strong className="text-slate-300">{numVialsPerDay.toFixed(2)} lọ</strong> 1g / ngày
                </div>
              </div>
            </div>

            {/* Specific Instructions for syringe pull (SỐ mL CẦN HÚT) */}
            <div className="bg-indigo-950/40 border border-indigo-900/80 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h5 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Syringe className="w-4 h-4 text-indigo-400 animate-pulse" />
                  Chỉ định hút thuốc thực tế (Dành cho Điều Dưỡng)
                </h5>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-900 text-indigo-200 font-semibold">
                  Nồng độ: {mgPerMl} mg/mL
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs border-t border-indigo-900/50 pt-2.5">
                <div className="space-y-1">
                  <p className="text-slate-300">
                    Bước 1: Bơm <strong className="text-teal-400">{antibiotic.diluentVolumeMl} mL</strong> nước cất vào lọ thuốc bột <strong className="text-white">{antibiotic.vietnameseName}</strong> để được dung dịch có nồng độ <strong className="text-teal-400">{mgPerMl} mg/mL</strong>.
                  </p>
                  <p className="text-slate-300">
                    Bước 2: Hút chính xác <strong className="text-amber-300 text-sm font-bold">{singleDoseMl.toFixed(2)} mL</strong> dán nhãn bệnh nhân.
                  </p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg text-center flex-shrink-0">
                  <span className="text-[10px] text-slate-400 block">Tiêm đơn liều</span>
                  <strong className="text-lg text-teal-400 font-bold block">{singleDoseMl.toFixed(2)} mL</strong>
                </div>
              </div>
            </div>

            {/* Syringe Visual Mockup Drawing */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center space-y-3">
              <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1.5 self-start">
                <Info className="w-3.5 h-3.5" />
                Mô tả trực quan mức thuốc cần hút trên xi lanh (dung tích tiêu chuẩn 10 mL)
              </div>

              {/* Syringe SVG representation */}
              <div className="w-full max-w-sm h-16 flex items-center relative py-2">
                {/* Needle sleeve on left */}
                <div className="w-4 h-1.5 bg-slate-600 rounded-l flex-shrink-0"></div>
                <div className="w-1.5 h-5 bg-slate-500 flex-shrink-0"></div>

                {/* Syringe barrel */}
                <div className="flex-grow h-10 border-y-2 border-r-2 border-slate-700 bg-slate-900 rounded-r relative flex items-center overflow-hidden">
                  {/* Fluid inside */}
                  <div
                    className="h-full bg-teal-500/25 border-r-2 border-teal-400 relative transition-all duration-500 ease-out"
                    style={{ width: `${Math.min(100, (singleDoseMl / 10) * 100)}%` }}
                  >
                    {/* Bubble or color indicator */}
                    <div className="absolute inset-y-0 right-0 w-2 bg-teal-300/40"></div>
                  </div>

                  {/* Tick Marks */}
                  <div className="absolute inset-0 flex justify-between px-1.5 pointer-events-none">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => (
                      <div key={t} className="h-full flex flex-col justify-between items-center opacity-40">
                        <span className="w-0.5 h-2 bg-slate-400"></span>
                        <span className="text-[7px] text-slate-400 font-mono scale-90">{t}</span>
                      </div>
                    ))}
                  </div>

                  {/* Current draw overlay indicator text */}
                  {singleDoseMl <= 10 && (
                    <div
                      className="absolute top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-bold text-teal-300 font-mono bg-slate-950/80 px-1 py-0.5 border border-teal-500/40 rounded shadow-md pointer-events-none"
                      style={{ left: `calc(${Math.min(85, (singleDoseMl / 10) * 100)}% - 15px)` }}
                    >
                      <span>{singleDoseMl.toFixed(1)} mL</span>
                    </div>
                  )}
                </div>

                {/* Plunger */}
                <div className="w-2 h-7 bg-slate-300 flex-shrink-0"></div>
                <div
                  className="bg-slate-400 h-2.5 rounded-r transition-all duration-500 ease-out flex-shrink-0"
                  style={{ width: `${Math.max(10, 80 - (singleDoseMl / 10) * 80)}px` }}
                ></div>
                <div className="w-1.5 h-8 bg-slate-300 flex-shrink-0 rounded-r"></div>
              </div>

              {/* Draw exceeding warning */}
              {singleDoseMl > 10 && (
                <p className="text-[10px] text-amber-400 text-center">
                  ⚠️ Thể tích thuốc một lần ({singleDoseMl.toFixed(2)} mL) vượt quá dung tích xy-lanh 10mL tiêu chuẩn. Cần chia đợt hút hoặc dùng xy-lanh lớn hơn (20 mL).
                </p>
              )}
            </div>

            {/* Stability warning */}
            <div className="flex flex-col md:flex-row md:items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-3">
              <span>Độ ổn định ở T° phòng: <strong>{antibiotic.stability.roomTemp}</strong></span>
              <span>Bảo quản lạnh: <strong>{antibiotic.stability.refrigerated}</strong></span>
            </div>
          </div>
        </div>

        {/* Safety Limits and Warn Cards */}
        {warningMessage && (
          <div className="bg-rose-50 border border-rose-150 rounded-xl p-4 flex gap-3 text-xs text-rose-800">
            <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold block text-rose-950">⚠️ Vượt ngưỡng liều an toàn hoặc khuyến cáo cao nhất:</strong>
              <p>{warningMessage}</p>
              <p className="text-[10px] text-rose-800/80 leading-relaxed pt-1 border-t border-rose-200/50">
                Hãy thảo luận nghiêm túc với bác sĩ điều trị và xem lại thông tin cân nặng hoặc tình trạng chức năng gan/thận của bệnh nhân trước khi tiếp tục chuẩn bị thuốc.
              </p>
            </div>
          </div>
        )}

        {/* Dynamic Warning for Neonates */}
        {ageCategory === 'neonatal' && isNeonatalAvailable && antibiotic.id === 'ceftriaxone' && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-xs text-amber-850">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block text-amber-950">LƯU Ý CỰC KỲ QUAN TRỌNG VỚI CEFTRIAXONE SƠ SINH:</strong>
              <p className="mt-1 leading-relaxed text-slate-700">
                Ceftriaxone có thể đẩy Bilirubin ra khỏi albumin huyết tương, gây vàng da nhân não độc cấp. Đồng thời dùng chung dung dịch chứa calci (ví dụ truyền Ringer Lactate) gây tủa lắng Ca-Ceftriaxone cực kỳ nguy hại ở phổi và thận. Không dùng hoặc chỉ dùng cực kỳ thận trọng dưới chỉ định nghiêm ngặt!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
