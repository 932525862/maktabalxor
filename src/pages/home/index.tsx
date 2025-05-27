import AboutUs from "./components/about";
import Hero from "./components/hero";
import AgroProcess from "./components/AgroProcess"
import OurProducts from "./components/OurProducts"
import AgroQuality from "./components/quality"
import NewsPage from "../news";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomeReception from "./components/reception";
import Experience from "./components/experience";
const HomePage = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <AboutUs />
      <AgroProcess />
      <AgroQuality />
      <OurProducts />
      <HomeReception/>
      <Experience/>
      <NewsPage />
    </>
  );
};

export default HomePage;
