import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import img from "../../assets/allimg/011.jpg";
import ContactForm from "../contact/ContactForm";

const Oltiariq = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Rasm qismi */}
      <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 group">
        <img
          src={img}
          alt="Oltiariq filiali rasmi"
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Matn va tafsilotlar */}
      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-4xl font-bold text-green-700 text-center">
          🌿 Oltiariq Filiali
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          Oltiariq filiali — bu bizning eng faol va mijozlarga yaqin hududiy bo‘limimiz
          bo‘lib, bu yerda siz qulay xizmatlar, do‘stona muhit va professional
          yondashuvni topasiz. Filialimiz zamonaviy texnologiyalar bilan jihozlangan,
          va barcha mijozlarimiz uchun ideal xizmat tajribasini taqdim etadi.
        </p>

        {/* Tafsilotlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 text-base">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-green-600 mt-1" size={20} />
            <span>
              <strong>Manzil:</strong> Oltiariq tumani, Farg‘ona viloyati, Mustaqillik ko‘chasi 12-uy
            </span>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-green-600 mt-1" size={20} />
            <span>
              <strong>Telefon:</strong> +998 90 123 45 67
            </span>
          </div>
          <div className="flex items-start gap-3">
            <FaClock className="text-green-600 mt-1" size={20} />
            <span>
              <strong>Ish vaqti:</strong> Dushanba–Yakshanba, 09:00–18:00
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8">
      <div className="flex gap-x-10 w-full flex-col lg:flex-row">
          
            <ContactForm />

          <div className="my-10 lg:w-[600px] w-full">
            
              <div className="relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47989.03816716692!2d69.1951!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5de3e6c6fd%3A0x326d5e7a87b29a4f!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1716902958977!5m2!1sen!2s"
                  className="w-full h-[450px] rounded-3xl border border-gray-300"
                  allowFullScreen
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oltiariq;
