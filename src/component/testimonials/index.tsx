"use client";

import React, { useState, useRef, useEffect } from "react";
import TestimonyCard from "./TestimonyCard";
import img1 from "@/src/assets/testimony-images/review.jpeg";
import img2 from "@/src/assets/testimony-images/review1.jpeg";
import img3 from "@/src/assets/testimony-images/emeka.jpeg";
import bgImg from "@/src/assets/images/blue-bg.jpg";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
const testimonies = [
  {
    id: 1,
    img: img1.src, // Convert StaticImageData to string
    author: "Barr Kess Sage",
    text: "Tinaus Kings made upgrading my home a breeze! From recommending the perfect appliances to expertly installing them, they exceeded my expectations. Now, my home is not only more functional but also stylish. Highly recommend their services!",
  },
  {
    id: 2,
    img: img2.src, 
    author: "CHINOMSO ONU",
    text: "I was impressed by the professionalism of the Tinaus Kings team during the installation of our new transformer...",
  },
  {
    id: 3,
    img: img3.src, 
    author: "Emeka daniel",
    text: "I recently invested in solar panels for my home, and Tinaus Kings made the process seamless...",
  },
];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const heroStyle = {
    backgroundImage: `url('/asset/images/png/Hero.svg')`,// Use template literal to include the image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const shiftToLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 700;
    }
  };

  const shiftToRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 700;
    }
  };

  return (
    <div className="flex flex-col items-center  w-full py-12 mt-[4.1rem]"  style={heroStyle}>
      <h3 className="px-4 py-2 rounded-lg border font-semibold mb-5 bg-white">
        Testimonial
      </h3>
      <h1 className="text-2xl font-semibold text-white mb-12">
      What Our Clients Are Saying….
      </h1>

      <div
        ref={sliderRef}
        className="flex transition-all overflow-hidden max-w-[90vw] relative overflow-x-scroll"
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {testimonies.map((testimony) => {
          return <TestimonyCard testimony={testimony} key={testimony.id} />;
        })}
      </div>

      <div className="flex items-center w-14 justify-between mt-5">
        <button
          onClick={shiftToLeft}
          className="rounded-full border border-blue-400 flex items-center p-2 mx-1 hover:bg-blue-400 transition-all "
        >
          <FaLessThan size={15} className="text-white" />
        </button>
        <button
          onClick={shiftToRight}
          className="rounded-full border border-blue-400 flex items-center p-2 mx-1 hover:bg-blue-400 transition-all "
        >
          <FaGreaterThan size={15} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
