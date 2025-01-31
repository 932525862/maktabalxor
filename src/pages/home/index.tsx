import AboutUs from "./components/about";
import Hero from "./components/hero";
import AgroProcess from "./components/AgroProcess"
import OurProducts from "./components/OurProducts"
import WorldMap from "../about/WorldMap"
import NewsPage from "../news";
const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <AgroProcess />
      <OurProducts />
      <NewsPage />
      <WorldMap />

    </>
  );
};

export default HomePage;
