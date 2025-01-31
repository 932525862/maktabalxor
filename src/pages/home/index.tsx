import AboutUs from "./components/about";
import Hero from "./components/hero";
import AgroProcess from "./components/AgroProcess"
import OurProducts from "./components/OurProducts"
import WorldMap from "../about/WorldMap"
import AgroQuality from "./components/quality"
import NewsPage from "../news";
const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <AgroProcess />
      <AgroQuality />
      <OurProducts />
      <NewsPage />
      <WorldMap />
    </>
  );
};

export default HomePage;
