import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Img1 from "@/src/assets/hero-images/image1.svg";
import Img2 from "@/src/assets/hero-images/image2.svg";
import Img3 from "@/src/assets/hero-images/image3.svg";
import Img4 from "@/src/assets/hero-images/image4.svg";
import { motion } from "framer-motion"; // Import Framer Motion

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url('/asset/images/png/Hero.svg')`, // Use template literal to include the image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="mt-14">
      <div className="w-full bg-no-repeat bg-cover" style={heroStyle}>
        <div className="flex justify-center">
          <div className="w-[93%]">
            {/* Adding animation to h1 */}
            <div className="mt-14 md:mt-20 md:mb-7 mb-8 flex justify-center">
              <h1 className="text-[1.6rem] sm:text-[1rem] text-white md:text-[2.4rem] lg:text-[2.7rem] font-bold tracking-wide animate-fade-in-down">
                Experience Ease with Our Smart Solutions!
              </h1>
            </div>

     
            <div className="flex justify-center">
              <div className="md:flex md:justify-center sm:w-4/5 md:w-[850%] md:w-full">
                <p className="text-white tracking-wide text-[0.9rem] sm:text[1rem] md:text-[1rem] lg:text-[1.1rem] animate-fade-in-up">
                  We are your Trusted Partner for Solar, Security, and Networking Innovations. Need help with any of
                  these?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:mt-5">
          <div className="flex items-end gap-3 pb-10 md:mt-14 mt-10 md:w-[83%] w-[90%] md:gap-5">
            <div className="">
              <Image src={Img1} alt="hero image" />
            </div>
            <div className="">
              <Image src={Img2} alt="hero image" />
            </div>
            <div className="">
              <Image src={Img3} alt="hero image" />
            </div>
            <div className="">
              <Image src={Img4} alt="hero image" />
            </div>
          </div>
        </div>
      </div>

      <Marquee autoFill className="py-5">
      <span className="flex items-center gap-2 mx-5">
  Nigerchin cable
  <img
    src="./asset/images/png/brands/brand1.png"
    alt="Nigerchin cable logo"
    className="h-6 w-auto"
  />
</span>

<span className="flex items-center gap-2 mx-5">Jinko <img
    src="./asset/images/png/brands/brand22.jpeg"
    alt="Nigerchin cable logo"
    className="h-6 w-auto"
  /></span>
<span className="flex items-center gap-2 mx-5">Coleman <img
    src="./asset/images/png/brands/brand3.png"
    alt="Nigerchin cable logo"
    className="h-6 w-auto"
  /></span>
<span className="flex items-center gap-2 mx-5">Schneider <img
    src="./asset/images/png/brands/brand4.png"
    alt="Nigerchin cable logo"
    className="h-6 w-auto"
  /></span>
<span className="flex items-center gap-2 mx-5">luminous <img
    src="./asset/images/png/brands/brand5.jpeg"
    alt="Nigerchin cable logo"
    className="h-6 w-auto"
  /></span>
<span className="flex items-center gap-2 mx-5">Havells <img
    src="./asset/images/png/brands/brand6.jpeg"
    alt="Nigerchin cable logo"
    className="h-6 w-auto"
  /></span>
<span className="flex items-center gap-2 mx-5">Felicity <img
    src="./asset/images/png/brands/brand7.png"
    alt="Nigerchin cable logo"
    className="h-6 w-auto"
  /></span>
<span className="flex items-center gap-2 mx-5">Canadian solar <img
    src="./asset/images/png/brands/brand8.jpeg"
    alt="Nigerchin cable logo"
    className="h-6 w-auto"
  /></span>
<span className="flex items-center gap-2 mx-5">Panasonic <img
    src="./asset/images/png/brands/brand9.jpeg"
    alt="Nigerchin cable logo"
    className="h-6 w-auto"
  /></span>
      </Marquee>
    </div>
  );
};

export default HeroSection;
