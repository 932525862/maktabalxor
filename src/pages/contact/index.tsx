// import bgImage from "../../assets/allimg/011.jpg";
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
        <div className="w-full h-full p-5 lg:h-[200px] overflow-hidden rounded-3xl relative flex justify-center items-center lg:mb-20 mb-10">
          <h2 className="relative z-10 text-[#000000] font-bold text-lg md:text-5xl">
            {loading ? (
              <Skeleton.Input active style={{ width: 200 }} />
            ) : (
              t("footer.contacts")
            )}
          </h2>
        </div>

        {/* Form and Map */}
        <div className="flex gap-x-10 w-full flex-col lg:flex-row">
          {loading ? (
            <Skeleton active paragraph={{ rows: 6 }} />
          ) : (
            <ContactForm />
          )}

          <div className="my-10 lg:w-[600px] w-full">
            {loading ? (
              <Skeleton active paragraph={{ rows: 10 }} />
            ) : (
              <div className="relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47989.03816716692!2d69.1951!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5de3e6c6fd%3A0x326d5e7a87b29a4f!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1716902958977!5m2!1sen!2s"
                  className="w-full h-[450px] rounded-3xl border border-gray-300"
                  allowFullScreen
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>

        {/* Contact Information - Full Width */}
        <div className="bg-white p-6 rounded-3xl shadow-lg mt-10 text-gray-800 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#166534E6] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">{t("footer.manzil")}</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#166534E6] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">{t("footer.tel")}</h3>
              <p className="text-lg">
                <a
                  href="tel:+998900000000"
                  className="block hover:text-blue-500"
                >
                  +998 90-000-00-00
                </a>
                <a
                  href="tel:+998900000000"
                  className="block hover:text-blue-500"
                >
                  +998 90-000-00-00
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#166534E6] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg">
                <a
                  href="mailto:al-xorazmiyschool@gmail.com"
                  className="hover:text-blue-500"
                >
                  al-xorazmiyschool@gmail.com
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
