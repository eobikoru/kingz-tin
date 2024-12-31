"use client";
import React, { useState, useRef } from "react";
import { GoArrowRight } from "react-icons/go";

const videosList = [
  { id: 1, src: "https://www.youtube.com/embed/xH_Dk4NHKCM" },
  { id: 2, src: "/asset/gallery-videos/interior/interiorv2.mp4" },
  { id: 3, src: "/asset/gallery-videos/interior/interiorv3.mp4" },
  { id: 4, src: "/asset/gallery-videos/interior/interiorv4.mp4" },
  { id: 5, src: "/asset/gallery-videos/interior/interiorv5.mp4" },
  { id: 6, src: "/asset/gallery-videos/interior/interiorv6.mp4" },
  { id: 7, src: "/asset/gallery-videos/interior/interiorv7.mp4" },
  { id: 8, src: "/asset/gallery-videos/interior/interiorv8.mp4" },
];

const imgList = [
  { id: 1, src: "/asset/images/png/interior/interiror1.jpeg" },
  { id: 2, src: "/asset/images/png/interior/interiror2.jpeg" },
  { id: 3, src: "/asset/images/png/interior/interiror3.jpeg" },
  { id: 4, src: "/asset/images/png/interior/interiror4.jpeg" },
  { id: 5, src: "/asset/images/png/interior/interiror5.jpeg" },
  { id: 6, src: "/asset/images/png/interior/interiror6.jpeg" },
  { id: 7, src: "/asset/images/png/interior/interiror7.jpeg" },
  { id: 8, src: "/asset/images/png/interior/interiror8.jpeg" },
  { id: 9, src: "/asset/images/png/interior/interiror9.jpeg" },
  { id: 10, src: "/asset/images/png/interior/interiror10.jpeg" },
  { id: 11, src: "/asset/images/png/interior/interiror11.jpeg" },
];

const Gallery = () => {
  const [isPhotosActive, setIsPhotosActive] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleView = () => setIsPhotosActive((prev) => !prev);

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 700; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="bg-slate-100 py-20 px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-5">Gallery</h1>
        <p className="md:w-[75%] lg:w-1/2 mx-auto my-5">
          Our gallery showcases the artistry and precision that define our work.
          From breathtaking living rooms to functional yet stylish workspaces,
          explore how we bring ideas to life.
        </p>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center mt-10">
        <div className="relative flex gap-2 bg-slate-300 text-gray-600 rounded-md items-center p-1">
          <div
            className={`absolute w-1/2 bg-white px-2 rounded-md text-center font-semibold text-black`}
            style={{
              transition: "transform 0.3s ease",
              transform: isPhotosActive ? "translateX(0)" : "translateX(100%)",
            }}
          >
            {isPhotosActive ? "Photos" : "Videos"}
          </div>
          <button
            className="px-2 cursor-pointer w-1/2 text-center"
            onClick={toggleView}
            aria-label="Switch to Photos"
          >
            Photos
          </button>
          <button
            className="px-2 cursor-pointer w-1/2 text-center"
            onClick={toggleView}
            aria-label="Switch to Videos"
          >
            Videos
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        ref={sliderRef}
        className="flex mt-10 overflow-hidden max-w-[90vw] relative overflow-x-scroll"
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {isPhotosActive
          ? imgList.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Gallery Image ${image.id}`}
                className="mx-5 rounded-lg w-auto h-[23rem]"
              />
            ))
          : videosList.map((video) => {
              const isYouTube = video.src.includes("youtube.com/embed");
              return isYouTube ? (
                <iframe
                  key={video.id}
                  className="mx-5 max-h-[22rem] w-[34rem]"
                  width="300"
                  height="315"
                  src={video.src}
                  title={`YouTube video ${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <video
                  key={video.id}
                  className="mx-5 max-h-[22rem] w-[34rem]"
                  controls
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              );
            })}
      </div>

      {/* Scroll Right */}
      <div
        className="flex mr-5 justify-end items-center font-semibold text-blue-400 mt-5 cursor-pointer"
        onClick={scrollRight}
      >
        <span className="mr-2 text-xl">See More</span>
        <GoArrowRight className="flex self-center" />
      </div>
    </div>
  );
};

export default Gallery;
