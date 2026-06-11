export interface DosageRule {
  minMgPerKgPerDay: number;
  maxMgPerKgPerDay: number;
  frequencyHours: number; // e.g., 8 means every 8 hours (3 times/day)
  description?: string;
}

export interface AgeCategoryRules {
  neonatal?: DosageRule; // < 28 days
  pediatric?: DosageRule; // 1 month to 12 years
  adult?: {
    minMgPerDay: number; // For standard adult
    maxMgPerDay: number;
    recommendedSingleDoseMg: number;
    frequencyHours: number;
  };
}

export interface PreparationStep {
  title: string;
  description: string;
  imageAlt: string;
  importantNote?: string;
}

export interface Antibiotic {
  id: string;
  name: string;
  vietnameseName?: string;
  vialStrengthMg: number; // standard vial, e.g. 1000 for 1g
  diluentVolumeMl: number; // volume to add to reconstitute vial, e.g. 10ml, 4.8ml
  recommendedDiluents: string[]; // ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%']
  reconstitutionConcentrationMgMl: number; // final concentration after reconstitution, e.g. 100 mg/ml
  routes: {
    im: boolean;
    ivDirect: boolean;
    ivInfusion: boolean;
  };
  infusionInstructions: {
    diluentVolumeMl: number; // volume for infusion, e.g. 50-100ml
    allowedDiluents: string[];
    infusionDurationMinutes: number; // e.g. 30-60
  };
  dosageRules: AgeCategoryRules;
  contraindications: string[];
  warnings: string[];
  notes: string;
  stability: {
    roomTemp: string; // duration, e.g. "6 giờ"
    refrigerated: string; // e.g. "24 giờ"
  };
}
