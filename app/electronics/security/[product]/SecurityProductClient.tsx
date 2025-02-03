"use client"

import imags from "@/src/assets/images/blue-bg.jpg"
import Marquee from "react-fast-marquee"
import SecuritySimilarProduct from "@/src/component/similar-products/electronics/security"

const formatPrice = (price: string) => {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const SecurityProductClient = ({ item }: { item: any }) => {
  let calculatedValue: number | undefined

  if (item) {
    const priceAsNumber = Number.parseFloat(item.price)
    if (!isNaN(priceAsNumber)) {
      calculatedValue = (priceAsNumber * 3) / 2
    }
  }

  const heroStyle = {
    backgroundImage: `url(${imags.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  return (
    <div className="mt-[4rem]">
      <div
        className="h-[4rem] max-h-full fixed top[4rem] w-full z-10 flex items-center bg-no-repeat bg-cover"
        style={heroStyle}
      >
        <h1 className="p-3 max-w-[1000px] mx-5 font-semibold text-xl text-white">{item?.title}</h1>
      </div>
      <section className="lg:max-w-[1000px] md:max-w-[800px] my-4 mx-2 md:mx-auto">
        <div className="flex flex-col justify-center items-center pt-20">
          {item && (
            <img
              src={item.src || ""}
              alt="Security Product Img"
              className="w-[27rem] h-[27rem] my-2 rounded-lg md:rounded-xl lg:rounded-2xl mx-2"
            />
          )}
        </div>
        <div>
          <h1 className="py-3 mt-4 font-semibold text-2xl text-black">{item?.title}</h1>
        </div>

        <div className="flex flex-col my-2 md:flex-row md:justify-between items-center h-full">
          <div className="mt-4">
            <h1 className="lg:text-sm ml-3 font-semibold text-gray-800">
              155, Isawo Road, Foursquare Bus-stop, opposite Balad School, Ori-okuta, Agric Ikorodu, Lagos State
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
            <SecuritySimilarProduct />
          </Marquee>
        </div>
      </section>
    </div>
  )
}

export default SecurityProductClient

