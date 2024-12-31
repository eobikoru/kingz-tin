import React, { useState } from "react";
import Card from "../card";
import { APP_ROUTES } from "@/src/utils/appRoutes";
import { useRouter } from "next/navigation";
import { solarData } from "@/src/hooks/electricals/solar/solarData";
import Marquee from "react-fast-marquee";
import FireAlarmSimiliarProduct from "../similar-products/electronics/fire-alarm";

const ProductsSection = () => {
  const [data, setData] = useState(solarData);
  const router = useRouter();
    const heroStyle = {
    backgroundImage: `url('/asset/images/svg/smilar.svg')`,// Use template literal to include the image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELECTRICAL_PAGE}/solar/${id}`);
  };
  return (
    <div className="p-16 flex flex-col gap-5 items-center justify-center
    
    "
    style={ heroStyle}
    >
      <div className="border rounded-md text-white bg-blue-500 p-2 mb-4">
        Products
      </div>
      <h3 className="font-semibold  md:text-2xl text-center mb-5">
        Get familiar with products offered by electric solution to foster an
        healthy community
      </h3>

      <div
        className="flex transition-all overflow-hidden max-w-[90vw] relative overflow-x-scroll"
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}

      >
          <Marquee>
            <FireAlarmSimiliarProduct />
          </Marquee>
       
      </div>
    </div>
  );
};

export default ProductsSection;
