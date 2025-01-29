import AboutUs from "./components/about";
import Hero from "./components/hero";
import AgroProcess from "./components/AgroProcess"
import OurProducts from "./components/OurProducts"
import WorldMap from "../about/WorldMap"
const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <AgroProcess/>
      <OurProducts/>
      <WorldMap/>
    </>
  );
};

export default HomePage;
