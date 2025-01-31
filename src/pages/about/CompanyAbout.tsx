import React from "react";
import Patr from "../../assets/allimg/3.png";

const CompanyAbout: React.FC = () => {
  return (
    <div className="w-full mb-8">
      {/* Background Section */}
      <div className="relative w-full h-82 flex flex-col items-center justify-center text-white text-5xl font-extrabold">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${Patr})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <span className="relative text-2xl md:text-6xl lg:text-7xl ">KOMPANIYA HAQIDA</span>

      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Title and Description */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Milmax dried products
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#7f103a] mt-4">
            QISHLOQ XO'JALIGI MAHSULOTLARINI <br /> EKSPORT QILISH BO'YICHA YETAKCHI KOMISSIYA
          </h2>
          <p className="text-gray-700 text-lg mt-6">
            Quritilgan va ho'l mevalar, dukkaklilar hamda yong‘oqlarni yetkazib beruvchi kompaniya.
          </p>
        </div>

        {/* Right Side - Details */}
        <div className="text-gray-700 text-lg space-y-6">
          <p className="text-base md:text-lg">
            Bizning fikrimizcha, hozirgi vaqtda mamlakatimizning qishloq xo'jaligi salohiyatini global miqyosda zamonaviy
            yechimlar orqali namoyish etish vaqti keldi, va biz allaqachon mamlakatda sanoatni inqilobiy tarzda
            o'zgartirishni boshladik.
          </p>
          <p className="text-base md:text-lg">
            Biz bu yo'lda yolg'iz emasmiz, dunyoning yetakchi uskunalar ishlab chiqaruvchilari va xalqaro maslahatchilar
            bilan hamkorlik qilishdan tashqari, O'zbekiston Hukumatining va Jahon Bankining Milmax bilan hamkorlikka
            kirishganligi, O'zbekistondagi qishloq xo'jaligi mahsulotlarining xalqaro bozorga yetkazib beruvchi asosiy
            yetkazib beruvchi sifatida tug'ilganini bildiradi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
