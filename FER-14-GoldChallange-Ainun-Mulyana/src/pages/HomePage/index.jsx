// import { Route, Routes } from "react-router-dom";
import NavbarComponents from "../../components/NavbarComponents";
import HeroComponents from "../../components/HeroComponents";
import OurServiceComponents from "../../components/OurServiceComponents";
import WhyUsComponents from "../../components/WhyUsComponents";
import TestimonialComponents from "../../components/TestimonialComponents";
import BannerComponents from "../../components/BannerComponents";
import FaqComponents from "../../components/FaqComponents";
import FooterComponents from "../../components/FooterComponents";

function HomePage() {
  return (
    <>
      <NavbarComponents />
      <HeroComponents />
      <OurServiceComponents />
      <WhyUsComponents />
      <TestimonialComponents />
      <BannerComponents />
      <FaqComponents />
      <FooterComponents />
    </>
  );
}

export default HomePage;
