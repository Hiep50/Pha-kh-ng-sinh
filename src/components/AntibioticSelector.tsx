import React, { useState } from 'react';
import { Antibiotic } from '../types';
import { Search, Hash, ShieldAlert, BadgeCheck, FileText, Activity } from 'lucide-react';

interface AntibioticSelectorProps {
  antibiotics: Antibiotic[];
  selectedAntibiotic: Antibiotic;
  onSelect: (antibiotic: Antibiotic) => void;
}

export default function AntibioticSelector({
  antibiotics,
  selectedAntibiotic,
  onSelect
}: AntibioticSelectorProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string>('All');

  const classes = [
    { value: 'All', label: 'Tất cả nhóm' },
    { value: 'Cephalosporin', label: 'Cephalosporin' },
    { value: 'Carbapenem', label: 'Carbapenem' },
    { value: 'Penicillin', label: 'Beta-lactam khác' },
    { value: 'Aminoglycoside', label: 'Aminoglycoside' },
    { value: 'Glycopeptide', label: 'Glycopeptide' },
    { value: 'Quinolon', label: 'Quinolon' },
    { value: 'Nitroimidazol', label: 'Nitroimidazol' },
    { value: 'Oxazolidinon', label: 'Oxazolidinon' }
  ];

  // Helper to determine antibiotic chemical group based on properties or notes/name
  const getDrugClass = (drug: Antibiotic): string => {
    const name = drug.name.toLowerCase();
    const notes = drug.notes.toLowerCase();
    if (name.startsWith('cef') && !name.includes('clavulanate')) return 'Cephalosporin';
    if (name.includes('penem')) return 'Carbapenem';
    if (name.includes('clavulanate') || name.includes('amoxi') || name.includes('ampicillin') || name.includes('sulbactam') || name.includes('penicillin') || name.includes('piperacillin') || name.includes('tazobactam') || name.includes('oxacillin') || name.includes('cloxacilin') || name.includes('cloxacillin')) return 'Penicillin';
    if (name.includes('amikacin') || name.includes('gentamicin')) return 'Aminoglycoside';
    if (name.includes('vanco')) return 'Glycopeptide';
    if (name.includes('floxacin') || name.includes('quinolon')) return 'Quinolon';
    if (name.includes('metronidazol')) return 'Nitroimidazol';
    if (name.includes('linezolid') || name.includes('oxazolidinon')) return 'Oxazolidinon';
    return 'Khác';
  };

  const filteredAntibiotics = antibiotics.filter((item) => {
    const drugClass = getDrugClass(item);
    const matchesClass = selectedClass === 'All' || drugClass === selectedClass;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      (item.vietnameseName && item.vietnameseName.toLowerCase().includes(query)) ||
      item.notes.toLowerCase().includes(query) ||
      drugClass.toLowerCase().includes(query);

    return matchesClass && matchesSearch;
  });

  return (
    <div className="space-y-4" id="antibiotic-selector-panel">
      {/* Search Bar and Group Filter */}
      <div className="bg-white rounded-2xl border border-slate-100 p-4 md:p-5 shadow-sm space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
          <input
            type="text"
            placeholder="Gõ tên kháng sinh để tìm kiếm nhanh (e.g., Ceftriaxone, Meropenem...)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-sm font-medium text-slate-850 placeholder:text-slate-400 outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-650"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Categories Tab Pill Selector */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {classes.map((cls) => (
            <button
              key={cls.value}
              onClick={() => setSelectedClass(cls.value)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                selectedClass === cls.value
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-700'
              }`}
            >
              {cls.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results / Matches */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
        {filteredAntibiotics.length > 0 ? (
          filteredAntibiotics.map((drug) => {
            const isSelected = selectedAntibiotic.id === drug.id;
            const drugClass = getDrugClass(drug);

            return (
              <div
                key={drug.id}
                onClick={() => onSelect(drug)}
                className={`cursor-pointer rounded-2xl p-4.5 border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-50/50 border-indigo-600 ring-1 ring-indigo-500/20 shadow-md shadow-indigo-100/50'
                    : 'bg-white border-slate-100 hover:border-slate-205 hover:bg-slate-50/40 shadow-sm'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-1">
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-100 text-slate-600 block w-fit">
                      {drugClass}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {drug.vialStrengthMg >= 1000 ? `${drug.vialStrengthMg / 1000}g` : `${drug.vialStrengthMg}mg`}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-850 tracking-tight m-0">
                      {drug.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      {drug.vietnameseName}
                    </span>
                  </div>
                </div>

                {/* Micro drug brief tags */}
                <div className="flex items-center gap-1.5 pt-3.5 mt-3.5 border-t border-slate-100 text-[10px] text-slate-450 font-medium">
                  <Hash className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">
                    Hoàn nguyên: <strong className="text-slate-650">{drug.diluentVolumeMl}mL</strong>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="truncate">
                    Dải liều: <strong className="text-slate-650">{drug.reconstitutionConcentrationMgMl}mg/ml</strong>
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <span className="text-2xl block mb-2">🔍</span>
            <p className="text-sm font-semibold text-slate-700">Không tìm thấy kháng sinh phù hợp</p>
            <p className="text-xs text-slate-400 mt-1">Vui lòng kiểm tra lại chính tả hoặc chọn một nhóm kháng sinh khác ở bộ lọc phía trên.</p>
          </div>
        )}
      </div>
    </div>
  );
}
