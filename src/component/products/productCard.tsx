import React from "react";
import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
  product: {
    id: number;
    img: StaticImageData;
    name: string;
    url: string;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col md:min-w-[20rem] bg-white rounded-xl mx-5 p-1">
      <Image
        src={product.img}
        alt="Testimonial Image"
        className="rounded-xl min-w-[12rem] h-[12rem] mb-3 md:mb-auto md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]"
      />

      <div className="text-black text-start">
        <p className="text-sm lg:text-lg">{product.name}</p>
      </div>
      <button className="w-full bg-blue-500 rounded-md py-2 my-2">
        View product
      </button>
    </div>
  );
};

export default ProductCard;
