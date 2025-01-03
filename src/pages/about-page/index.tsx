import About from "@/src/component/about";
import CoreValues from "@/src/component/core-values";
import Hero from "@/src/component/hero";
import React from "react";
import { Carousel } from "antd";

const AboutPage = () => {
  return (
    <main>
      <Hero
        image="/asset/images/svg/about-us.svg"
        title="Boosting the world with sustainable power"
        text="Boosting the world with sustainable power. Boosting the world with sustainable."
      />
      <section className="mt-20 mb-24 w-10/12 mx-auto">
        <About />
        <CoreValues />
        <Carousel autoplay>
          <div>
            <img
              src="/asset/images/carousel/image1.jpg"
              alt="Slide 1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div>
            <img
              src="/asset/images/carousel/image2.jpg"
              alt="Slide 2"
              className="w-full h-64 object-cover"
            />
          </div>
          <div>
            <img
              src="/asset/images/carousel/image3.jpg"
              alt="Slide 3"
              className="w-full h-64 object-cover"
            />
          </div>
          <div>
            <img
              src="/asset/images/carousel/image4.jpg"
              alt="Slide 4"
              className="w-full h-64 object-cover"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default AboutPage;
