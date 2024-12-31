import React from "react"
import Accordion from "@/src/component/accordion";
import Testimonials from "@/src/component/testimonials";
import SearchSection from "@/src/component/searchSection";
import HeroSection from "@/src/component/heroSection";
import OurServices from "@/src/component/services";
import ProductsSection from "@/src/component/products";

const Landing: React.FC = () => {
  return (
    <div className="">
      <HeroSection />
      <OurServices />
      <Testimonials />
      <Accordion />
      <ProductsSection />
    </div>
  );
};

export default Landing;
