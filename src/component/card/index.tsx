import React, { useState } from "react";
import { CardProps } from "@/src/types/card";
import Button from "../button";

const Card = ({ src, title, text, onClick, id }: CardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    // If id has a value, change the text of the Button to "Loading" and set isLoading to true
    if (id && typeof onClick === 'function') {
      setIsLoading(true);
      onClick(); // Call the onClick function passed as prop
    }
  };

  return (
    <article className="w-[20rem]   sm:w-[20rem] md:w-[16rem] lg:w-[23rem] h-auto flex justify-center mx-2 bg-[#F9FAF9] my-2 rounded-2xl shadow-lg">
      <div className="w-[92%] my-4">
        <div>
          <img     
            src={src}
            alt={title}
            className="rounded-lg h-60 w-[24rem] sm:w-[18rem] md:w-[17rem] lg:w-[22rem]   object-fit"
          />
        </div>

        <div className="mt-4">
          <h4 className="capitalize text-md my-4 font-semibold">{title}</h4>
          {/* Conditional rendering of the Button */}
          {id ? (
            <Button onClick={handleClick} disabled={isLoading}>
              {isLoading ? "Loading....." : text}
            </Button>
          ) : (
            <Button onClick={onClick}>{text}</Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
