import bgImage from "../../assets/allimg/011.jpg";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <section className="pt-10 pb-20">
      <div className="container">
        {/* Header Image */}
        <div className="w-full h-full p-5 lg:h-[300px] overflow-hidden rounded-3xl relative flex justify-center items-center lg:mb-20 mb-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {loading ? (
              <Skeleton.Image style={{ width: "100%", height: "100%" }} active />
            ) : (
              <img src={bgImage} alt="milmax image" className="object-cover w-full h-full" />
            )}
          </div>
          <h2 className="relative z-10 text-white font-bold text-lg md:text-5xl">
            {loading ? <Skeleton.Input active style={{ width: 200 }} /> : t("footer.contacts")}
          </h2>
        </div>

        {/* Form and Map */}
        <div className="flex gap-x-10 w-full flex-col lg:flex-row">
          {loading ? <Skeleton active paragraph={{ rows: 6 }} /> : <ContactForm />}

          <div className="my-10 lg:w-[600px] w-full">
            {loading ? (
              <Skeleton active paragraph={{ rows: 10 }} />
            ) : (
              <div className="relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d98122.04942949927!2d64.34039700818853!3d39.77750716421651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUzbekistan%2C%20Bukhara%20city%2C%20Piridasgir%20street%2C%205A!5e0!3m2!1sru!2s!4v1738155164638!5m2!1sru!2s"
                  className="w-full h-[450px] rounded-3xl border border-gray-300"
                  allowFullScreen
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information - Full Width */}
        <div className="bg-white p-6 rounded-3xl shadow-lg mt-10 text-gray-800 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">{t("footer.manzil")}</h3>
              <p className="text-lg">{t("footer.address")}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-600 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">{t("footer.tel")}</h3>
              <p className="text-lg">
                <a href="tel:+998934729500" className="block hover:text-blue-500">
                  +998 93-472-95-00
                </a>
                <a href="tel:+998997547733" className="block hover:text-blue-500">
                  +998 99-754-77-33
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-red-600 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg">
                <a href="mailto:sales@milmax.uz" className="hover:text-blue-500">
                  sales@milmax.uz
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

