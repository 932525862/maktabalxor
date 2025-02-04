import bgImage from "../../assets/allimg/011.jpg";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";

const ContactPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <div className="w-full h-full p-5 lg:h-[300px] overflow-hidden rounded-3xl relative flex justify-center items-center lg:mb-20 mb-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {loading ? (
              <Skeleton.Image style={{ width: "100%", height: "100%" }} active />
            ) : (
              <img src={bgImage} alt="milmax image" />
            )}
          </div>
          <h2 className="relative z-10 text-white font-bold text-lg md:text-5xl">
            {loading ? <Skeleton.Input active style={{ width: 200 }} /> : t("footer.contacts")}
          </h2>
        </div>

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
      </div>
    </section>
  );
};

export default ContactPage;
