import React, { useState, useEffect } from 'react';
import { Antibiotic } from '../types';
import { Beaker, ArrowRight, CheckCircle, Info, Clock, AlertTriangle, Play, Pause, Activity, Sparkles } from 'lucide-react';

interface PreparationGuideProps {
  antibiotic: Antibiotic;
}

export default function PreparationGuide({ antibiotic }: PreparationGuideProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [infusionVolume, setInfusionVolume] = useState<number>(antibiotic.infusionInstructions.diluentVolumeMl);
  const [infusionDuration, setInfusionDuration] = useState<number>(antibiotic.infusionInstructions.infusionDurationMinutes);
  const [dripSetType, setDripSetType] = useState<20 | 60>(20); // 20 drops/ml standard, 60 microdrips/ml pediatric
  const [isDripPlaying, setIsDripPlaying] = useState<boolean>(true);
  const [dripTrigger, setDripTrigger] = useState<number>(0);

  // Sync state if chosen antibiotic changes
  useEffect(() => {
    setInfusionVolume(antibiotic.infusionInstructions.diluentVolumeMl);
    setInfusionDuration(antibiotic.infusionInstructions.infusionDurationMinutes);
    setActiveStep(0);
  }, [antibiotic]);

  // Drip rate calculations
  const mlPerHour = (infusionVolume / (infusionDuration / 60));
  const dropsPerMinute = (infusionVolume * dripSetType) / infusionDuration;
  const secondsPerDrop = 60 / dropsPerMinute;

  // Real-time dripping effect simulator
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isDripPlaying && dropsPerMinute > 0) {
      interval = setInterval(() => {
        setDripTrigger(prev => prev + 1);
      }, secondsPerDrop * 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDripPlaying, dropsPerMinute, secondsPerDrop]);

  const steps = [
    {
      title: 'Bước 1: Sửa soạn & Sát khuẩn',
      icon: '🧼',
      description: 'Lựa chọn và kiểm tra tính toàn vẹn của lọ thuốc bột. Vệ sinh tay ngoại khoa tối thiểu 30 giây bằng xà phòng hoặc cồn khô. Sát khuẩn nút cao su bằng bông cồn 70% tròn từ tâm ra ngoài, chờ khô tự nhiên (khoảng 30 giây).',
      vialsNeeded: `Dùng nước cất vô khuẩn hoặc dung dịch NaCl 0.9% thích hợp từ kho dược.`
    },
    {
      title: 'Bước 2: Hoàn nguyên lọ thuốc (Pha ban đầu)',
      icon: '💉',
      description: `Rút chính xác ${antibiotic.diluentVolumeMl} mL dung môi liên quan (${antibiotic.recommendedDiluents.join(', ')}). Cắm kim qua nút cao su, bơm chậm vào thành lọ để tránh xủi bọt. Lắc đều nhẹ nhàng cho bột tan hoàn toàn.`,
      vialsNeeded: `Sau khi hòa tan, đạt nồng độ chuẩn là ${antibiotic.reconstitutionConcentrationMgMl} mg/mL.`
    },
    {
      title: 'Bước 3: Pha loãng truyền dịch (Nếu có chỉ định)',
      icon: '🧪',
      description: `Khuyên dùng pha loãng dung dịch đã hoàn nguyên vào chai truyền tĩnh mạch thể tích từ ${infusionVolume} mL dung dịch tương thích (${antibiotic.infusionInstructions.allowedDiluents.join(', ')}). Lắc nhẹ nhãn dán chai để phân bố đều chất kháng khuẩn.`,
      vialsNeeded: '⚠️ Amoxicillin/Clavulanic rất kém bền vững trong Glucose, chỉ pha trong NaCl 0.9%!'
    },
    {
      title: 'Bước 4: Thiết lập tiêm/truyền tĩnh mạch',
      icon: '⏱️',
      description: `Đuổi khí dây truyền dịch, gắn trực tiếp qua máy truyền dịch hoặc đếm giọt có kiểm soát trong thời gian ${infusionDuration} phút. Sát trùng cổng kết nối và thực hiện kết nối với kim luồn tĩnh mạch của bệnh nhi/bệnh nhân.`,
      vialsNeeded: 'Theo dõi sát phản ứng sốc phản vệ hoặc đau cục bộ viêm tĩnh mạch do tốc độ truyền quá nhanh.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-6 space-y-6" id="prep-guide-component">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-50 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Beaker className="w-5 h-5 text-teal-600 animate-pulse" />
            Hướng dẫn Quy trình Pha chế chuẩn
          </h3>
          <p className="text-slate-500 text-xs">
            Trình tự thao tác lâm sàng chuẩn quốc tế cho <strong className="text-teal-700">{antibiotic.name}</strong>.
          </p>
        </div>

        {/* Minimal steps tracker */}
        <div className="flex items-center gap-1.5 self-start md:self-auto">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-all ${
                activeStep === idx
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-100'
                  : 'bg-slate-100 text-slate-550 hover:bg-slate-205'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Steps contents mapping */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left side step details */}
        <div className="md:col-span-7 bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{steps[activeStep].icon}</span>
            <h4 className="text-sm font-bold text-slate-850 tracking-tight">
              {steps[activeStep].title}
            </h4>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {steps[activeStep].description}
          </p>

          <div className="bg-white border border-slate-200/60 p-3 rounded-lg text-xs text-slate-550 space-y-1">
            <strong className="text-slate-700 block mb-0.5">💡 Thao tác quan trọng:</strong>
            {steps[activeStep].vialsNeeded}
          </div>

          {/* Navigation standard */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200/50">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-40 disabled:hover:text-slate-500 py-1 px-2.5 rounded hover:bg-slate-200/40 transition-colors"
            >
              Quay lại
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className="text-xs font-semibold text-teal-700 hover:text-teal-900 disabled:opacity-40 disabled:hover:text-teal-700 py-1 px-3 bg-teal-550/10 hover:bg-teal-50 rounded flex items-center gap-1 transition-colors"
            >
              Bước tiếp theo
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Visual interactive diagram rendering */}
        <div className="md:col-span-5 border border-slate-100 rounded-xl p-4 md:p-5 flex flex-col justify-center items-center text-center space-y-4 bg-white min-h-[220px]">
          {activeStep === 0 && (
            <div className="space-y-3 w-full">
              <span className="text-xs font-semibold text-slate-500 block uppercase">Minh họa vô trùng</span>
              {/* Hands sanitizer graphic */}
              <div className="h-24 flex items-center justify-center relative bg-teal-50/20 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 animate-pulse">
                  🧼
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                Hãy rửa kỹ kẽ tay và móng tay. Sát khuẩn lọ kháng sinh 100% bằng bông cồn trước khi chọc kim.
              </p>
            </div>
          )}

          {activeStep === 1 && (
            <div className="space-y-3 w-full">
              <span className="text-xs font-semibold text-slate-500 block uppercase">Hoàn nguyên cơ bản</span>
              <div className="h-24 flex items-center justify-center gap-4 bg-teal-50/20 rounded-lg">
                {/* Reconstitute graphical vial representing fluid levels */}
                <div className="w-10 h-16 border-2 border-slate-400 rounded-lg bg-slate-100/70 relative flex flex-col justify-end overflow-hidden">
                  <div className="h-4 bg-slate-350 bg-teal-550 w-full animate-pulse"></div>
                  <span className="text-[7px] text-slate-600 font-bold absolute inset-0 flex items-center justify-center text-center">BIOTIC VIAL</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="w-10 h-16 border-2 border-slate-400 rounded-lg bg-slate-100/70 relative flex flex-col justify-end overflow-hidden">
                  <div className="h-10 bg-teal-350 bg-teal-400/40 w-full transition-all"></div>
                  <span className="text-[7px] text-slate-800 font-bold absolute inset-x-0 bottom-2 text-center">TAN HOÀN</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                Bơm dịch dốc theo thành kính để thuốc hòa loãng tự nhiên, tránh lắc xóc bọt khí làm chậm thời gian hòa tan.
              </p>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-3 w-full">
              <span className="text-xs font-semibold text-slate-500 block uppercase">Pha loãng truyền tĩnh mạch</span>
              <div className="h-24 flex items-center justify-center gap-3 bg-teal-550/5 rounded-lg relative">
                {/* Syringe empty syringe going to mini infusion bottle */}
                <div className="w-12 h-16 border border-teal-500/30 bg-teal-600/10 rounded-xl relative flex flex-col items-center justify-end overflow-hidden">
                  <div className="h-8 bg-teal-400/25 w-full"></div>
                  <span className="text-[8px] font-bold text-teal-800 absolute top-2">Dịch truyền</span>
                </div>
                <div className="text-teal-600 font-extrabold text-xs">+</div>
                <div className="text-xs font-mono text-indigo-700 bg-white shadow-sm border border-slate-150 px-2 py-1 rounded">
                  {infusionVolume} mL
                </div>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                Dùng NaCl 0.9% hoặc Glucose 5% thích hợp đạt nồng độ tối ưu để chống biến chứng viêm mạch huyết khối.
              </p>
            </div>
          )}

          {activeStep === 3 && (
            <div className="space-y-3 w-full">
              <span className="text-xs font-semibold text-slate-550 block uppercase">Giám sát tốc độ truyền dịch</span>
              <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-lg text-left text-[11px] space-y-1 text-slate-600">
                <div className="flex justify-between border-b border-slate-200/50 pb-1">
                  <span>Tốc độ máy truyền dịch:</span>
                  <strong className="text-teal-700 text-xs">{mlPerHour.toFixed(0)} mL/giờ</strong>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Đếm giọt ({dripSetType} giọt/ml):</span>
                  <strong className="text-teal-700 text-xs">{dropsPerMinute.toFixed(1)} giọt/phút</strong>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                *Tải truyền an toàn tối ưu trong khoảng 30 - 60 phút.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Standard Drip Calculator integration with drip simulator animation */}
      {antibiotic.routes.ivInfusion && (
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/60 pb-3">
            <div>
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-550 text-indigo-600" />
                Bộ tính tốc độ truyền tĩnh mạch thế hệ mới
              </h4>
              <p className="text-[11px] text-slate-500">
                Nhập thể tích dịch hòa và thời gian bác sĩ chỉ định truyền tĩnh mạch để phòng tránh ngộ độc nhịp truyền.
              </p>
            </div>

            {/* Drip set selector */}
            <div className="flex bg-white rounded-lg border border-slate-200 p-0.5 text-xs text-slate-650 self-start md:self-auto shadow-sm">
              <button
                onClick={() => setDripSetType(20)}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  dripSetType === 20 ? 'bg-indigo-600 text-white shadow-sm' : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                Dây truyền chuẩn (20g/ml)
              </button>
              <button
                onClick={() => setDripSetType(60)}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  dripSetType === 60 ? 'bg-indigo-600 text-white shadow-sm' : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                Dây truyền nhi (60g/ml)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Slide and custom parameters */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-slate-200/80 bg-white rounded-lg p-3.5 space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-500">Thể tích truyền (mL)</label>
                  <input
                    type="number"
                    min="10"
                    max="1000"
                    value={infusionVolume}
                    onChange={(e) => setInfusionVolume(Math.max(10, Math.min(1000, parseInt(e.target.value) || 10)))}
                    className="w-16 text-center text-xs font-bold border border-slate-200 rounded py-0.5 text-indigo-750"
                  />
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={infusionVolume}
                  onChange={(e) => setInfusionVolume(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400">
                  <span>50 mL (Bơm tiêm điện)</span>
                  <span>100 mL</span>
                  <span>250 mL</span>
                  <span>500 mL</span>
                </div>
              </div>

              <div className="border border-slate-200/80 bg-white rounded-lg p-3.5 space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-500">Thời gian truyền (phút)</label>
                  <input
                    type="number"
                    min="10"
                    max="360"
                    value={infusionDuration}
                    onChange={(e) => setInfusionDuration(Math.max(10, Math.min(360, parseInt(e.target.value) || 10)))}
                    className="w-16 text-center text-xs font-bold border border-slate-200 rounded py-0.5 text-indigo-750"
                  />
                </div>
                <input
                  type="range"
                  min="15"
                  max="120"
                  step="5"
                  value={infusionDuration}
                  onChange={(e) => setInfusionDuration(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400">
                  <span>15 phút</span>
                  <span>30 phút</span>
                  <span>60 phút</span>
                  <span>120 phút</span>
                </div>
              </div>
            </div>

            {/* Drip Emulator Graphic Visual & Calculation outputs */}
            <div className="md:col-span-4 bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between overflow-hidden relative border border-slate-800">
              <div className="space-y-1.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">Kết quả đếm dây giọt</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-teal-400">{dropsPerMinute.toFixed(1)}</span>
                  <span className="text-xs font-bold text-slate-300">giọt / phút</span>
                </div>
                <span className="text-[10px] text-slate-400 block font-mono">~ 1 giọt mỗi {secondsPerDrop.toFixed(2)} giây</span>
              </div>

              {/* Drip Simulator Chamber Animation */}
              <div className="h-16 flex items-center justify-between border-t border-slate-800 mt-2 pt-2 bg-slate-950/60 rounded px-2.5">
                <div className="flex flex-col justify-center leading-tight">
                  <span className="text-[9px] text-slate-400 block">Tốc độ Bơm tiêm:</span>
                  <strong className="text-sm text-indigo-300 font-bold">{mlPerHour.toFixed(0)} mL/giờ</strong>
                </div>

                {/* Animated Drop Chamber */}
                <div className="w-8 h-10 border border-slate-700 rounded-md bg-slate-900 relative overflow-hidden flex flex-col items-center">
                  {/* Drip needle */}
                  <div className="w-1 h-3 bg-slate-500 rounded-b"></div>

                  {/* Falling droplet */}
                  <div
                    key={dripTrigger}
                    className="w-1.5 h-2 bg-teal-400 rounded-full absolute top-2 transform translate-x-[-50%] animate-bounce opacity-80"
                    style={{
                      animation: `bounce ${Math.min(1.5, secondsPerDrop)}s infinite`
                    }}
                  ></div>

                  {/* Accumulated pool level */}
                  <div className="absolute bottom-0 inset-x-0 h-1.5 bg-teal-500/40"></div>
                </div>

                {/* Play pause controller */}
                <button
                  onClick={() => setIsDripPlaying(!isDripPlaying)}
                  className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  title={isDripPlaying ? 'Tạm dừng mô phỏng giọt' : 'Khởi chạy mô phỏng giọt'}
                >
                  {isDripPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Dope check warning about timing */}
          {infusionDuration < 20 && (
            <div className="bg-rose-50 border border-rose-150 rounded-lg p-3 text-[11px] text-rose-800 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-rose-950 block">Cảnh báo tốc độ tiêm truyền tĩnh mạch:</strong>
                Thời gian truyền tĩnh mạch dưới 20 phút có thể gây gia tăng nồng độ đáy đỉnh quá nhanh trong máu, dễ dẫn đến hội chứng nhiễm độc tuần hoàn (như Hội chứng Người Đỏ với Vancomycin, hoặc liệt cơ hô hấp khi dùng Amikacin). Vui lòng kéo dài thời gian tối thiểu theo hướng lý thuyết chuẩn sang 30-60 phút.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
