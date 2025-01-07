'use client'
import { networkingData } from "@/src/hooks/electronics/networking/networkingData";
import imags from "@/src/assets/images/blue-bg.jpg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import NetworkingSimilarProduct from "@/src/component/similar-products/electronics/networking";

const formatPrice = (price: string) => {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const NetworkingProduct = ({ params }: { params: { product: string } }) => {
  const findItem = networkingData.find((items: any) => {
    return items.id === params.product;
  });

  let calculatedValue: number | undefined; // Declare calculatedValue variable

  if (findItem) {
    // Parse the price string to a number
    const priceAsNumber = parseFloat(findItem.price);
    // Check if priceAsNumber is a valid number (not NaN)
    if (!isNaN(priceAsNumber)) {
      // Perform arithmetic operations on the priceAsNumber
      calculatedValue = (priceAsNumber * 3) / 2;
      // Rest of your logic using calculatedValue
    }
  }

  const heroStyle = {
    backgroundImage: `url(${imags.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className=" mt-[4rem] lg:mt-[5rem]">
      <div
        className="h-[4rem] max-h-full fixed  top[4rem]  w-full z-10 flex items-center bg-no-repeat bg-cover"
        style={heroStyle}
      >
        <h1 className="p-3 max-w-[1000px] mx-5 font-semibold text-xl text-white">
          {findItem?.title}
        </h1>
      </div>
      <section className="lg:max-w-[1000px] md:max-w-[800px]  my-4 mx-2 md:mx-auto">
        <div className="flex flex-col justify-center items-center pt-20">
          {findItem && (
           <img
           src={findItem.src || ""}
           alt="Electrical Product Img"
           // width={20}
           // height={20}
           // layout="responsive"
           className=" w-[27rem] h-[27rem] my-2 rounded-lg md:rounded-xl lg:rounded-2xl mx-2"
         />
          )}
        </div>
        <div>
          <h1 className="py-3 mt-4 font-semibold text-2xl text-black">
            {findItem?.title}
          </h1>
          {/* <p className="text-gray-500 tracking-wide"> {findItem?.text}</p> */}
        </div>

        <div className=" flex flex-col my-2 md:flex-row md:justify-between items-center h-full">
          {/* <div className="flex justify-start items-center h-full">
            <div>
              <h1 className="text-3xl font-bold my-2">
                ₦{findItem ? formatPrice(findItem.price).concat(".00") : ""}
              </h1>
            </div>
            <div>
              {calculatedValue !== undefined && (
                <h1 className="text-lg font-semibold text-gray-500 md:m-3 ml-6 tracking-wider line-through">
                  ₦
                  {calculatedValue
                    ? formatPrice(calculatedValue.toString()).concat(".00")
                    : ""}
                </h1>
              )}
            </div>
          </div> */}
          <div className="mt-4">
            <h1 className="lg:text-sm ml-3 font-semibold text-gray-800">
              Shop E1 and E2 Road 2 Ikota Shopping Complex Lagos Nigeria
            </h1>
          </div>
        </div>
        <button
  className="w-full md:w-1/4 mt-4 px-8 py-2 capitalize text-md text-white bg-blue-600 rounded-md hover:bg-blue-500"
  onClick={() => window.open("https://wa.me/2348025128208", "_blank")}
>
  Contact Us
</button>


        <div className="my-5 ml-3 md:ml-2 lg:ml-0 mt-10 md:mt-16 lg:mt-20">
          <h1 className="font-bold text-3xl my-5 mt-10">Similar Product</h1>
          <Marquee>
            <NetworkingSimilarProduct />
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default NetworkingProduct;
