import { HeroProps } from "@/src/types/hero";
import imags from "@/src/assets/images/blue-bg.jpg";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Hero = ({ title, text, image }: HeroProps) => {
  const heroStyle = {
    backgroundImage: `url(${image})`, // Use template literal to include the image URL
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
        {/* Adding animation to title */}
        <motion.h1
          className="capitalize text-3xl md:text-4xl md:font-bold font-semibold lg:text-4xl leading-10 md:leading-relaxed lg:leading-normal"
          initial={{ opacity: 0, y: -50 }} // Starting state
          animate={{ opacity: 1, y: 0 }} // Final state
          transition={{ duration: 1 }} // Duration of animation
        >
          {title}
        </motion.h1>

        {/* Adding animation to text */}
        <motion.p
          className="mt-4 md:w-11/12 mx-auto text-center leading-normal md:text-md md:leading-relaxed"
          initial={{ opacity: 0, y: 50 }} // Starting state
          animate={{ opacity: 1, y: 0 }} // Final state
          transition={{ duration: 1, delay: 0.2 }} // Duration with slight delay
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
