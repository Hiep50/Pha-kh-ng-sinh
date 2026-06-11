import React from 'react';
import { ShieldCheck, HeartPulse, Sparkles, AlertTriangle, Syringe, ClipboardCheck } from 'lucide-react';

export default function SafetyGuidelines() {
  const steps5Dung = [
    { name: 'Đúng Người Bệnh', desc: 'Xác nhận danh tính bằng 2 thông tin (Họ tên, ngày sinh hoặc số giường/mã BA). Hỏi bệnh nhân hoặc đối chiếu vòng định danh.' },
    { name: 'Đúng Thuốc', desc: 'Đọc nhãn thuốc 3 lần: khi lấy thuốc, khi pha, và trước khi tiêm. Tránh nhầm lẫn thuốc look-alike/sound-alike.' },
    { name: 'Đúng Liều Lượng', desc: 'Tính toán chính xác theo cân nặng trẻ em, so sánh với khoảng liều tối đa. Tránh nhầm đơn vị mg và mL.' },
    { name: 'Đúng Đường Dùng', desc: 'Xác định rõ IV chậm, IV truyền hay tiêm IM sâu. Không bao giờ tiêm bắp thuốc có chỉ định tiêm tĩnh mạch tĩnh.' },
    { name: 'Đúng Thời Gian', desc: 'Đảm bảo khoảng cách đưa thuốc chính xác (mỗi 6h, 8h, 12h hoặc 24h) để duy trì nồng độ ức chế tối thiểu (MIC).' }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 space-y-8" id="safety-guide-section">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3  py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          Tiêu chuẩn an toàn tiêm truyền
        </div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Quy trình Chuẩn & An toàn Lâm sàng</h2>
        <p className="text-slate-500 text-sm">
          Hướng dẫn thực hành chuẩn từ Bộ Y Tế nhằm hạn chế tối đa sai sót y khoa và bảo vệ bệnh nhân.
        </p>
      </div>

      {/* Grid 5-Dung */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps5Dung.map((item, index) => (
          <div key={index} className="flex flex-col bg-slate-50 border border-slate-100 p-4 rounded-xl relative overflow-hidden group hover:border-teal-200 hover:bg-teal-50/20 transition-all">
            <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center bg-teal-50/80 text-teal-700 text-xs font-bold rounded-bl-xl">
              0{index + 1}
            </div>
            <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 mb-3 font-semibold text-sm">
              <ClipboardCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-slate-800 group-hover:text-teal-800 tracking-tight transition-colors">
              {item.name}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mt-1.5 flex-grow">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Preparation SOP checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        {/* aseptic step assembly */}
        <div className="border border-slate-100 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2.5 font-bold text-slate-800 text-base">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
            Vô trùng khi pha chế (Aseptic Technique)
          </div>
          <ul className="space-y-3.5 text-xs text-slate-650">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex-shrink-0 flex items-center justify-center font-bold text-[10px]">1</span>
              <div>
                <strong className="text-slate-800 block">Vệ sinh tay ngoại khoa:</strong> Thao tác rửa tay 6 bước xà phòng ít nhất 30 giây hoặc chà sát cồn tay nhanh trước khi chạm dụng cụ.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex-shrink-0 flex items-center justify-center font-bold text-[10px]">2</span>
              <div>
                <strong className="text-slate-800 block">Sát khuẩn nút cao su lọ thuốc:</strong> Sử dụng bông cồn 70 độ miết tròn đều lên nắp cao su lọ kháng sinh trong 5 giây, chờ khô tự nhiên (không thổi).
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex-shrink-0 flex items-center justify-center font-bold text-[10px]">3</span>
              <div>
                <strong className="text-slate-800 block">Độ trong suốt dung dịch:</strong> Sau khi hoàn nguyên bột, quan sát xem dung dịch thuốc đã tan hoàn toàn hay chưa dưới ánh sáng. Trực quan kiểm tra không còn cặn, kết tủa hoặc tiểu phân phân tán.
              </div>
            </li>
          </ul>
        </div>

        {/* Sharps safety guidelines */}
        <div className="border border-slate-100 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2.5 font-bold text-slate-800 text-base">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            An toàn Vật sắc nhọn & Tai nạn Nghề nghiệp
          </div>
          <ul className="space-y-3.5 text-xs text-slate-650">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 flex-shrink-0 flex items-center justify-center font-bold text-[10px]">1</span>
              <div>
                <strong className="text-slate-800 block">Quy tắc một tay (One-handed scoop):</strong> Tuyệt đối không đậy nắp kim bằng hai tay sau khi sử dụng để tránh đâm kim vào tay. Sử dụng kỹ thuật xúc nắp một tay nếu bắt buộc.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 flex-shrink-0 flex items-center justify-center font-bold text-[10px]">2</span>
              <div>
                <strong className="text-slate-800 block">Hộp hủy kim kháng áp:</strong> Bỏ ngay kim tiêm, xy-lanh vào thùng kháng thủng màu vàng ngay cạnh giường bệnh sau khi thao tác tiêm xong, không chất đống tràn ngập.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 flex-shrink-0 flex items-center justify-center font-bold text-[10px]">3</span>
              <div>
                <strong className="text-slate-800 block">Ứng phó rủi ro đâm kim:</strong> Nếu bị kim đâm, để máu chảy tự nhiên dưới vòi nước chảy, rửa kỹ bằng xà phòng trung tính và báo ngay bộ phận kiểm soát nhiễm khuẩn trong vòng 2 giờ đầu để điều trị dự phòng.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Emergency Anaphylaxis Card */}
      <div className="bg-red-50/70 border border-red-100 rounded-xl p-5 flex flex-col md:flex-row items-start gap-4">
        <div className="p-3 bg-red-100 rounded-lg text-red-700">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="space-y-1.5 flex-grow">
          <h4 className="text-sm font-bold text-red-900 flex items-center gap-1.5 uppercase tracking-wide">
            Cảnh báo rủi ro Sốc phản vệ (Khẩn cấp y khoa)
          </h4>
          <p className="text-xs text-red-705 leading-relaxed">
            Sốc phản vệ có thể xảy ra tức thì hoặc trong vòng 30 phút sau khi tiêm kháng sinh Beta-lactam (Ceftriaxone, Augmentin, Cefotaxime...). <strong className="text-red-900">Chuẩn bị sẵn sàng hộp chống sốc Adrenaline 1mg/1ml trước giường bệnh</strong> và theo dõi sát biểu hiện: Khó thở, khò khè, nổi mày đay đỏ toàn thân, mạch nhanh nhỏ, huyết áp sụt giảm đột ngột. Ngừng tiêm thuốc ngay khi phát hiện triệu chứng đầu tiên!
          </p>
        </div>
      </div>
    </div>
  );
}
