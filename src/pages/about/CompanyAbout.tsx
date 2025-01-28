import React from "react";
import Patr from "../../assets/allimg/partbak.png";

const CompanyAbout: React.FC = () => {
  return (
    <div className="w-full mb-8">
      {/* Background Section */}
      <div
        className="w-full h-64 flex flex-col items-center justify-center text-white text-4xl font-extrabold relative"
      >
        <div
          className="absolute inset-0 mx-auto border border-gray-300 rounded-xl"
          style={{
            width: "60%",
            height: "80%",
            backgroundImage: `url(${Patr})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            top: "10%", // Rasmni pastga tushirish uchun top qo'shildi
            transform: "translateY(8%)", // Dastlabki holatga nisbatan qo'shimcha tushirish
          }}
        ></div>
        <span className="relative text-lg md:text-5xl">KOMPANIYA HAQIDA</span>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Title and Description */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
           Milmax dired produts
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-red-600 mt-4">
            QISHLOQ XO'JALIGI MAHSULOTLARINI <br /> EKSPORT QILISH BO'YICHA YETAKCHI KOMISSIYA
          </h2>
          <p className="text-gray-700 text-lg mt-6">
          Quritilgan va Ho'l mevalar, dukkaklilar hamda yong‘oqlarni yetkazib beruvchi kompaniya.
          </p>
        </div>

        {/* Right Side - Details */}
        <div className="text-gray-700 text-lg space-y-6">
          <p className="text-base md:text-lg">
          Bizning fikrimizcha, hozirgi vaqtda mamlakatimizning qishloq xo'jaligi salohiyatini global miqyosda zamonaviy yechimlar orqali namoyish etish vaqti keldi, va biz allaqachon mamlakatda sanoatni inqilobiy tarzda o'zgartirishni boshladik
          </p>
          <p className="text-base md:text-lg">
          Biz bu yo'lda yolg'iz emasmiz, dunyoning yetakchi uskunalar ishlab chiqaruvchilari va xalqaro maslahatchilar bilan hamkorlik qilishdan tashqari, O'zbekiston Hukumatining va Jahon Bankining Milmax bilan hamkorlikka kirishganligi, O'zbekistondagi qishloq xo'jaligi mahsulotlarining xalqaro bozorga yetkazib beruvchi asosiy yetkazib beruvchi sifatida tug'ilganini bildiradi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
