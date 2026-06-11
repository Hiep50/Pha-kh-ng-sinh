import { Antibiotic } from '../types';

export const antibioticsData: Antibiotic[] = [
  {
    id: 'ceftriaxone',
    name: 'Ceftriaxone',
    vietnameseName: 'Ceftriaxone 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100, // 1000mg/10ml = 100 mg/ml
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100, // standard 50-100ml
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Glucose 10%'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 20,
        maxMgPerKgPerDay: 50,
        frequencyHours: 24,
        description: 'Liều duy nhất mỗi ngày. Tránh dùng chung dung dịch có chứa Canxi (như Ringer Lactate) ở trẻ sơ sinh.'
      },
      pediatric: {
        minMgPerKgPerDay: 50,
        maxMgPerKgPerDay: 80,
        frequencyHours: 24,
        description: 'Với viêm màng não hoặc nhiễm khuẩn nặng, có thể tăng lên 80 - 100 mg/kg/ngày (Tối đa 4g/ngày), chia làm 1 - 2 lần.'
      },
      adult: {
        minMgPerDay: 1000,
        maxMgPerDay: 4000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 24
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng (phản vệ) với kháng sinh nhóm Beta-lactam.',
      'Trẻ sơ sinh thiếu tháng dưới 41 tuần tuổi (tuổi kết hợp thai và sau sinh).',
      'Trẻ sơ sinh <28 ngày tuổi có vàng da, giảm albumin máu hoặc có bệnh lý acid-base.',
      'Không dùng chung hoặc sử dụng đồng thời đường tĩnh mạch dung dịch chứa canxi (như Ringer Lactate) ở trẻ sơ sinh tiến triển tủa lắng phối/thận.'
    ],
    warnings: [
      'Không được pha loãng Ceftriaxone với dung dịch chứa Canxi để tiêm tĩnh mạch.',
      'Sử dụng Lidocaine 1% để tiêm bắp sâu (IM) giúp giảm đau, nhưng TUYỆT ĐỐI không tiêm tĩnh mạch dung dịch chứa Lidocaine này.',
      'Theo dõi sát phản ứng quá mẫn, sốc phản vệ trong lần tiêm đầu tiên.'
    ],
    notes: 'Kháng sinh Cephalosporin thế hệ 3, phổ rộng, thời gian bán thải dài nên thường chỉ cần dùng 1 lần/ngày.',
    stability: {
      roomTemp: '6 giờ ở nhiệt độ phòng (25°C)',
      refrigerated: '24 giờ trong tủ lạnh (2 - 8°C). Sau khi để tủ lạnh tủ cần đưa về nhiệt độ phòng trước khi tiêm.'
    }
  },
  {
    id: 'cefotaxime',
    name: 'Cefotaxime',
    vietnameseName: 'Cefotaxime 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 4, // for IV direct reconstitution standard
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 250, // 1000mg/4ml = 250 mg/ml
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100, // dilution for infusion
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 25
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 100, // typically split 50/50 every 12h for <7 days, or every 8h for 7-28 days
        maxMgPerKgPerDay: 150,
        frequencyHours: 12, // default frequency representation
        description: 'Dưới 7 ngày tuổi: 100 mg/kg/ngày chia 2 lần (mỗi 12 giờ). Từ 7 - 28 ngày: 150 mg/kg/ngày chia 3 lần (mỗi 8 giờ).'
      },
      pediatric: {
        minMgPerKgPerDay: 100,
        maxMgPerKgPerDay: 150,
        frequencyHours: 8,
        description: 'Nhiễm trùng nặng/Viêm màng não có thể tăng lên đến 200 mg/kg/ngày chia 3 - 4 lần (mỗi 6-8 giờ). Tối đa 12g/ngày.'
      },
      adult: {
        minMgPerDay: 2000,
        maxMgPerDay: 12000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 12
      }
    },
    contraindications: [
      'Quá mẫn với Cefotaxime hoặc phân nhóm Cephalosporin.',
      'Trường hợp tiêm bắp: Chống chỉ định với trẻ dưới 30 tháng tuổi nếu dùng dung dịch chứa Lidocaine làm chất hòa tan.'
    ],
    warnings: [
      'Tiêm tĩnh mạch trực tiếp (IV bolus) quá nhanh (<3 phút) có thể gây rối loạn nhịp tim đe dọa tính mạng.',
      'Cần chỉnh liều ở bệnh nhân suy thận nặng (ClCl < 20 ml/phút).'
    ],
    notes: 'Cephalosporin thế hệ 3, tác dụng tốt trên vi khuẩn Gram âm mạnh và thấm tốt vào dịch não tủy.',
    stability: {
      roomTemp: '12 giờ ở nhiệt độ phòng (25°C)',
      refrigerated: '7 ngày trong tủ lạnh (2 - 8°C)'
    }
  },
  {
    id: 'augmentin',
    name: 'Amoxicillin / Clavulanate',
    vietnameseName: 'Amoxicillin / Acid Clavulanic 1.2g',
    vialStrengthMg: 1200, // 1000mg Amoxicillin + 200mg Clavulanate. Calculations based on total mg of vial.
    diluentVolumeMl: 20,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%'],
    reconstitutionConcentrationMgMl: 60, // 1200mg / 20ml = 60mg/ml
    routes: {
      im: false,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100, // diluent volume
      allowedDiluents: ['NaCl 0.9%', 'Dung dịch Ringer'], // Glucose causes rapid degradation
      infusionDurationMinutes: 35
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 60, // Total vial powder weight per kg per day (equivalent to 50mg Amox/kg)
        maxMgPerKgPerDay: 90,
        frequencyHours: 12,
        description: 'Trẻ dưới 8 ngày tuổi: Chia mỗi 12 giờ. Trẻ lớn hơn: Chia mỗi 8 giờ.'
      },
      pediatric: {
        minMgPerKgPerDay: 90,
        maxMgPerKgPerDay: 120,
        frequencyHours: 8,
        description: 'Tính theo liều Amoxicillin tổng khoảng 75 - 100 mg/kg/ngày (tương đương 90 - 120 mg bột thuốc tổng mỗi kg/ngày), chia 3 lần cách mỗi 8 giờ.'
      },
      adult: {
        minMgPerDay: 3600, // 3 x 1.2g
        maxMgPerDay: 4800, // 4 x 1.2g (nhiễm trùng cực kỳ nặng)
        recommendedSingleDoseMg: 1200,
        frequencyHours: 8
      }
    },
    contraindications: [
      'Tiền sử dị ứng với Penicillin, Cephalosporin hoặc tiền sử vàng da/suy gan liên quan đến Amox/Clavulanate.',
      'Tuyệt đối chống chỉ định tiêm bắp (IM) vì kích ứng mô dữ dội.'
    ],
    warnings: [
      'Thuốc rất kém bền vững sau khi pha. Phải sử dụng trong vòng 20 phút sau khi hoàn nguyên nếu để ở nhiệt độ phòng.',
      'Không được pha loãng với dung dịch Glucose/Dextrose hoặc Bicarbonate vì đẩy nhanh phân hủy hoạt chất.',
      'Tiêm tĩnh mạch trực tiếp chậm trong vòng ít nhất 3 - 4 phút.'
    ],
    notes: 'Kháng sinh kết hợp Penicillin phổ rộng và chất ức chế beta-lactamase, nhạy cảm cao với không khí ẩm (chỉ khui vial ngay trước khi pha).',
    stability: {
      roomTemp: 'Dùng ngay trong vòng 20 phút sau khi hoàn nguyên. Nếu truyền tĩnh mạch phải xong trước 60 phút từ lúc pha.',
      refrigerated: 'Tối đa 4 giờ (chỉ khi hoàn nguyên bằng NaCl 0.9% và bảo quản lạnh ngay lập tức).'
    }
  },
  {
    id: 'meropenem',
    name: 'Meropenem',
    vietnameseName: 'Meropenem 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 20, // 20mL water for injection for 1g vial
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 50, // 1000mg / 20ml = 50 mg/ml
    routes: {
      im: false,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 20 // 15-30 minutes
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 40, // 20mg/kg x 2
        maxMgPerKgPerDay: 120, // 40mg/kg x 3 (for meningitis)
        frequencyHours: 12,
        description: 'Dưới 7 ngày tuổi hoặc trẻ sinh non: 20 mg/kg mỗi 12 giờ. Từ 7 - 28 ngày: 20 - 40 mg/kg mỗi 8 giờ.'
      },
      pediatric: {
        minMgPerKgPerDay: 30, // 10mg/kg x 3
        maxMgPerKgPerDay: 120, // 40mg/kg x 3 (meningitis)
        frequencyHours: 8,
        description: 'Liều thông thường: 10 - 20 mg/kg mỗi 8 giờ. Viêm màng não hoặc bệnh nhân nhi xơ nang lồng ngực: 40 mg/kg mỗi 8 giờ (Tối đa 2g mỗi 8 giờ).'
      },
      adult: {
        minMgPerDay: 1500, // 500mg x 3
        maxMgPerDay: 6000, // 2g x 3
        recommendedSingleDoseMg: 1000,
        frequencyHours: 8
      }
    },
    contraindications: [
      'Quá mẫn nghiêm trọng (phản ứng dạng phản vệ) với bất kỳ kháng sinh nhóm Carbapenem nào hoặc nhóm Beta-lactam khác.'
    ],
    warnings: [
      'Có thể xảy ra co giật, đặc biệt ở bệnh nhân có tổn thương hệ thần kinh trung ương trung gian hoặc suy thận nặng.',
      'Cần điều chỉnh liều cẩn thận dựa trên độ thanh thải Creatinine (ClCl) ở bệnh nhân suy thận.'
    ],
    notes: 'Carbapenem phổ cực rộng, bền vững cao với hầu hết các beta-lactamase (ESBL, AmpC). Thường dành cho nhiễm khuẩn bệnh viện nặng.',
    stability: {
      roomTemp: 'Hoàn nguyên nước cất: Bền trong 2 giờ. Nếu pha loãng truyền với NaCl 0.9%: Ổn định 4 giờ ở nhiệt độ phòng.',
      refrigerated: 'Pha trong NaCl 0.9%: 24 giờ trong tủ lạnh. Pha trong Glucose 5%: Kém bền hơn nhiều (dùng ngay, không lưu trữ tủ lạnh lâu).'
    }
  },
  {
    id: 'ceftazidime',
    name: 'Ceftazidime',
    vietnameseName: 'Ceftazidime 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10, // IV standard reconstitution volume
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100, // 1000mg / 10ml = 100 mg/ml
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 25
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 60, // 30mg/kg mỗi 12 giờ
        maxMgPerKgPerDay: 100, // 50mg/kg mỗi 12 giờ
        frequencyHours: 12,
        description: 'Trẻ sơ sinh <28 ngày tuổi: Tiêu chuẩn 30 mg/kg mỗi 12 giờ. Mức độ rất nặng có thể lên tới 50 mg/kg mỗi 12 giờ.'
      },
      pediatric: {
        minMgPerKgPerDay: 100, // 30-50mg/kg x 3
        maxMgPerKgPerDay: 150,
        frequencyHours: 8,
        description: 'Nhiễm trùng thường: 100 - 150 mg/kg/ngày chia 3 lần (mỗi 8 giờ). Nhiễm trùng suy giảm miễn dịch hoặc viêm màng não: Có thể tăng lên 150 mg/kg/ngày. Tối đa 6g/ngày.'
      },
      adult: {
        minMgPerDay: 3000, // 1g x 3
        maxMgPerDay: 6000, // 2g x 3
        recommendedSingleDoseMg: 2000,
        frequencyHours: 8
      }
    },
    contraindications: [
      'Dị ứng nghiêm trọng với Ceftazidime, kháng sinh khác cùng phân nhóm Cephalosporin.'
    ],
    warnings: [
      'Khi lắc pha bột Ceftazidime, khí CO2 sẽ được giải phóng làm gia tăng áp suất trong lọ thuốc. Cần cắm kim rỗng vào nút cao su để giải phóng khí áp trước khi rút dung dịch!',
      'Giảm liều cho bệnh nhân suy giảm chức năng thận.'
    ],
    notes: 'Cephalosporin thế hệ 3, đặc trị vi khuẩn trực khuẩn mủ xanh (Pseudomonas aeruginosa).',
    stability: {
      roomTemp: '18 giờ ở nhiệt độ phòng (25°C)',
      refrigerated: '7 ngày ở nhiệt độ tủ lạnh (2 - 8°C)'
    }
  },
  {
    id: 'amikacin',
    name: 'Amikacin',
    vietnameseName: 'Amikacin 500mg',
    vialStrengthMg: 500,
    diluentVolumeMl: 2, // commonly comes as 500mg/2ml liquid or reconstituted in 2ml
    recommendedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Nước cất pha tiêm'],
    reconstitutionConcentrationMgMl: 250, // 500mg / 2ml = 250 mg/ml
    routes: {
      im: true,
      ivDirect: false, // IV bolus is dangerous, avoid direct bolus
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100, // for children, standard range 1-2.5 mg/ml ratio
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 45 // 30-60 minutes
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 15,
        maxMgPerKgPerDay: 15,
        frequencyHours: 24, // dose once daily
        description: 'Khuyến cáo tiêm liều nạp ban đầu (Loading dose) 15 mg/kg, sau đó duy trì liều 7.5 mg/kg mỗi 12 giờ hoặc 15 mg/kg một lần duy nhất hàng ngày.'
      },
      pediatric: {
        minMgPerKgPerDay: 15,
        maxMgPerKgPerDay: 20,
        frequencyHours: 24,
        description: 'Thông thường 15 mg/kg mỗi ngày hoặc 5 - 7.5 mg/kg mỗi 8 - 12 giờ. Cần giám sát nồng độ thuốc trong máu nếu truyền kéo dài hơn 7 ngày.'
      },
      adult: {
        minMgPerDay: 1000, // typically 15mg/kg, e.g. 750mg - 1000mg/day
        maxMgPerDay: 1500,
        recommendedSingleDoseMg: 500,
        frequencyHours: 24
      }
    },
    contraindications: [
      'Quá mẫn với Amikacin hoặc các kháng sinh aminoglycosid khác (Gentamicin, Tobramycin).',
      'Người có bệnh nhược cơ (Myasthenia gravis) do tác dụng thần kinh - cơ.'
    ],
    warnings: [
      'Aminoglycosid có độc tính cao đối với thính giác (tai trong gây điếc không hồi phục) và thận (gây hoại tử ống thận cấp).',
      'TUYỆT ĐỐI KHÔNG tiêm tĩnh mạch trực tiếp (IV Bolus). Phải truyền tĩnh mạch chậm trong 30-60 phút để tránh ức chế hô hấp và liệt cơ.',
      'Tránh phối hợp đồng thời với các thuốc độc thần kinh/thận khác như Furosemide, Vancomycin.'
    ],
    notes: 'Thuốc nhóm Aminoglycosid, diệt khuẩn cực mạnh trên Gram âm hiếu khí nhờ ức chế tổng hợp protein.',
    stability: {
      roomTemp: '24 giờ ở nhiệt độ phòng',
      refrigerated: '48 giờ trong tủ lạnh'
    }
  },
  {
    id: 'imipenem',
    name: 'Imipenem / Cilastatin',
    vietnameseName: 'Imipenem / Cilastatin 500mg/500mg',
    vialStrengthMg: 500, // defined as 500mg of Imipenem portion
    diluentVolumeMl: 100, // Typically reconstitution happens inside a 100ml fluid bag
    recommendedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 5, // 500mg/100ml = 5 mg/ml
    routes: {
      im: false,
      ivDirect: false, // IV direct pushes are NOT allowed
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 40 // ~40-60 mins for 500mg
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 40, // 20mg/kg each dose split
        maxMgPerKgPerDay: 60,
        frequencyHours: 12,
        description: 'Trẻ dưới 1 tuần tuổi: 20 mg/kg mỗi 12 giờ. Trẻ 1 - 4 tuần tuổi: 20 mg/kg mỗi 8 giờ. Lưu ý thuốc ít khi chỉ định sơ sinh trừ khi nhiễm khuẩn kháng thuốc nặng.'
      },
      pediatric: {
        minMgPerKgPerDay: 60, // 15 mg/kg x 4 (every 6h)
        maxMgPerKgPerDay: 100, // 25 mg/kg x 4 (viêm màng mủ tối đa)
        frequencyHours: 6,
        description: 'Liều thông thường: 15 mg/kg liều đơn cách mỗi 6 giờ (Tổng 60 mg/kg/ngày). Tối đa 2g/ngày.'
      },
      adult: {
        minMgPerDay: 1500, // 500mg mỗi 8h
        maxMgPerDay: 4000, // 1000mg mỗi 6h hoặc 4g/ngày
        recommendedSingleDoseMg: 500,
        frequencyHours: 6
      }
    },
    contraindications: [
      'Quá mẫn cực kỳ nghiêm trọng với Imipenem hoặc Cilastatin.'
    ],
    warnings: [
      'Bột Imipenem rất khó hòa tan trực tiếp. Kỹ thuật chuẩn: Rút 10mL từ chai truyền 100mL bơm vào lọ thuốc, lắc kỹ cho tan, rồi rút ngược bơm lại về chai truyền để thực hiện truyền!',
      'Gây nguy cơ co giật cao hơn các kháng sinh beta-lactam khác, đặc biệt với liều cao hơn 2g/ngày hoặc có bệnh lý thần kinh trung ương đi kèm.',
      'Tuyệt đối không tiêm IV trực tiếp nhanh dưới dạng bolus.'
    ],
    notes: 'Cilastatin đi kèm có nhiệm vụ bảo vệ Imipenem khỏi sự phân hủy của enzyme dehydropeptidase I chuỗi thận.',
    stability: {
      roomTemp: '4 giờ ở nhiệt độ phòng khi pha trong NaCl 0.9%. Không để lâu sau khi pha.',
      refrigerated: '24 giờ trong tủ lạnh ở nhiệt độ 2 - 8°C (với NaCl 0.9%).'
    }
  },
  {
    id: 'vancomycin',
    name: 'Vancomycin',
    vietnameseName: 'Vancomycin 500mg',
    vialStrengthMg: 500,
    diluentVolumeMl: 10, // First reconstitution with 10mL water for injection
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%'],
    reconstitutionConcentrationMgMl: 50, // 500mg / 10ml = 50 mg/ml
    routes: {
      im: false, // Absolutely forbidden IM because of necrosis
      ivDirect: false, // Danger of Red Man Syndrome! MUST NOT BOLUS
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100, // Minimum 100ml for 500mg (concentration must not exceed 5mg/ml)
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 60 // Minimum duration 60 minutes or 10mg/minute speed!
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 30, // 10-15 mg/kg split every 8-12h depending on GA
        maxMgPerKgPerDay: 45,
        frequencyHours: 12,
        description: 'Trẻ sơ sinh <28 ngày: Liều nạp 15 mg/kg, duy trì 10 - 15 mg/kg mỗi 8 - 12-24 giờ tùy theo tuổi thai và chức năng thận.'
      },
      pediatric: {
        minMgPerKgPerDay: 40, // 10 mg/kg mỗi 6 giờ
        maxMgPerKgPerDay: 60, // 15 mg/kg mỗi 6 giờ
        frequencyHours: 6,
        description: 'Thông thường khoảng 40 - 60 mg/kg/ngày chia làm 4 lần (mỗi 6 giờ). Cần theo dõi nồng độ đáy kháng sinh (trough level) để tránh suy thận.'
      },
      adult: {
        minMgPerDay: 2000, // 1000mg mỗi 12h
        maxMgPerDay: 4000, // lên tới 4g cho nhiễm trùng MRSA màng não tim
        recommendedSingleDoseMg: 1000,
        frequencyHours: 12
      }
    },
    contraindications: [
      'Quá mẫn nặng với Vancomycin.',
      'TUYỆT ĐỐI không tiêm bắp (IM) vì gây hoại tử mô tại vị trí tiêm cực kỳ nghiêm trọng.'
    ],
    warnings: [
      'Hội chứng "Người Đỏ" (Red Man Syndrome): Do truyền tĩnh mạch quá nhanh, gây giải phóng histamine ồ ạt dẫn đến bốc hỏa, phát ban đỏ nửa người trên, huyết áp tụt sâu. Phải truyền tĩnh mạch chậm trong ít nhất 60 phút!',
      'Gây độc mạnh lên thận và ốc tai (giảm hoặc mất thăng bằng thính lực), rủi ro nhân lên khi dùng chung Amikacin hay Furosemide.',
      'Dễ gây viêm tĩnh mạch hóa học, nên chọn tĩnh mạch lớn hoặc pha loãng tối đa (không vượt quá 5 mg/mL).'
    ],
    notes: 'Kháng sinh Glycopeptide chu kỳ mạnh mẽ, vũ khí hàng đầu chống lại vi khuẩn Gram dương kháng kháng sinh, đặc biệt là MRSA (S. aureus kháng Methicillin).',
    stability: {
      roomTemp: 'Sau khi hoàn nguyên với nước cất: 24 giờ ở nhiệt độ phòng.',
      refrigerated: 'Ổn định trong 14 ngày ở nhiệt độ tủ lạnh (2 - 8°C) đối với cả dịch hoàn nguyên tĩnh mạch.'
    }
  },
  {
    id: 'levofloxacin',
    name: 'Levofloxacin',
    vietnameseName: 'Levofloxacin 500mg/100ml',
    vialStrengthMg: 500,
    diluentVolumeMl: 100, // Pre-diluted
    recommendedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 5, // 500mg/100ml = 5 mg/ml
    routes: {
      im: false,
      ivDirect: false,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 60
    },
    dosageRules: {
      pediatric: {
        minMgPerKgPerDay: 10,
        maxMgPerKgPerDay: 20,
        frequencyHours: 12,
        description: 'Chỉ định hạn chế ở trẻ em do rủi ro phát triển sụn khớp bất thường. Dùng trong nhiễm trùng nặng (phổi xơ nang xơ, nhiễm khuẩn bệnh viện) đề kháng: 10 mg/kg mỗi 12 giờ.'
      },
      adult: {
        minMgPerDay: 500,
        maxMgPerDay: 750,
        recommendedSingleDoseMg: 500,
        frequencyHours: 24
      }
    },
    contraindications: [
      'Tiền sử quá mẫn nghiêm trọng với Levofloxacin, kháng sinh khác nhóm Quinolon.',
      'Tiền sử viêm đau gân gót Achilles liên quan đến các thuốc fluoroquinolone.',
      'Bệnh nhân động kinh chưa kiểm soát được.'
    ],
    warnings: [
      'Nguy cơ viêm gân và đứt gân gót Achilles tăng cao ở người cao tuổi (>60 tuổi) và người đang sử dụng liệu pháp corticosteroid.',
      'Kéo dài khoảng QT ảnh hưởng loạn nhịp tim; cần thận trọng ở bệnh nhân hạ kali máu hoặc tiền sử tim mạch.',
      'Nguy cơ hạ đường huyết nặng có sẵn ở bệnh nhân đái tháo đường đang dùng thuốc hạ đường huyết đường uống hoặc insulin.',
      'TUYỆT ĐỐI không tiêm tĩnh mạch nhanh (IV Bolus). Phải truyền tính mạch chậm tối thiểu trong 60 phút.'
    ],
    notes: 'Fluoroquinolones thế hệ 3, phổ cực rộng. Đặc dụng cao cho nhiễm trùng hô hấp cộng đồng đại trà cường độ cao và vi khuẩn không điển hình.',
    stability: {
      roomTemp: 'Chai dạng pha sẵn dịch truyền sử dụng trực tiếp trong vòng 24 giờ sau khi tháo seal.',
      refrigerated: 'Được bảo quản ở điều kiện tủ lạnh không dưới 4 độ C. Thường nên bảo quản ở nhiệt độ phòng, tránh ánh sáng.'
    }
  },
  {
    id: 'ciprofloxacin',
    name: 'Ciprofloxacin',
    vietnameseName: 'Ciprofloxacin 400mg/200ml',
    vialStrengthMg: 400,
    diluentVolumeMl: 200, // Pre-diluted
    recommendedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 2, // 400mg/200ml = 2 mg/ml
    routes: {
      im: false,
      ivDirect: false,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 200,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 60
    },
    dosageRules: {
      pediatric: {
        minMgPerKgPerDay: 20,
        maxMgPerKgPerDay: 30,
        frequencyHours: 12,
        description: 'Thông thường liều khuyên dùng là 10 - 15 mg/kg mỗi 12 giờ cho các chỉ định đặc biệt như nhiễm trùng đường tiết niệu phức tạp hoặc viêm khớp sụn nặng do trực khuẩn mủ xanh kháng thuốc.'
      },
      adult: {
        minMgPerDay: 400,
        maxMgPerDay: 1200,
        recommendedSingleDoseMg: 400,
        frequencyHours: 12
      }
    },
    contraindications: [
      'Quá mẫn với Ciprofloxacin, động chất quinolone khác.',
      'Sử dụng đồng thời với Tizanidine (Tizanidine làm tăng nồng độ trong máu gây hạ huyết áp kịch liệt).'
    ],
    warnings: [
      'Gây rủi ro đứt gân gót gối, viêm khớp thứ cấp kịch liệt.',
      'Tác hại lên hệ thần kinh trung ương: kích hoạt động kinh, tăng áp bẩm sinh nội sọ, lú lẫn lo âu kịch phát.',
      'Truyền tĩnh mạch chậm tối thiểu trong 60 phút ở động mạch tĩnh mạch lớn nhằm tránh đau nhức hoặc viêm hóa tĩnh mạch.'
    ],
    notes: 'Quinolone thế hệ 2, hoạt lực kháng vi khuẩn Gram âm mạnh bậc nhất, đặc dụng tiêu diệt Pseudomonas aeruginosa.',
    stability: {
      roomTemp: 'Sử dụng dung dịch pha sẵn ngay khi mở. Không cất tủ lạnh vì có khả năng kết tinh tủa dưới nhiệt độ thấp.',
      refrigerated: 'Không khuyến cáo lưu trữ tủ lạnh (dễ tinh thể hóa dịch truyền).'
    }
  },
  {
    id: 'ampicillin_sulbactam',
    name: 'Ampicillin / Sulbactam',
    vietnameseName: 'Ampicillin / Sulbactam 1.5g',
    vialStrengthMg: 1500, // 1000mg Ampicillin + 500mg Sulbactam
    diluentVolumeMl: 3.2, // standard reconstitution with 3.2ml sterile water yields 375 mg/ml (250mg Amp + 125mg Sulb per ml)
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%'],
    reconstitutionConcentrationMgMl: 375,
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Dung dịch Ringer Lactate'], // very unstable in glucose/dextrose
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 150,
        maxMgPerKgPerDay: 300,
        frequencyHours: 12,
        description: 'Trẻ sơ sinh < 7 ngày tuổi: 150 mg/kg/ngày chia làm 2 lần (mỗi 12 giờ). Trẻ từ 7 - 28 ngày tuổi: 150 - 300 mg/kg/ngày chia làm 3 lần (mỗi 8 giờ). Tính theo tổng bột ampicillin/sulbactam.'
      },
      pediatric: {
        minMgPerKgPerDay: 150,
        maxMgPerKgPerDay: 300,
        frequencyHours: 6,
        description: 'Liều thông thường: 150 mg/kg/ngày (tương đương 100mg Ampi/kg/ngày) chia làm 4 lần (mỗi 6 giờ). Nhiễm trùng nặng/Viêm màng não có thể tăng lên đến 300 mg/kg/ngày chia 3 - 4 lần (mỗi 6-8 giờ). Tối đa 12g/ngày.'
      },
      adult: {
        minMgPerDay: 6000, // 4 x 1.5g
        maxMgPerDay: 12000, // 8 x 1.5g
        recommendedSingleDoseMg: 1500,
        frequencyHours: 6
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng (phản vệ hoặc phù mạch) với Penicillin, Sulbactam hoặc kháng sinh nhóm Beta-lactam khác.',
      'Tiền sử vàng da ứ mật hoặc suy giảm chức năng gan liên quan đến dùng thuốc phối hợp có Ampicillin/Sulbactam.'
    ],
    warnings: [
      'Nguy cơ dị ứng chéo cao với Cephalosporin. Cần hỏi kỹ tiền sử dị ứng thuốc của bệnh nhân trước khi dùng thuốc.',
      'Rất dễ xuất hiện ban đỏ nổi mẩn dạng sởi không do dị ứng ở bệnh nhân mắc bệnh tăng bạch cầu đơn nhân nhiễm khuẩn (Infectious Mononucleosis).',
      'Đại đa số dung dịch chứa Glucose/Dextrose thúc đẩy sự thủy phân phân hủy nhanh hoạt chất; do vậy bắt buộc ưu tiên hoàn nguyên và pha loãng truyền bằng dung dịch NaCl 0.9% hoặc Ringer Lactate.',
      'Tiêm tĩnh mạch chậm trong vòng ít nhất 3 - 5 phút hoặc truyền chậm 15 - 30 phút để kiểm soát rủi ro sưng viêm mạch.'
    ],
    notes: 'Kháng sinh phối hợp Aminopenicillin với Sulbactam - chất ức chế enzym beta-lactamase. Có phổ diệt khuẩn rộng bao gồm cầu khuẩn, trực khuẩn Gram âm và vi khuẩn kỵ khí.',
    stability: {
      roomTemp: 'Dùng ngay trong vòng 1 giờ sau khi pha. Nếu bảo quản pha loãng trong NaCl 0.9%, ổn định tối đa 8 giờ ở nhiệt độ phòng (25°C).',
      refrigerated: 'Chỉ bền vững tối đa 48 giờ ở nhiệt độ tủ lạnh (2 - 8°C) khi được hoàn nguyên bằng dung dịch nước cất hoặc NaCl 0.9%.'
    }
  },
  {
    id: 'cefoperazone_sulbactam',
    name: 'Cefoperazone / Sulbactam',
    vietnameseName: 'Cefoperazon / Sulbactam 1g',
    vialStrengthMg: 1000, // 500mg Cefoperazone + 500mg Sulbactam
    diluentVolumeMl: 4.0, // standard reconstitution yields ~250 mg/ml
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 250,
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Dung dịch Ringer Lactate'], // do not use RL for initial reconstitution
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 40,
        maxMgPerKgPerDay: 80,
        frequencyHours: 12,
        description: 'Trẻ sơ sinh < 7 ngày tuổi: 40 - 80 mg/kg/ngày (tương đương 20 - 40 mg Cefoperazon/kg/ngày) chia làm 2 lần (mỗi 12 giờ). Trẻ sơ sinh > 7 ngày tuổi: 40 - 80 mg/kg/ngày chia làm 2 - 3 lần.'
      },
      pediatric: {
        minMgPerKgPerDay: 40,
        maxMgPerKgPerDay: 80,
        frequencyHours: 12,
        description: 'Liều thông thường ở trẻ em: 40 - 80 mg/kg/ngày (tương đương 20 - 40 mg Cefoperazon/kg/ngày) chia làm 2 - 4 lần (mỗi 6 - 12 giờ). Trường hợp nhiễm trùng nặng có thể tăng lên đến 160 mg/kg/ngày chia 2 - 4 lần.'
      },
      adult: {
        minMgPerDay: 2000, // 1g x 2
        maxMgPerDay: 4000, // 2g x 2
        recommendedSingleDoseMg: 1000,
        frequencyHours: 12
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng (phản vệ) với Cefoperazon, Sulbactam hoặc kháng sinh nhóm Cephalosporin và các Beta-lactam khác.',
      'Sử dụng chung với rượu bia hoặc các chế phẩm chứa cồn (nguy cơ phản ứng disulfiram-like).'
    ],
    warnings: [
      'Phản ứng tương tự Disulfiram: Bệnh nhân tuyệt đối không uống rượu bia hay dùng chế phẩm có cồn trong thời gian dùng thuốc và 5 ngày sau khi ngừng thuốc (gây nóng bừng, đổ mồ hôi, nhức đầu, nhịp tim nhanh).',
      'Rối loạn đông máu và xuất huyết: Có thể làm giảm tỷ lệ prothrombin huyết, đặc biệt ở bệnh nhân suy gan, suy dinh dưỡng, hoặc đang dùng thuốc kháng đông. Thận trọng theo dõi và bổ sung Vitamin K nếu cần.',
      'Không dùng dung dịch Ringer Lactate để pha hoàn nguyên trực tiếp ban đầu do tương kỵ cơ học tạo tủa calci, tuy nhiên có thể pha loãng sau đó bằng dung dịch Ringer Lactate một khi đã hoàn nguyên hoàn chỉnh bằng nước cất.',
      'Truyền tĩnh mạch chậm trong ít nhất 30 phút. Nếu tiêm tĩnh mạch trực tiếp (IV Direct), phải tiêm chậm trong vòng ít nhất 3 - 5 phút.'
    ],
    notes: 'Kháng sinh Cephalosporin thế hệ 3 phối hợp với chất ức chế Beta-lactamase Sulbactam. Có hoạt tính diệt khuẩn rất mạnh trên trực khuẩn mủ xanh (Pseudomonas aeruginosa) và đa số vi khuẩn Gram âm tiết enzyme đề kháng.',
    stability: {
      roomTemp: 'Dung dịch sau khi hoàn nguyên ổn định trong vòng 24 giờ ở nhiệt độ phòng (25°C).',
      refrigerated: 'Ổn định được tối đa 5 ngày khi bảo quản trong tủ lạnh (2 - 8°C).'
    }
  },
  {
    id: 'cefoperazone',
    name: 'Cefoperazone',
    vietnameseName: 'Cefoperazon 1g (đơn chất)',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100,
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Dung dịch Ringer Lactate'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 50,
        maxMgPerKgPerDay: 100,
        frequencyHours: 12,
        description: 'Trẻ sơ sinh < 7 ngày tuổi: 50 - 100 mg/kg/ngày chia làm 2 lần (mỗi 12 giờ). Trẻ sơ sinh > 7 ngày tuổi: 50 - 100 mg/kg/ngày chia làm 2 - 3 lần.'
      },
      pediatric: {
        minMgPerKgPerDay: 50,
        maxMgPerKgPerDay: 200,
        frequencyHours: 8,
        description: 'Liều thông thường ở trẻ em: 50 - 200 mg/kg/ngày chia làm 2 - 4 lần (mỗi 6 - 12 giờ). Trường hợp nhiễm trùng đặc biệt nặng (ví dụ viêm màng não), có thể tăng liều tối đa lên 300 mg/kg/ngày chia làm nhiều lần.'
      },
      adult: {
        minMgPerDay: 2000,
        maxMgPerDay: 4000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 12
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng (phản vệ) với Cefoperazon hoặc các kháng sinh khác nhóm Cephalosporin và Beta-lactam.',
      'Sử dụng chung với rượu bia hoặc các chế phẩm chứa cồn (nguy cơ phản ứng disulfiram-like).'
    ],
    warnings: [
      'Phản ứng tương tự Disulfiram: Tránh tuyệt đối uống rượu bia hoặc dùng các chế phẩm chứa cồn trong thời gian điều trị và tối thiểu 5 ngày sau khi ngừng thuốc (tránh đổ mồ hôi, nóng bừng, tim đập nhanh, ói mửa).',
      'Nguy cơ rối loạn đông máu (xuất huyết do giảm tỷ lệ prothrombin huyết), đặc biệt khi có suy gan, suy thận hoặc suy dinh dưỡng. Cần theo dõi chặt chẽ chỉ số INR/PT và sẵn sàng bổ sung Vitamin K.',
      'Không dùng dung dịch Ringer Lactate để pha hoàn nguyên trực tiếp từ bột do tương kỵ hóa học tạo tủa calci; chỉ pha loãng bằng Ringer Lactate sau khi bột đã được tan hoàn toàn trong nước cất hoặc NaCl 0.9%.',
      'Truyền tĩnh mạch chậm tối thiểu trong 15 - 30 phút. Đối với tiêm tĩnh mạch trực tiếp (IV Direct), phải tiêm chậm trong ít nhất 3 - 5 phút.'
    ],
    notes: 'Kháng sinh Cephalosporin thế hệ 3 đơn chất. Cực kỳ nhạy cảm và kháng hiệu quả trực khuẩn mủ xanh (Pseudomonas aeruginosa). Đào thải chủ yếu qua đường mật và mật.',
    stability: {
      roomTemp: 'Dung dịch đã hoàn nguyên ổn định trong vòng 24 giờ ở nhiệt độ phòng (25°C).',
      refrigerated: 'Ổn định được tối đa 5 ngày khi bảo quản trong tủ lạnh (2 - 8°C).'
    }
  },
  {
    id: 'metronidazol',
    name: 'Metronidazol',
    vietnameseName: 'Metronidazol 500mg/100ml',
    vialStrengthMg: 500,
    diluentVolumeMl: 100, // Pre-diluted
    recommendedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 5, // 500mg/100ml = 5 mg/ml
    routes: {
      im: false,
      ivDirect: false,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 60
    },
    dosageRules: {
      pediatric: {
        minMgPerKgPerDay: 20,
        maxMgPerKgPerDay: 40,
        frequencyHours: 8,
        description: 'Trẻ em: 20 - 40 mg/kg/ngày chia 3 - 4 lần (mỗi 6 - 8 giờ). Đối với nhiễm khuẩn kỵ khí nặng có thể cần điều chỉnh liều tùy tình trạng lâm sàng.'
      },
      adult: {
        minMgPerDay: 1000,
        maxMgPerDay: 1500,
        recommendedSingleDoseMg: 500,
        frequencyHours: 8
      }
    },
    contraindications: [
      'Quá mẫn với Metronidazol hoặc các dẫn xuất của nitroimidazol.',
      'Phụ nữ có thai trong 3 tháng đầu (trừ trường hợp bắt buộc do đe dọa tính mạng).',
      'Đang sử dụng hoặc mới sử dụng disulfiram trong vòng 2 tuần qua.'
    ],
    warnings: [
      'Phản ứng Disulfiram-like: Tuyệt đối tránh sử dụng rượu, bia hoặc các sản phẩm có cồn trong thời gian điều trị và ít nhất 3 ngày sau khi ngừng thuốc.',
      'Độc tính trên thần kinh: Có thể gây bệnh lý thần kinh ngoại biên, co giật, lú lẫn, đặc biệt khi sử dụng liều cao hoặc kéo dài. Ngừng thuốc ngay nếu xuất hiện triệu chứng thần kinh bất thường.',
      'Chỉ được tiêm truyền tĩnh mạch chậm, tốc độ truyền thường là 5ml/phút. Cần 30 - 60 phút cho một chai truyền 100ml.'
    ],
    notes: 'Kháng sinh nhóm Nitroimidazol, đặc trị vi khuẩn kỵ khí (Bacteroides, Clostridium) và một số động vật nguyên sinh (Amip, Trichomonas, Giardia).',
    stability: {
      roomTemp: 'Dạng chai truyền pha sẵn bảo quản ở nhiệt độ dưới 25°C, tránh ánh sáng. Không được để đông đá.',
      refrigerated: 'Không khuyến cáo bảo quản lạnh do có thể gây kết tinh. Nếu xuất hiện tinh thể, có thể làm ấm chai truyền đến nhiệt độ phòng để hòa tan lại.'
    }
  },
  {
    id: 'cefoxitin',
    name: 'Cefoxitin',
    vietnameseName: 'Cefoxitin 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100, // 1000mg/10ml = 100 mg/ml
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      pediatric: {
        minMgPerKgPerDay: 80,
        maxMgPerKgPerDay: 160,
        frequencyHours: 6,
        description: 'Trẻ em > 3 tháng tuổi: 80 - 160 mg/kg/ngày chia làm 4 đến 6 lần (mỗi 4 - 6 giờ). Nhiễm khuẩn nặng có thể dùng liều cao hơn nhưng không vượt quá 12g/ngày.'
      },
      adult: {
        minMgPerDay: 3000,
        maxMgPerDay: 12000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 6
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng, quá mẫn với Cefoxitin hoặc các kháng sinh nhóm Cephalosporin khác.'
    ],
    warnings: [
      'Có khả năng dị ứng chéo với Penicillin (khoảng 10%). Cần khai thác kỹ tiền sử dị ứng.',
      'Khi tiêm bắp (IM), có thể pha bằng dung dịch Lidocaine 0.5% hoặc 1% để giảm đau, TUYỆT ĐỐI không tiêm tĩnh mạch dung dịch chứa Lidocaine.',
      'Cần điều chỉnh liều lâm sàng (giảm liều hoặc kéo dài khoảng cách các liều) ở bệnh nhân suy giảm chức năng thận.'
    ],
    notes: 'Thuộc nhóm Cephamycin (xếp chung với Cephalosporin thế hệ 2). Đặc biệt tác dụng rất tốt trên vi khuẩn kỵ khí (như Bacteroides fragilis), thường dùng trong dự phòng phẫu thuật ổ bụng/tiêu hóa.',
    stability: {
      roomTemp: 'Dung dịch đã hoàn nguyên ổn định trong 24 giờ ở nhiệt độ phòng (dưới 25°C).',
      refrigerated: 'Ổn định trong 1 tuần (7 ngày) khi bảo quản trong tủ lạnh (2 - 8°C). Thuốc có thể chuyển màu hơi vàng theo thời gian nhưng không ảnh hưởng tới tác dụng.'
    }
  },
  {
    id: 'moxifloxacin',
    name: 'Moxifloxacin',
    vietnameseName: 'Moxifloxacin 400mg/250ml',
    vialStrengthMg: 400,
    diluentVolumeMl: 250, // Pre-diluted
    recommendedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Dung dịch Ringer Lactate'],
    reconstitutionConcentrationMgMl: 1.6, // 400mg/250ml = 1.6 mg/ml
    routes: {
      im: false,
      ivDirect: false,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 250,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Dung dịch Ringer Lactate'],
      infusionDurationMinutes: 60
    },
    dosageRules: {
      pediatric: {
        minMgPerKgPerDay: 6,
        maxMgPerKgPerDay: 10,
        frequencyHours: 24,
        description: 'Chống chỉ định tương đối ở trẻ em dưới 18 tuổi do lo ngại về tổn thương sụn khớp chịu lực. Chỉ cân nhắc sử dụng trong trường hợp cực kỳ đặc biệt khi không có giải pháp thay thế.'
      },
      adult: {
        minMgPerDay: 400,
        maxMgPerDay: 400,
        recommendedSingleDoseMg: 400,
        frequencyHours: 24
      }
    },
    contraindications: [
      'Tiền sử quá mẫn với Moxifloxacin, các kháng sinh khác thuộc nhóm Quinolone.',
      'Người bệnh có khoảng QT kéo dài hoặc đang sử dụng các thuốc làm kéo dài khoảng QT.',
      'Bệnh nhân suy gan nặng (Child-Pugh C) và bệnh nhân có nồng độ transaminase tăng gấp 5 lần giới hạn trên bình thường.',
      'Tiền sử bệnh lý gân cơ liên quan đến sử dụng Quinolone.'
    ],
    warnings: [
      'Nguy cơ kéo dài khoảng QT tăng nguy cơ loạn nhịp thất nghiêm trọng (Torsades de Pointes). Không dùng khi có điện giải đồ bất thường chưa điều chỉnh.',
      'Nguy cơ viêm gân và đứt gân gót Achilles, tăng lên ở người già (>65 tuổi), người ghép tạng, hoặc đang dùng corticosteroid.',
      'Độc tính trên thần kinh trung ương: Co giật, run rẩy, ảo giác, lo âu, trầm cảm có thể xảy ra.',
      'Hạ đường huyết nghiêm trọng ở bệnh nhân đái tháo đường đang trị liệu.',
      'Chỉ được tiêm truyền tĩnh mạch chậm trong thời gian ít nhất 60 phút. Tuyệt đối không được tiêm truyền nhanh hoặc tiêm mạch trực tiếp (IV Bolus).'
    ],
    notes: 'Kháng sinh nhóm Fluoroquinolone thế hệ 4 (Hô hấp). Phổ kháng khuẩn rộng trên vi khuẩn Gram dương (gồm cả S. pneumoniae kháng thuốc), Gram âm, kỵ khí và vi khuẩn không điển hình. Không cần chỉnh liều ở bệnh nhân suy thận.',
    stability: {
      roomTemp: 'Dạng dung dịch truyền pha sẵn bảo quản ở nhiệt độ phòng (15 - 30°C). Tránh ánh sáng trực tiếp. Không để trong tủ lạnh hoặc đông đá.',
      refrigerated: 'KHÔNG khuyến cáo bảo quản lạnh hoặc đông đá do có thể hình thành tủa tinh thể.'
    }
  },
  {
    id: 'cefamandole',
    name: 'Cefamandole',
    vietnameseName: 'Cefamandol 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100,
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 50,
        maxMgPerKgPerDay: 100,
        frequencyHours: 12,
        description: 'Trẻ sơ sinh < 1 tuần tuổi: 50 - 100 mg/kg/ngày chia làm 2 lần (mỗi 12 giờ). Trẻ sơ sinh > 1 tuần tuổi: 50 - 100 mg/kg/ngày chia làm 3 lần (mỗi 8 giờ).'
      },
      pediatric: {
        minMgPerKgPerDay: 50,
        maxMgPerKgPerDay: 100,
        frequencyHours: 6,
        description: 'Trẻ em > 1 tháng tuổi: 50 - 100 mg/kg/ngày chia làm nhiều lần (mỗi 6 - 8 giờ). Nhiễm trùng nặng có thể dùng tới 150 mg/kg/ngày nhưng không vượt quá liều tối đa của người lớn.'
      },
      adult: {
        minMgPerDay: 1500,
        maxMgPerDay: 12000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 6
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng, quá mẫn với Cefamandol hoặc các kháng sinh nhóm Cephalosporin khác.',
      'Sử dụng chung với rượu bia hoặc các chế phẩm chứa cồn (nguy cơ phản ứng disulfiram-like).'
    ],
    warnings: [
      'Phản ứng tương tự Disulfiram: Tránh tuyệt đối uống rượu bia hoặc các chế phẩm chứa cồn trong thời gian điều trị và tối thiểu vài ngày sau khi ngừng thuốc (tránh đỏ bừng mặt, nhức đầu, tim đập nhanh, buồn nôn).',
      'Nguy cơ chảy máu và giảm prothrombin huyết: Do chứa gốc N-methylthiotetrazole (NMTT), có thể gây hạ prothrombin huyết và ức chế kết tập tiểu cầu. Thận trọng ở người suy gan, suy thận nặng hoặc suy dinh dưỡng. Cần theo dõi chỉ số INR/PT và bổ sung Vitamin K nếu có chỉ định.',
      'Dị ứng chéo: Có phản ứng dị ứng chéo với Penicillin (khoảng 5 - 10%). Cần hỏi kỹ tiền sử dị ứng thuốc của bệnh nhân trước khi dùng thuốc.',
      'Mỗi lọ Cefamandole chứa khoảng 77 mg natri (3.3 mEq) trên mỗi gam thuốc, cần hết sức thận trọng cân nhắc khi sử dụng cho bệnh nhân cần hạn chế muối.',
      'Truyền tĩnh mạch chậm tối thiểu trong 15 - 30 phút. Đối với tiêm tĩnh mạch trực tiếp (IV Direct), phải tiêm chậm trong ít nhất 3 - 5 phút.'
    ],
    notes: 'Kháng sinh Cephalosporin thế hệ 2 có hoạt lực tốt trên cả vi khuẩn Gram dương và một số Gram âm. Chứa gốc NMTT nên có nguy cơ phản ứng disulfiram-like và giảm đông máu.',
    stability: {
      roomTemp: 'Dung dịch sau khi hoàn nguyên ổn định trong vòng 24 giờ ở nhiệt độ phòng (dưới 25°C).',
      refrigerated: 'Ổn định trong vòng 96 giờ ở nhiệt độ tủ lạnh (2 - 8°C). Thuốc có thể sẫm màu dần trong quá trình bảo quản nhưng không làm giảm hoạt tính của thuốc.'
    }
  },
  {
    id: 'oxacillin',
    name: 'Oxacillin',
    vietnameseName: 'Oxacillin 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100,
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 50,
        maxMgPerKgPerDay: 150,
        frequencyHours: 12,
        description: 'Trẻ sơ sinh < 1 tuần tuổi hoặc cân nặng < 2000g: 50 - 100 mg/kg/ngày chia làm 2 lần (mỗi 12 giờ). Trẻ sơ sinh > 1 tuần tuổi hoặc cân nặng > 2000g: 100 - 150 mg/kg/ngày chia làm 3 lần (mỗi 8 giờ).'
      },
      pediatric: {
        minMgPerKgPerDay: 100,
        maxMgPerKgPerDay: 200,
        frequencyHours: 6,
        description: 'Trẻ em: 100 - 200 mg/kg/ngày chia làm 4 - 6 lần (mỗi 4 - 6 giờ). Trường hợp nhiễm trùng rất nặng có thể dùng liều tối đa lên tới 200 mg/kg/ngày.'
      },
      adult: {
        minMgPerDay: 4000,
        maxMgPerDay: 12000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 6
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng, quá mẫn với Oxacillin, các kháng sinh thuộc nhóm Penicillin hoặc các Beta-lactam khác.'
    ],
    warnings: [
      'Dị ứng chéo: Có nguy cơ phản ứng dị ứng chéo với Cephalosporin (khoảng 5 - 10%). Cần khai thác cực kỳ kỹ tiền sử dị ứng thuốc trước khi sử dụng.',
      'Độc tính trên gan (viêm gan cấp, tăng men gan) có thể xảy ra, đặc biệt khi sử dụng liều cao. Nên định kỳ theo dõi chức năng gan trong quá trình điều trị kéo dài.',
      'Hàm lượng natri cao: Mỗi gam Oxacillin chứa khoảng 2.8 - 3.1 mEq natri, cần hết sức thận trọng khi dùng cho bệnh nhân suy tim, suy thận, hoặc cần kiểm soát chặt chế độ ăn ít muối.',
      'Kích ứng mạch: Có thể gây viêm tĩnh mạch hoặc huyết khối tại vị trí tiêm truyền. Cần tiêm tĩnh mạch trực tiếp chậm (hơn 5 - 10 phút) hoặc ưu tiên truyền tĩnh mạch chậm ít nhất 30 phút.'
    ],
    notes: 'Kháng sinh nhóm Isoxazolyl Penicillin (kháng beta-lactamase), bền vững với enzyme penicillinase của tụ cầu khuẩn. Đặc trị các nhiễm khuẩn do tụ cầu vàng nhạy cảm với methicillin (MSSA).',
    stability: {
      roomTemp: 'Dung dịch sau khi hoàn nguyên ổn định trong vòng 24 giờ ở nhiệt độ phòng (dưới 25°C).',
      refrigerated: 'Ổn định được tối đa 7 ngày khi bảo quản trong tủ lạnh (2 - 8°C). Biến đổi màu sắc nhẹ không làm thay đổi hoạt tính của thuốc.'
    }
  },
  {
    id: 'cloxacillin',
    name: 'Cloxacillin',
    vietnameseName: 'Cloxacilin 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100,
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 50,
        maxMgPerKgPerDay: 100,
        frequencyHours: 12,
        description: 'Trẻ sơ sinh < 1 tuần tuổi hoặc cân nặng < 2000g: 50 mg/kg/ngày chia làm 2 lần (mỗi 12 giờ). Trẻ sơ sinh > 1 tuần tuổi hoặc cân nặng > 2000g: 75 - 100 mg/kg/ngày chia làm 3 - 4 lần (mỗi 6 - 8 giờ).'
      },
      pediatric: {
        minMgPerKgPerDay: 50,
        maxMgPerKgPerDay: 100,
        frequencyHours: 6,
        description: 'Trẻ em: 50 - 100 mg/kg/ngày chia làm 4 lần (mỗi 6 giờ). Trường hợp nhiễm trùng cực kỳ nặng có thể tăng lên tối đa 200 mg/kg/ngày chia làm nhiều lần.'
      },
      adult: {
        minMgPerDay: 2000,
        maxMgPerDay: 6000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 6
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng, quá mẫn với Cloxacilin, các penicillin khác hoặc bất kỳ thành phần nào của thuốc.'
    ],
    warnings: [
      'Dị ứng chéo: Thận trọng trên bệnh nhân nhạy cảm với kháng sinh Cephalosporin (khoảng 5 - 10% chồng chéo dị ứng).',
      'Chức năng gan: Có thể gây tăng men gan, vàng da ứ mật thoáng qua. Kiểm định chức năng gan định kỳ nếu điều trị dài ngày.',
      'Suy thận: Giảm liều hoặc điều chỉnh khoảng cách đưa liều khi độ thanh thải creatinin thấp (ClCl < 10 ml/phút).',
      'Đường dùng tĩnh mạch: Nên tiêm tĩnh mạch rất chậm (trong 3 - 5 phút) để tránh nguy cơ kích ứng thành mạch gây huyết khối tĩnh mạch, hoặc truyền tĩnh mạch chậm kéo dài ít nhất 30 phút.'
    ],
    notes: 'Kháng sinh nhóm Isoxazolyl Penicillin (kháng beta-lactamase), bền vững với enzyme penicillinase của tụ cầu khuẩn. Đặc trị tụ cầu vàng nhạy cảm methicillin (MSSA). Đặc tính lý hóa và phổ kháng khuẩn tương đồng với Oxacillin.',
    stability: {
      roomTemp: 'Dung dịch sau khi hoàn nguyên ổn định trong vòng 24 giờ ở nhiệt độ phòng (dưới 25°C).',
      refrigerated: 'Ổn định trong vòng 48 giờ khi bảo quản trong tủ lạnh (2 - 8°C). Không khuyến cáo bảo quản lạnh dài ngày như Oxacillin.'
    }
  },
  {
    id: 'linezolid',
    name: 'Linezolid',
    vietnameseName: 'Linezolid 600mg/300ml',
    vialStrengthMg: 600,
    diluentVolumeMl: 300, // Pre-diluted solution
    recommendedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Dung dịch Ringer Lactate'],
    reconstitutionConcentrationMgMl: 2, // 600mg/300ml = 2 mg/ml
    routes: {
      im: false,
      ivDirect: false,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 300,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Dung dịch Ringer Lactate'],
      infusionDurationMinutes: 60
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 20,
        maxMgPerKgPerDay: 30,
        frequencyHours: 8,
        description: 'Trẻ sơ sinh < 7 ngày tuổi: 10 mg/kg mỗi 12 giờ (hoặc mỗi 8 giờ đối với trẻ sinh non muộn hoặc có nhiễm khuẩn nặng). Trẻ sơ sinh ≥ 7 ngày tuổi: 10 mg/kg mỗi 8 giờ.'
      },
      pediatric: {
        minMgPerKgPerDay: 30,
        maxMgPerKgPerDay: 30,
        frequencyHours: 8,
        description: 'Trẻ em từ 7 ngày tuổi đến 11 tuổi: 10 mg/kg mỗi 8 giờ (mỗi ngày là 30 mg/kg/ngày).'
      },
      adult: {
        minMgPerDay: 1200,
        maxMgPerDay: 1200,
        recommendedSingleDoseMg: 600,
        frequencyHours: 12
      }
    },
    contraindications: [
      'Tiền sử quá mẫn với Linezolid hoặc bất kỳ thành phần nào của chế phẩm.',
      'Sử dụng đồng thời hoặc trong vòng 2 tuần gần đây với các thuốc ức chế Monoamine Oxidase (MAOIs như selegiline, phenelzine, moclobemide).'
    ],
    warnings: [
      'Ức chế tủy xương: Có thể gây giảm hồng cầu, giảm bạch cầu, giảm tiểu cầu nguy hiểm, đặc biệt khi dùng liên tục trên 10-14 ngày. Cần định kỳ theo dõi công thức máu (CBC) hàng tuần.',
      'Hội chứng Serotonin: Nguy cơ tương tác thuốc cực kỳ nghiêm trọng khi dùng đồng thời với các thuốc cường hệ serotonergic như SSRIs, SNRIs, tricyclic antidepressants (TCAs), triptans. Cần theo dõi chặt chẽ hội chứng serotonin (sốt cao, vã mồ hôi, giật cơ, lú lẫn).',
      'Độc tính thần kinh thị giác & ngoại biên: Đã có báo cáo viêm dây thần kinh thị giác và bệnh lý dây thần kinh ngoại biên, đặc biệt khi điều trị kéo dài hơn 28 ngày. Khuyên cáo kiểm tra thị lực ngay nếu có mờ mắt hay thay đổi sắc giác.',
      'Nhiễm toan lactic: Cần theo dõi và xử lý kịp thời ở những bệnh nhân có triệu chứng buồn nôn, nôn kéo dài hoặc nhiễm toan chuyển hóa chưa rõ nguyên nhân.',
      'Chỉ tiêm truyền tĩnh mạch chậm kéo dài từ 30 đến 120 phút. Tuyệt đối không tiêm tĩnh mạch trực tiếp (IV Bolus).'
    ],
    notes: 'Kháng sinh tổng hợp nhóm Oxazolidinon đầu tiên. Có tác dụng kìm khuẩn mạnh với hầu hết vi khuẩn Gram dương hiếu khí và kỵ khí, bao gồm cả các chủng kháng thuốc như tụ cầu vàng kháng methicillin (MRSA), cầu khuẩn đường ruột kháng vancomycin (VRE), phế cầu kháng penicillin.',
    stability: {
      roomTemp: 'Dung dịch truyền pha sẵn bảo quản ở nhiệt độ phòng (15 - 30°C). Tránh đông lạnh. Để nguyên trong bao bảo vệ tránh ánh sáng.',
      refrigerated: 'KHÔNG bảo quản trong tủ lạnh hoặc đông đá để tránh hình thành tủa hoặc kết tinh dung dịch.'
    }
  },
  {
    id: 'cefazolin',
    name: 'Cefazolin',
    vietnameseName: 'Cefazolin 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100, // 1000mg/10ml = 100 mg/ml
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 40,
        maxMgPerKgPerDay: 100,
        frequencyHours: 8,
        description: 'Trẻ sơ sinh < 7 ngày tuổi hoặc < 2000g: 40 mg/kg/ngày chia làm 2 lần (mỗi 12 giờ). Trẻ sơ sinh > 7 ngày tuổi hoặc > 2000g: 60 - 100 mg/kg/ngày chia làm 3 - 4 lần (mỗi 6 - 8 giờ).'
      },
      pediatric: {
        minMgPerKgPerDay: 50,
        maxMgPerKgPerDay: 100,
        frequencyHours: 8,
        description: 'Trẻ em: 50 - 100 mg/kg/ngày chia làm 3 - 4 lần (mỗi 6 - 8 giờ). Nhiễm khuẩn nặng có thể dùng lên tới 100 mg/kg/ngày. Liều tối đa 6g/ngày.'
      },
      adult: {
        minMgPerDay: 2000,
        maxMgPerDay: 6000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 8
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng, quá mẫn với Cefazolin hoặc các kháng sinh nhóm Cephalosporin khác.'
    ],
    warnings: [
      'Dị ứng chéo: Thận trọng ở bệnh nhân nhạy cảm với Penicillin do có nguy cơ phản ứng dị ứng chéo (khoảng 5 - 10%).',
      'Đường dùng tĩnh mạch trực tiếp (IV Direct) phải tiêm chậm trong 3 - 5 phút. Tiêm nhanh có thể dẫn đến kích ứng, đau thành mạch hoặc các phản ứng huyết động.',
      'Cần hiệu chỉnh liều hoặc kéo dài khoảng cách liều ở bệnh nhân suy giảm chức năng thận dựa trên độ thanh thải creatinine.',
      'Sử dụng kéo dài có thể gây bội nhiễm nấm hoặc vi khuẩn kháng thuốc (bao gồm viêm đại tràng giả mạc liên quan đến Clostridioides difficile).'
    ],
    notes: 'Kháng sinh Cephalosporin thế hệ 1. Có hoạt lực mạnh trên vi khuẩn Gram dương hiếu khí (bao gồm cả tụ cầu nhạy cảm methicillin MSSA, Streptococcus) nhưng hoạt tính trên vi khuẩn Gram âm hạn chế hơn. Thường được sử dụng ưu tiên hàng đầu trong dự phòng nhiễm khuẩn vết mổ ngoại khoa.',
    stability: {
      roomTemp: 'Dung dịch sau khi hoàn nguyên ổn định trong vòng 24 giờ ở nhiệt độ phòng (dưới 25°C).',
      refrigerated: 'Ổn định được tối đa 10 ngày khi bảo quản trong tủ lạnh (2 - 8°C). Tránh đông đá sau khi hoàn nguyên.'
    }
  },
  {
    id: 'ertapenem',
    name: 'Ertapenem',
    vietnameseName: 'Ertapenem 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%'],
    reconstitutionConcentrationMgMl: 100, // 1000mg/10ml = 100 mg/ml
    routes: {
      im: true,
      ivDirect: false,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%'], // Dextrose-containing diluents are incompatible
      infusionDurationMinutes: 30
    },
    dosageRules: {
      pediatric: {
        minMgPerKgPerDay: 30,
        maxMgPerKgPerDay: 30,
        frequencyHours: 12,
        description: 'Trẻ em từ 3 tháng tuổi đến 12 tuổi: 15 mg/kg mỗi 12 giờ (liều tối đa không quá 1g/ngày). Trẻ em từ 13 tuổi trở lên: Dùng liều như người lớn 1g mỗi 24 giờ.'
      },
      adult: {
        minMgPerDay: 1000,
        maxMgPerDay: 1000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 24
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng, quá mẫn với Ertapenem hoặc các Carbapenem khác, hoặc các thuốc cùng nhóm Beta-lactam.',
      'Trường hợp sử dụng tiêm bắp (IM): Chống chỉ định thêm nếu có tiền sử quá mẫn với thuốc tê nhóm Amide (như Lidocaine), do dung dịch dùng tiêm bắp thường pha bằng Lidocaine.'
    ],
    warnings: [
      'Tương kỵ dung dịch đường: TUYỆT ĐỐI không sử dụng các dung dịch pha loãng chứa Dextrose/Glucose do gây mất tính ổn định của thuốc.',
      'Độc tính thần kinh trung ương (Co giật): Thận trọng ở bệnh nhân có bệnh lý thần kinh trung ương (như tiền sử co giật, tổn thương não) hoặc ở người suy giảm chức năng thận.',
      'Điều chỉnh liều ở bệnh nhân suy thận: Cần giảm liều xuống 500 mg/ngày ở bệnh nhân có độ thanh thải creatinine ClCl < 30 ml/phút.',
      'Không dùng cho trẻ dưới 3 tháng tuổi do chưa có đầy đủ dữ liệu lâm sàng về an toàn và hiệu quả.',
      'Truyền tĩnh mạch chậm kéo dài ít nhất 30 phút. Không tiêm tĩnh mạch trực tiếp (IV Bolus).'
    ],
    notes: 'Kháng sinh Carbapenem đặc biệt có thời gian bán thải dài, cho phép sử dụng liều 1 lần/ngày. Phổ kháng khuẩn rộng trên Gram âm và dương (cả hiếu khí lẫn kỵ khí), nhưng KHÔNG có hoạt tính chống lại Pseudomonas aeruginosa và Acinetobacter spp.',
    stability: {
      roomTemp: 'Dung dịch đã pha loãng truyền tĩnh mạch (trong NaCl 0.9%) ổn định tối đa 6 giờ ở nhiệt độ phòng (dưới 25°C).',
      refrigerated: 'Ổn định được trong 24 giờ ở nhiệt độ tủ lạnh (2 - 8°C). Sau khi lấy ra khỏi tủ lạnh, phải truyền hết trong vòng 4 giờ.'
    }
  },
  {
    id: 'cefalothin',
    name: 'Cefalothin',
    vietnameseName: 'Cefalothin 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100, // 1000mg/10ml = 100 mg/ml
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 40,
        maxMgPerKgPerDay: 80,
        frequencyHours: 8,
        description: 'Trẻ sơ sinh < 1 tuần tuổi hoặc < 2000g: 40 - 50 mg/kg/ngày chia làm 2 lần (mỗi 12 giờ). Trẻ sơ sinh > 1 tuần tuổi hoặc > 2000g: 60 - 80 mg/kg/ngày chia làm 3 lần (mỗi 8 giờ).'
      },
      pediatric: {
        minMgPerKgPerDay: 80,
        maxMgPerKgPerDay: 160,
        frequencyHours: 6,
        description: 'Trẻ em: 80 - 160 mg/kg/ngày chia làm 4 lần (mỗi 6 giờ). Trường hợp nhiễm khuẩn cực kỳ nặng có thể tăng lên đến tối đa 160 mg/kg/ngày.'
      },
      adult: {
        minMgPerDay: 2000,
        maxMgPerDay: 12000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 6
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng, quá mẫn với Cefalothin hoặc các Cephalosporin khác.'
    ],
    warnings: [
      'Dị ứng chéo: Có tỉ lệ dị ứng chéo từ 5 - 10% với các kháng sinh nhóm Penicillin. Thận trọng hỏi kỹ tiền sử dị ứng thuốc.',
      'Kích ứng mạch: Cefalothin có tính gây viêm tĩnh mạch huyết khối rất cao khi tiêm truyền tĩnh mạch. Phải truyền chậm tối thiểu 30 phút hoặc tiêm tĩnh mạch trực tiếp rất chậm từ 3 - 5 phút.',
      'Thay đổi liều ở bệnh nhân suy thận: Cần giảm liều hoặc giãn khoảng cách liều dựa theo độ thanh thải creatinine.',
      'Phòng ngừa bội nhiễm: Sử dụng dài ngày tăng nguy cơ bội nhiễm nấm hoặc vi khuẩn kháng thuốc (bao gồm viêm đại tràng giả mạc do C. difficile).'
    ],
    notes: 'Kháng sinh Cephalosporin thế hệ 1, có tính kháng khuẩn cực kỳ mạnh trên cầu khuẩn Gram dương (gồm cả hầu hết chủng S. aureus nhạy methicillin và Streptococcus). Phối hợp dự phòng hiệu quả trong phẫu thuật chấn thương và tim mạch.',
    stability: {
      roomTemp: 'Dung dịch sau khi hoàn nguyên ổn định trong 24 giờ ở nhiệt độ phòng (dưới 25°C).',
      refrigerated: 'Ổn định được tối đa 96 giờ khi bảo quản ở nhiệt độ tủ lạnh (2 - 8°C). Tránh đông đá.'
    }
  },
  {
    id: 'cefepime',
    name: 'Cefepime',
    vietnameseName: 'Cefepim 1g',
    vialStrengthMg: 1000,
    diluentVolumeMl: 10,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100, // 1000 mg / 10 ml
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Ringer Lactate'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 60,
        maxMgPerKgPerDay: 150,
        frequencyHours: 8,
        description: 'Trẻ sơ sinh < 14 ngày tuổi: 30 mg/kg mỗi 12 giờ. Trẻ sơ sinh ≥ 14 ngày tuổi: 30 - 50 mg/kg mỗi 8 giờ hoặc mỗi 12 giờ tùy theo mức độ nhiễm trùng.'
      },
      pediatric: {
        minMgPerKgPerDay: 100,
        maxMgPerKgPerDay: 150,
        frequencyHours: 8,
        description: 'Trẻ em > 2 tháng tuổi và ≤ 40kg: 50 mg/kg mỗi 12 giờ (nhiễm khuẩn nhẹ/vừa) hoặc 50 mg/kg mỗi 8 giờ (nhiễm khuẩn nặng, viêm màng não hoặc giảm bạch cầu sốt). Tối đa 2g mỗi liều.'
      },
      adult: {
        minMgPerDay: 2000,
        maxMgPerDay: 6000,
        recommendedSingleDoseMg: 1000,
        frequencyHours: 8
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng, quá mẫn với Cefepim, các Cephalosporin khác, hoặc nhóm Beta-lactam.'
    ],
    warnings: [
      'Độc tính trên hệ thần kinh trung ương (Neurotoxicity): Có thể gây bệnh não, giật cơ, co giật, hoặc trạng thái động kinh, đặc biệt ở người bệnh suy giảm chức năng thận không được chỉnh liều chính xác. Cần giám sát chặt chẽ.',
      'Dị ứng chéo: Tỷ lệ dị ứng chéo khoảng 5 - 10% ở người bệnh nhạy cảm với Penicillin.',
      'Đường tiêm tĩnh mạch trực tiếp (IV Direct) cần tiêm rất chậm từ 3 - 5 phút để tránh phản ứng kích ứng mạch cục bộ.',
      'Sử dụng dài ngày làm tăng nguy cơ phát triển quá mức các vi sinh vật không nhạy cảm hoặc gây viêm đại tràng giả mạc do C. difficile.'
    ],
    notes: 'Kháng sinh Cephalosporin thế hệ 4 có phổ kháng khuẩn mở rộng đặc biệt. Rất bền vững với hầu hết enzyme beta-lactamase, hoạt lực cực mạnh trên cả Gram âm (đặc biệt là trực khuẩn mủ xanh Pseudomonas aeruginosa) và Gram dương (như S. aureus nhạy methicillin).',
    stability: {
      roomTemp: 'Dung dịch sau khi hoàn nguyên ổn định trong vòng 24 giờ ở nhiệt độ phòng (dưới 25°C).',
      refrigerated: 'Ổn định được tối đa 7 ngày khi bảo quản lạnh ở nhiệt độ 2 - 8°C. Dung dịch có thể chuyển sang màu hổ phách nhưng không làm giảm tác dụng.'
    }
  },
  {
    id: 'gentamicin',
    name: 'Gentamicin',
    vietnameseName: 'Gentamicin 80mg/2ml',
    vialStrengthMg: 80,
    diluentVolumeMl: 2, // commonly comes as 80mg/2ml liquid ampoule
    recommendedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Nước cất pha tiêm'],
    reconstitutionConcentrationMgMl: 40, // 80mg / 2ml = 40 mg/ml
    routes: {
      im: true,
      ivDirect: false,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%'],
      infusionDurationMinutes: 60
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 3,
        maxMgPerKgPerDay: 5,
        frequencyHours: 24,
        description: 'Trẻ sơ sinh < 1 tuần tuổi hoặc < 2000g: 3 - 4 mg/kg/ngày chia 1 lần (mỗi 24 giờ). Trẻ sơ sinh > 1 tuần tuổi hoặc > 2000g: 4 - 5 mg/kg/ngày chia 1 lần (mỗi 24 giờ). Đối với nhiễm khuẩn nặng có thể tăng liều và cần kiểm tra nồng độ đỉnh/đáy của thuốc trong huyết thanh.'
      },
      pediatric: {
        minMgPerKgPerDay: 5,
        maxMgPerKgPerDay: 7.5,
        frequencyHours: 24,
        description: 'Trẻ em: 5 - 7.5 mg/kg/ngày chia làm 1 - 3 lần (mỗi 8 - 24 giờ). Hiện tại phác đồ dùng liều duy nhất một lần trong ngày (once-daily) thường được ưu tiên sử dụng để giảm tối đa độc tính trên thận và tai.'
      },
      adult: {
        minMgPerDay: 160,
        maxMgPerDay: 300,
        recommendedSingleDoseMg: 240,
        frequencyHours: 24
      }
    },
    contraindications: [
      'Quá mẫn với Gentamicin hoặc các Aminoglycosid khác (Amikacin, Kanamycin, Tobramycin).',
      'Người nhiễm độc tai hoặc tổn thương thần kinh thính giác do sử dụng Aminoglycosid trước đây.',
      'Bệnh nhân nhược cơ cơ năng (Myasthenia gravis) do nguy cơ ức chế dẫn truyền thần kinh - cơ có thể gây suy hô hấp cấp.'
    ],
    warnings: [
      'Độc tính kép nguy hiểm: Độc tính cao trên thận (hoại tử ống thận cấp, suy thận tiến triển) và độc thính lực (gây điếc không hồi phục) cùng độc tính tiền đình gây mất thăng bằng.',
      'TUYỆT ĐỐI KHÔNG tiêm tĩnh mạch trực tiếp (IV Direct/Bolus). Phải truyền tĩnh mạch chậm từ 30-60 phút để đảm bảo an toàn, tránh phong bế thần kinh - cơ hoặc suy hô hấp.',
      'Sự cần thiết của giám sát nồng độ thuốc (TDM): Khuyến cáo theo dõi nồng độ thuốc đáy (trough level) và đỉnh (peak level) trong huyết thanh, đặc biệt khi dùng lâu ngày trên 7 ngày, người già, hoặc người suy giảm chức năng thận.',
      'Tránh phối hợp đồng thời hoặc nối tiếp với các thuốc có chung độc tính tai/thận (như Furosemide, Vancomycin, Amphotericin B, Cisplatin, Cefalothin).'
    ],
    notes: 'Kháng sinh diệt khuẩn nhóm Aminoglycosid nhạy cảm mạnh trên các trực khuẩn Gram âm hiếu khí (Pseudomonas, Enterobacteriaceae) và một số vi khuẩn Gram dương (Staphylococcus). Thường phối hợp với beta-lactam để tăng tác dụng hiệp đồng trong điều trị nhiễm trùng nặng.',
    stability: {
      roomTemp: 'Dung dịch sau khi pha loãng với các dung dịch truyền tĩnh mạch thích hợp ổn định trong vòng 24 giờ ở nhiệt độ phòng.',
      refrigerated: 'Không khuyến cáo bảo quản lạnh dung dịch sau khi pha loãng với dịch truyền, nên sử dụng ngay sau khi pha để tránh nhiễm khuẩn.'
    }
  },
  {
    id: 'cefuroxime',
    name: 'Cefuroxime',
    vietnameseName: 'Cefuroxim 750mg',
    vialStrengthMg: 750,
    diluentVolumeMl: 7.5,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 100, // 750mg / 7.5ml = 100 mg/ml
    routes: {
      im: true,
      ivDirect: true,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Ringer Lactate'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 30,
        maxMgPerKgPerDay: 100,
        frequencyHours: 8,
        description: 'Trẻ sơ sinh < 7 ngày tuổi: 30 - 100 mg/kg/ngày chia làm 2 - 3 lần (mỗi 8 - 12 giờ). Trẻ sơ sinh ≥ 7 ngày tuổi: 30 - 100 mg/kg/ngày chia làm 3 lần (mỗi 8 giờ). Nhiễm khuẩn nặng có thể dùng liều cao hơn theo cân nhắc lâm sàng.'
      },
      pediatric: {
        minMgPerKgPerDay: 30,
        maxMgPerKgPerDay: 100,
        frequencyHours: 8,
        description: 'Trẻ em và trẻ nhỏ > 1 tháng tuổi: 30 - 100 mg/kg/ngày chia làm 3 - 4 lần (mỗi 6 - 8 giờ). Trong các trường hợp nhiễm khuẩn nặng hoặc viêm màng não, có thể tăng liều lên tới 150 mg/kg/ngày chia 3 - 4 lần (mỗi 6 - 8 giờ).'
      },
      adult: {
        minMgPerDay: 2250,
        maxMgPerDay: 6000,
        recommendedSingleDoseMg: 750,
        frequencyHours: 8
      }
    },
    contraindications: [
      'Tiền sử dị ứng nghiêm trọng, quá mẫn với Cefuroxim hoặc các kháng sinh khác thuộc nhóm Cephalosporin.',
      'Tiền sử phản ứng phản vệ nghiêm trọng, tức thì với Penicillin hoặc bất kỳ kháng sinh Beta-lactam nào khác.'
    ],
    warnings: [
      'Dị ứng chéo: Có khoảng 5 - 10% khả năng phản ứng dị ứng chéo giữa Cephalosporin và Penicillin. Hỏi kỹ tiền sử trước khi sử dụng.',
      'Đường tiêm tĩnh mạch trực tiếp (IV Direct) cần tiêm rất chậm từ 3 - 5 phút. Tiêm quá nhanh có thể gây nóng bừng mặt, đau buốt hoặc viêm tắc tĩnh mạch huyết khối.',
      'Cần điều chỉnh liều hoặc khoảng cách liều ở người suy giảm chức năng thận mức độ trung bình-nặng dựa vào độ thanh thải creatinine.',
      'Nhiễm khuẩn giả mạc: Cảnh giác nguy cơ tiêu chảy liên quan Clostridioides difficile (CDAD) khi điều trị kéo dài giống các kháng sinh phổ rộng khác.'
    ],
    notes: 'Kháng sinh Cephalosporin thế hệ 2. Hoạt lực tốt trên cả vi khuẩn Gram dương (gồm Staphylococcus nhạy methicillin MSSA, Streptococcus) lẫn Gram âm (H. influenzae sinh hoặc không sinh beta-lactamase, M. catarrhalis, E. coli, Klebsiella). Thường được lựa chọn điều trị viêm phổi mắc phải cộng đồng, nhiễm khuẩn hô hấp dưới và tiết niệu.',
    stability: {
      roomTemp: 'Dung dịch sau khi hoàn nguyên ổn định trong vòng 5 giờ ở nhiệt độ phòng (dưới 25°C). Có thể ngả màu nhẹ nhưng chất lượng không đổi.',
      refrigerated: 'Ổn định trong 48 giờ ở nhiệt độ tủ lạnh (2 - 8°C). Sau khi pha loãng với dịch truyền để truyền tĩnh mạch cũng giữ được độ ổn định tương tự.'
    }
  },
  {
    id: 'piperacillin_tazobactam',
    name: 'Piperacillin / Tazobactam',
    vietnameseName: 'Piperacillin / Tazobactam 4.5g',
    vialStrengthMg: 4500,
    diluentVolumeMl: 20,
    recommendedDiluents: ['Nước cất pha tiêm', 'NaCl 0.9%', 'Glucose 5%'],
    reconstitutionConcentrationMgMl: 225, // 4500mg / 20ml = 225 mg/ml
    routes: {
      im: false,
      ivDirect: false,
      ivInfusion: true
    },
    infusionInstructions: {
      diluentVolumeMl: 100,
      allowedDiluents: ['NaCl 0.9%', 'Glucose 5%', 'Ringer Lactate'],
      infusionDurationMinutes: 30
    },
    dosageRules: {
      neonatal: {
        minMgPerKgPerDay: 160,
        maxMgPerKgPerDay: 300,
        frequencyHours: 8,
        description: 'Không khuyến cáo sử dụng thường quy cho trẻ sơ sinh < 2 tháng tuổi. Trong hợp đặc biệt cực kỳ cần thiết: 80 - 100 mg/kg mỗi 8 giờ (tính theo thành phần Piperacillin).'
      },
      pediatric: {
        minMgPerKgPerDay: 240,
        maxMgPerKgPerDay: 400,
        frequencyHours: 6,
        description: 'Trẻ em ≥ 2 tháng tuổi và < 40kg: 100 mg/kg (liều tính theo tổng lượng Piperacillin + Tazobactam là ~112.5 mg/kg) mỗi 6 hoặc 8 giờ. Liều thông thường 337.5 mg/kg/ngày chia làm 3-4 lần. Tối đa 18g/ngày.'
      },
      adult: {
        minMgPerDay: 13500,
        maxMgPerDay: 18000,
        recommendedSingleDoseMg: 4500,
        frequencyHours: 6
      }
    },
    contraindications: [
      'Tiền sử quá mẫn nặng (phản phản vệ, phù mạch) với Piperacillin, các Penicillin khác hoặc Tazobactam.',
      'Tiền sử dị ứng nghiêm trọng với bất kỳ kháng sinh nhóm Beta-lactam nào (như Cephalosporin, Carbapenem).'
    ],
    warnings: [
      'Truyền tĩnh mạch chậm: Cần truyền trong ít nhất 30 - 45 phút. Khuyến cáo truyền kéo dài (Extended Infusion) trong 3 - 4 giờ giúp tối ưu hiệu quả diệt khuẩn (PK/PD) đối với nhiễm trùng nặng hoặc trực khuẩn mủ xanh.',
      'Độc tính huyết học: Sử dụng kéo dài có thể gây giảm bạch cầu hạt và chảy máu bất thường do ức chế ngưng tập tiểu cầu, cần theo dõi công thức máu định kỳ.',
      'Hiệu chỉnh liều suy thận: Cần giảm liều hoặc kéo dài khoảng cách liều khi ClCr < 40 ml/phút.',
      'Tương kỵ cơ lý: Tuyệt đối không tự ý trộn chung lọ thuốc hoặc dây truyền với các Aminoglycosid (như Gentamicin, Amikacin) do tương kỵ hóa học trực tiếp làm bất hoạt lẫn nhau.'
    ],
    notes: 'Kháng sinh Ureidopenicillin phổ rộng phối hợp với chất ức chế Beta-lactamase Tazobactam. Hoạt lực diệt khuẩn cực mạnh chống lại hầu hết vi khuẩn kỵ khí, Gram dương và trực khuẩn Gram âm đa kháng bao gồm cả trực khuẩn mủ xanh (Pseudomonas aeruginosa).',
    stability: {
      roomTemp: 'Dung dịch sau khi hoàn nguyên ổn định tối đa 24 giờ ở nhiệt độ phòng (dưới 25°C). Khi pha loãng trong dung dịch truyền tĩnh mạch (như NaCl 0.9%), ổn định 12 giờ ở nhiệt độ phòng.',
      refrigerated: 'Ổn định tối đa 48 giờ ở nhiệt độ tủ lạnh (2 - 8°C) sau khi hoàn nguyên. Dung dịch sau khi pha loãng với dịch truyền thích hợp cũng giữ được độ ổn định tối đa 48 giờ trong tủ lạnh.'
    }
  }
];
