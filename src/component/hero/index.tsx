import { HeroProps } from "@/src/types/hero";
import React from "react";

const Hero = ({ title, text, image }: HeroProps) => {
  const heroStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="h-[28rem] flex items-center justify-center text-white py-12 bg-no-repeat bg-cover"
      style={heroStyle}
    >
      <div className="w-11/12 lg:w-3/4 text-center">
        <h1
          className="capitalize text-3xl md:text-4xl md:font-bold font-semibold lg:text-4xl leading-10 md:leading-relaxed lg:leading-normal animate-fade-in-down"
        >
          {title}
        </h1>

        <p
          className="mt-4 md:w-11/12 mx-auto text-center leading-normal md:text-md md:leading-relaxed animate-fade-in-up"
        >
          {text}
        </p>
      </div>
    </section>
  );
};

export default Hero;
