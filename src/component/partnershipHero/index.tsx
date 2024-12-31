import React from "react";

const PartnershipHero = () => {
  const heroStyle = {
    backgroundImage: `url('/asset/images/png/Hero.svg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="h-[33rem]  flex items-center justify-center text-white py-12 bg-no-repeat bg-cover"
      style={heroStyle}
    >
      <div className="w-11/12 lg:w-3/4 text-center">
        <h1 className="capitalize font-bold text-2xl md:text-4xl lg:text-4xl leading-10 md:leading-relaxed lg:leading-normal">
          Unveiling the Artistry Within: Transformative Tales of Interior Design
          Wonders!
        </h1>
        <p className="mt-4 md:w-11/12 mx-auto text-center leading-normal md:text-md md:leading-relaxed">
          Interior design is the art of sculpting spaces into captivating
          narratives, where every corner tells a story of elegance and
          personality. Through a harmonious blend of aesthetics and
          functionality, it breathes life into rooms, reflecting the unique
          essence of those who inhabit them.
        </p>
      </div>
    </section>
  );
};

export default PartnershipHero;
