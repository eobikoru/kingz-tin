"use client";
import React, { useState, useRef } from "react";
import { GoArrowRight } from "react-icons/go";

const videosList = [
  { id: 2, src: "/asset/gallery-videos/academy/academyv2.mp4" },
  { id: 1, src: "/asset/gallery-videos/academy/academyv1.mp4" },

];

const imgList = [
  { id: 6, src: "/asset/images/png/academy/academy6.jpg" },
  { id: 9, src: "/asset/images/png/academy/academy9.jpg" },
  { id: 1, src: "/asset/images/png/academy/academy1.jpg" },
  { id: 2, src: "/asset/images/png/academy/academy2.jpg" },
  { id: 3, src: "/asset/images/png/academy/academy3.jpg" },
  { id: 4, src: "/asset/images/png/academy/academy4.jpg" },
  { id: 5, src: "/asset/images/png/academy/academy5.jpg" },
  { id: 7, src: "/asset/images/png/academy/academy7.jpg" },
  { id: 8, src: "/asset/images/png/academy/academy8.jpg" },
  { id: 10, src: "/asset/images/png/academy/academy10.jpg" },
];

const AcademyGallery = () => {
  const [isPhotosActive, setIsPhotosActive] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleToggleClick = () => {
    setIsPhotosActive(!isPhotosActive);
  };

  const shiftToRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 700;
    }
  };

  return (
    <div className="bg-slate-100 py-20 px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-5">Gallery</h1>
        <p className="md:w-[75%] lg:w-1/2 mx-auto my-5">
        Explore our journey from our pioneering projects to the vibrant communities we serve, our gallery captures the essence of sustainable power in action.


        </p>
      </div>

      <div className=" flex justify-center mt-10">
        <div className="switch relative justify-between flex gap-2 bg-slate-300 text-gray-600 rounded-md items-center text-center p-1">
          <div
            className={`absolute flex self-end w-1/2 bg-white px-2 rounded-md  text-center items-center font-semibold text-black 
			`}
            style={{
              transition: "transform 0.3s ease",
              transform: isPhotosActive ? "translateX(0)" : "translateX(87%)",
            }}
          >
            {isPhotosActive ? "Photos" : "Videos"}
          </div>
          <div className="px-2 cursor-pointer" onClick={handleToggleClick}>
            Photos
          </div>
          <div className="px-2 cursor-pointer" onClick={handleToggleClick}>
            Videos
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex mt-10 transition-all overflow-hidden max-w-[90vw] relative overflow-x-scroll"
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {isPhotosActive
          ? imgList.map((image) => {
              return (
                <img
                  src={image.src}
                  alt="image"
                  className="mx-5 rounded-lg w-[16rem] h-auto"
                  key={image.id}
                />
              );
            })
          : videosList.map((video) => {
              return (
                <video key={video.id} className="mx-10 max-h-[22rem] w-[29rem]" controls>
                  <source src={video.src} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              );
            })}
      </div>

      <div
        className="flex mr-5 justify-end items-center font-semibold text-blue-400 mt-5 cursor-pointer"
        onClick={shiftToRight}
      >
        <span className="mr-2 text-xl">See More</span>{" "}
        <span>
          <GoArrowRight className="flex self-center" />
        </span>
      </div>
    </div>
  );
};

export default AcademyGallery;
