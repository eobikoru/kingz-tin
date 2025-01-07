import React from "react";
import Image from "next/image";

type TestimonyCardProps = {
  testimony: {
	id: number,
    img: string,
    author: string,
    text: string
  };
};

const TestimonyCard = ({ testimony }: TestimonyCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center ml-12 md:ml-20 min-w-[60vw]">
      <Image
        src={testimony.img}
        alt="Testimonial Image"
        className="rounded-lg w-[12rem] h-[12rem] mb-3 md:mb-auto object-contain md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]"
      />

      <div className="max-w-[300px] text-white md:pl-10">
        <p className="text-sm lg:text-lg">”{testimony.text}”</p>
        <p className="text-gray-300 text-sm mt-3">-- {testimony.author}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
