import bgImage from "../../assets/production/bg.jpg";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <div className="w-full h-full p-5 lg:h-[300px] overflow-hidden rounded-3xl relative flex justify-center items-center lg:mb-20 mb-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src={bgImage} alt="milmax image" />
          </div>
          <h2 className="relative z-10 text-white font-bold text-lg md:text-5xl">
            Contacts
          </h2>
        </div>

        <div className="flex gap-x-10 w-full flex-col lg:flex-row">
          <ContactForm />

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d98122.04942949927!2d64.34039700818853!3d39.77750716421651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUzbekistan%2C%20Bukhara%20city%2C%20Piridasgir%20street%2C%205A!5e0!3m2!1sru!2s!4v1738155164638!5m2!1sru!2s"
              className="lg:w-[600px] w-full h-[450px]"
              allowFullScreen
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
