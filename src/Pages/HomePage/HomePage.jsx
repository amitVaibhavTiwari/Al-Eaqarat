import "./HomePage.scss";
import Work from "../../components/Work/Work";
import Faqs from "../../components/Faqs/Faqs";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Made from "../../components/MadeBy/Made";
import Navbar from "../../components/Navbar/Navbar";
import PropertySlider from "../../components/Slider/PropertySlider";
import Testimonials from "../../components/Testimonials/Testimonials";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PropertySlider />
      <Work />
      <Testimonials />
      <Faqs />
      <Footer />
      <Made />
    </>
  );
};

export default HomePage;
