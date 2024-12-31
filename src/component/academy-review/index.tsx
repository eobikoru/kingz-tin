"use client";

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";

interface ReviewDataType {
  id: number;
  name: string;
  img: string;
  date: string;
  rating: number;
  review: string;
}

const reviewData: ReviewDataType[] = [
  {
    id: 1,
    name: "Oluwaseun Ajayi",
    img: "",
    date: "12 june 2022",
    rating: 4,
    review:
      " I never imagined how much renewable energy could change our lives. Thanks to the Academy, our community not only has access to clean power but also the knowledge to sustain it. It's been a life-changing experience for all of us.",
  },
  {
    id: 2,
    name: "Emmanue Olarenwaju Victor",
    img: "",
    date: "9 sept 2023",
    rating: 5,
    review:
      " The Academy's workshops are so inspiring! I’ve learned so much about sustainable energy and how I can implement these practices in my own life. It’s empowering to know that I’m making a difference.",
  },
  {
    id: 3,
    name: "Susan Chukwudera Favour",
    img: "",
    date: "18 jan 2024",
    rating: 4,
    review:
      " The joy on my kids' faces when they saw solar lights brighten our home for the first time was priceless. Thank you for bringing light and happiness into our lives.",
  },

 
  
];

const AcademyReviews = () => {
  const [activeReview, setActiveReview] = useState(reviewData[0]);

  const handleActiveReview = (index: number) => {
    setActiveReview(reviewData[index]);
  };

  // const Rating = () => {
  //   (activeReview.rating === 1 ) {
  //     return (
  //       <div className="">
  //          <FaStar className="text-yellow-400" />
  //             <FaStar className="text-gray-400" />
  //             <FaStar className="text-gray-400" />
  //             <FaStar className="text-gray-400" />
  //             <FaStar className="text-gray-400" />
  //       </div>
  //     )
  //   }

  // }

  // useEffect(() => {

  // Rating()

  // }, [activeReview])

  return (
    <div className="pt-20 px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-5">Reviews</h1>
        <p className="md:w-[75%] lg:w-1/2 mx-auto my-5">
  The Academy&apos;s dedication to sustainability and joy is unparalleled. Their initiatives are not just impactful but truly life-changing.
</p>

      </div>
      {/* "bg-red-300 mt-10 max-h-[15rem] grid grid-cols-5 grid-rows-1 gap-2 mx-10" */}
      <div className=" mt-10 md:grid md:grid-cols-5 md:grid-rows-1 md:gap-2 md:mx-10">
        <div className="names max-h-[15rem] overflow-scroll col-span-2">
          <ul>
            {reviewData.map((person, index) => (
              <li
                key={person.id}
                className="flex items-center py-3 text-gray-400"
                onClick={() => handleActiveReview(index)}
              >
                <div className="w-10 h-10 rounded-full bg-black mr-3"></div>
                <span className="font-semibold focus:text-gray-800">
                  {person.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* border-[.5rem] */}
        <div className="review col-span-3 p-5  rounded-lg border-gray-100 font-semibold">
          <div className="flex items-center justify-between mb-10">
            <div className="rating flex gap-1 items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <div className="">{activeReview.rating}.0</div>
            </div>
            <div className="">{activeReview.date}</div>
          </div>
          <p className="">{activeReview.review}</p>
        </div>
      </div>
      <style>
        {`
          .names::-webkit-scrollbar {
            width: 12px; 
            height: auto;
          }
          .names::-webkit-scrollbar-thumb {
            background-color: #3498DB; 
            border-radius: 6px;
          }
    
		  .names::-webkit-scrollbar-track:vertical {
            background-color: #E1F6FF; 
			writing-mode: vertical-lr;
			border-radius: 6px;
      scrollbar-width: thin;
      direction: rtl;
		}
        `}
      </style>
    </div>
  );
};

export default AcademyReviews;