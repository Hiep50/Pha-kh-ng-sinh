import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HeartPulse,
  Activity,
  Syringe,
  ShieldCheck,
  Calculator,
  BookOpen,
  Info,
  Calendar,
  Layers,
  ArrowRight,
  AlertTriangle,
  Beaker,
  FileSpreadsheet
} from 'lucide-react';

import { antibioticsData } from './data/antibiotics';
import { Antibiotic } from './types';

// Components
import AntibioticSelector from './components/AntibioticSelector';
import DoseCalculator from './components/DoseCalculator';
import PreparationGuide from './components/PreparationGuide';
import SafetyGuidelines from './components/SafetyGuidelines';

export default function App() {
  const [selectedAntibiotic, setSelectedAntibiotic] = useState<Antibiotic>(antibioticsData[0]);
  const [activeTab, setActiveTab] = useState<'calculator' | 'guide' | 'safety'>('calculator');

  // Change drug handler
  const handleSelectAntibiotic = (drug: Antibiotic) => {
    setSelectedAntibiotic(drug);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased" id="main-application-frame">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 px-4 md:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-150 relative overflow-hidden">
            <HeartPulse className="w-5 h-5 animate-pulse" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-sky-300 rounded-bl-lg"></div>
          </div>
          <div>
            <h1 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5 leading-none">
              Pha Kháng Sinh & Tính Liều Lâm Sàng
              <span className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider scale-95 origin-left">PRO</span>
            </h1>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              Phần mềm tra cứu liều lượng, cách pha tiêm truyền và xử lý an toàn lâm sàng
            </p>
          </div>
        </div>

        {/* Global Stats or badges */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-150 px-3 py-1.5 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Cập nhật hướng dẫn: Bộ Y Tế Việt Nam (2026/2027)</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-6">
        
        {/* Step-by-Step interactive process bar */}
        <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-1.5 flex-grow">
            <div className="text-teal-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              QUY TRÌNH CHUẨN ĐÚNG LÂM SÀNG
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
              Kê liều, pha loãng & truyền dịch an toàn cho người lớn và trẻ em
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              Chọn tên loại kháng sinh bạn cần pha tiêm bên dưới. Ứng dụng tự động tính dải liều theo cân nặng của từng lứa tuổi (Sơ sinh, trẻ em, người lớn), số mL dung môi bồi hoàn cần rút trong xi-lanh và hiển thị mô phỏng giọt truyền thực tế.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <span className="text-xs text-indigo-200">Đang chọn:</span>
            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
              <strong className="text-white block text-sm">{selectedAntibiotic.name}</strong>
              <span className="text-[10px] text-teal-300 block font-medium">{selectedAntibiotic.vietnameseName}</span>
            </div>
          </div>
        </section>

        {/* 1. Antibiotic Search & Select Section */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Danh mục Kháng sinh Tiêm truyền</h3>
          </div>
          <AntibioticSelector
            antibiotics={antibioticsData}
            selectedAntibiotic={selectedAntibiotic}
            onSelect={handleSelectAntibiotic}
          />
        </section>

        {/* 2. Interactive Navigation tabs for current drug details */}
        <section className="space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-px">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                  activeTab === 'calculator'
                    ? 'border-indigo-600 text-indigo-700 bg-indigo-50/40 rounded-t-lg'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-t-lg'
                }`}
              >
                <Calculator className="w-4 h-4" />
                Dự tính Liều lượng (mg & mL)
              </button>
              <button
                onClick={() => setActiveTab('guide')}
                className={`py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                  activeTab === 'guide'
                    ? 'border-indigo-600 text-indigo-700 bg-indigo-50/40 rounded-t-lg'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-t-lg'
                }`}
              >
                <Beaker className="w-4 h-4" />
                Cách pha & Đếm giọt truyền
              </button>
              <button
                onClick={() => setActiveTab('safety')}
                className={`py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
                  activeTab === 'safety'
                    ? 'border-indigo-600 text-indigo-700 bg-indigo-50/40 rounded-t-lg'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-t-lg'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                Cảnh báo an toàn (SOP)
              </button>
            </div>

            <div className="text-[11px] text-slate-400 font-mono hidden md:block">
              Kháng sinh ID: <span className="font-semibold">{selectedAntibiotic.id}</span>
            </div>
          </div>

          {/* Tab Views Container with fade animations */}
          <div className="bg-transparent">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedAntibiotic.id}-${activeTab}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'calculator' && (
                  <DoseCalculator antibiotic={selectedAntibiotic} />
                )}

                {activeTab === 'guide' && (
                  <PreparationGuide antibiotic={selectedAntibiotic} />
                )}

                {activeTab === 'safety' && (
                  <div className="space-y-6">
                    {/* Clinical references specific to drug */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-base font-bold text-slate-850 flex items-center gap-2 border-b border-slate-50 pb-2">
                          <AlertTriangle className="w-4.5 h-4.5 text-rose-500" />
                          Lưu ý Chống chỉ định (Contraindications)
                        </h4>
                        <ul className="space-y-2.5 text-xs text-slate-650">
                          {selectedAntibiotic.contraindications.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 bg-rose-50/30 p-2.5 border border-rose-100/50 rounded-lg">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 flex-shrink-0 mt-1"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-base font-bold text-slate-850 flex items-center gap-2 border-b border-slate-50 pb-2">
                          <Info className="w-4.5 h-4.5 text-amber-500 animate-pulse" />
                          Cảnh báo Lâm sàng Đặc biệt
                        </h4>
                        <ul className="space-y-2.5 text-xs text-slate-650">
                          {selectedAntibiotic.warnings.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 bg-amber-50/30 p-2.5 border border-amber-100/40 rounded-lg">
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0 mt-1"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-[11px] text-indigo-750">
                          <strong>Ghi chú bổ sung:</strong> {selectedAntibiotic.notes}
                        </div>
                      </div>
                    </div>

                    {/* Standard safety SOP guidelines dashboard */}
                    <SafetyGuidelines />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 px-4 md:px-8 border-t border-slate-800 mt-12 text-center" id="applet-footer">
        <div className="max-w-7xl mx-auto space-y-3">
          <p className="font-semibold text-slate-300">
            Ứng dụng Pha và Tính Liều Kháng Sinh Tiêm truyền Lâm Sàng
          </p>
          <p className="max-w-2xl mx-auto text-[11px] text-slate-500 leading-relaxed">
            Khuyên dùng: Các tính toán chỉ mang tính tham khảo và học thuật dựa trên phác đồ phổ thông của Bộ Y Tế Việt Nam và Hướng dẫn Dược thư Quốc gia. Người hành nghề y cần đối sánh lâm sàng và tự chịu trách nhiệm hoàn toàn về các quyết định sử dụng thuốc thực tế trên bệnh nhân.
          </p>
          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-600">
            © 2026 Pha Kháng Sinh & Tính Liều. Thiết kế chuẩn trực quan lâm sàng cho Bác sĩ, Dược sĩ, Điều dưỡng.
          </div>
        </div>
      </footer>
    </div>
  );
}
