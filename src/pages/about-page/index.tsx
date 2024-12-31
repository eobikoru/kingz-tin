import About from "@/src/component/about";
import CoreValues from "@/src/component/core-values";
import Hero from "@/src/component/hero";
import React from "react";

const AboutPage = () => {
  return (
    <main>
      <Hero
        image="/asset/images/svg/about-us.svg"
        title="Boosting the world with sustainable power"
        text="Bossting the world with sustainable power Bossting the world with sustainable."
      />
      <section className="mt-20 mb-24 w-10/12 mx-auto">
        <About />
        <CoreValues />
      </section>
    </main>
  );
};

export default AboutPage;
