import React from "react";
import img1 from "@/src/assets/services-images/image1.jpg";

const OurServices = () => {
  const heroStyle = {
    backgroundImage: `url('/asset/images/svg/smilar.svg')`,// Use template literal to include the image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center pt-14 "
    style={ heroStyle}
    >
      <div className="border rounded-md text-white bg-[#75A2CA] p-2">
      What We Do
      </div>
      <div className=" w-full  flex justify-center mt-6 ">
        <div className=" flex justify-center w-3/4 md:w-5/6 ">
        <p className="font-semibold lg:text-xl">
    At Tinaus Kings, we&apos;re dedicated to providing top-notch solutions to meet all your home improvement, security, and technology needs. Explore our range of services tailored to enhance your lifestyle and safeguard your property.
      </p>
        </div>
      </div>
      <div className="  flex flex-col  text-white items-center w-full mb-5 md:my-10">
        <div className="w-4/5 md:w-3/5    md:grid gap-5 flex  flex-col  md:grid-cols-6 mt-10 mb-3">
          <div className=" bg-no-repeat bg-cover relative z-10 h-40   col-span-2 flex  justify-center items-end pb-10  h-[15.4rem] rounded-lg"
          style={{ backgroundImage: `url(asset/images/png/machine/machine.jpeg)` }} 
          >
               <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg z-[-10]"
            style={{ mixBlendMode: "multiply" }}
          ></div>
            <div className="w-[90%]">
              <h3>Machine Installation</h3>
              <p className="truncate line-clamp-2 text-wrap ">
                Need professional assistance with machine installations? Look no further. Our technicians are trained to install a variety of machinery, ensuring optimal performance and efficiency.
              </p>
            </div>
          </div>
          <div className="bg-no-repeat relative z-10 bg-cover  h-40 col-span-3 flex  justify-center items-end pb-10  h-[15.4rem] rounded-lg"
            style={{ backgroundImage: `url(${img1.src})` }} 
          >
               <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg z-[-10]"
            style={{ mixBlendMode: "multiply" }}
          ></div>
            <div className="w-[90%]">
              <h3>Transformer Installation</h3>
              <p className="truncate line-clamp-2 text-wrap ">
                {" "}
                Trust our skilled team to handle transformer installations efficiently and safely. Whether you need a new installation or an upgrade, we deliver reliable solutions to meet your power distribution requirements.

              </p>
            </div>
          </div>
          <div className="bg-no-repeat bg-cover relative z-10  h-40 col-span-1 flex  justify-center items-end pb-10  pb-10 h-[15.4rem] rounded-lg"
           style={{ backgroundImage: `url(asset/images/png/solar/solar-1.jpeg)` }} 
          >
               <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg z-[-10]"
            style={{ mixBlendMode: "multiply" }}
          ></div>
            <div className="w-[90%]">
              <h3>Solar Installation</h3>
              <p className="truncate line-clamp-2 text-wrap ">
                {" "}
                Harness the power of solar energy with our expert installation services. We design and install solar systems tailored to your energy needs, providing sustainable and cost-effective solutions for your home.

              </p>
            </div>
          </div>
        </div>
        <div className="w-4/5 md:w-3/5  flex  flex-col md:grid gap-5 flex mb-5 md:grid-cols-6">
          <div className="bg-no-repeat relative z-10 bg-cover  h-40 flex  justify-center items-end pb-10 pb-10 col-span-4 h-[15.4rem] rounded-lg"
           style={{ backgroundImage: `url(asset/images/png/elec/electricalp-1.jpg)` }} 
          >
          <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg z-[-10]"
            style={{ mixBlendMode: "multiply" }}
          ></div>
            <div className="w-[90%]">
              <h3>Domestic Appliance Sales and Installation</h3>
              <p className="truncate line-clamp-2 text-wrap ">
                {" "}
                From sockets to switches and everything in between, we offer a comprehensive selection of domestic appliances to upgrade your home. Our expert technicians ensure seamless installation, so you can enjoy enhanced functionality and convenience.
              </p>
            </div>
          </div>
          <div className="bg-no-repeat bg-cover  flex  relative z-10 justify-center items-end pb-10 pb-10 h-40 col-span-2 h-[15.4rem] rounded-lg"
           style={{ backgroundImage: `url(asset/images/png/security/security.jpeg)` }} 
          >
               <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg z-[-10]"
            style={{ mixBlendMode: "multiply" }}
          ></div>
            <div className="w-[90%]">
              <h3>Security Gadgets Sales and Installation</h3>
              <p className="truncate line-clamp-2 text-wrap ">
                {" "}
                Protect your property with our range of security gadgets, including CCTV cameras, networking gadgets, and fire alarms. We offer high-quality products and seamless installation to keep your home safe and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center mt-10 flex-col md:grid gap-5 md:grid-cols-6 w-[30rem] md:w-[43rem] lg:w-[60rem]">
      
        <div className="relative text-white col-span-2 h-[15rem] w-[90%] md:w-auto">
          <Image
            src={img1}
            alt="Image 1"
            className="absolute object-fit w-full h-full bg-center mix-blend-overlay rounded-lg"
          />
          <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <div className="absolute bottom-5  ml-3">
            <h1 className="text-xl font-semibold">Heading</h1>
            <p className="truncate line-clamp-2 text-wrap bottom-0 overflow-hidden">
              At company name, we are passionate about the environment and ...
              commited to providing sustainalbe enegery sollution for a better
              tomorrow commited to providing sustainalbe enegery sollution for a
              better tomorrow
            </p>
          </div>
        </div>

        <div className=" relative text-white col-span-3 h-[15rem] w-[90vw] md:w-auto">
        <Image
            src={Img2}
            alt="Image 1"
            className="absolute object-fit w-full h-full bg-center mix-blend-overlay rounded-lg"
          />
          <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <div className="absolute bottom-5 ml-3">
            <h1 className="text-xl font-semibold">Heading</h1>
            <p className="truncate line-clamp-2 text-wrap bottom-0 overflow-hidden">
              At company name, we are passionate about the environment and
              commited to providing sustainalbe enegery sollution for a better
              tomorrow commited to providing sustainalbe enegery sollution for a
              better tomorrow
            </p>
          </div>
        </div>
        <div className="relative text-white col-span-1 h-[15rem] w-[90vw] md:w-auto">
        <Image
            src={Img3}
            alt="Image 1"
            className="absolute object-fit w-full h-full bg-center mix-blend-overlay rounded-lg"
          />
          <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <div className="absolute bottom-5 ml-3">
            <h1 className="text-xl font-semibold">Heading</h1>
            <p className="truncate line-clamp-2 text-wrap bottom-0 overflow-hidden">
              At company name, we are passionate about the environment and
              commited to providing sustainalbe enegery sollution for a better
              tomorrow commited to providing sustainalbe enegery sollution for a
              better tomorrow
            </p>
          </div>
        </div>
        <div className="relative text-white col-span-4 h-[15rem] w-[90vw] md:w-auto">
        <Image
            src={Img4}
            alt="Image 1"
            className="absolute object-fit w-full h-full bg-center mix-blend-overlay rounded-lg"
          />
          <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <div className="absolute bottom-5 ml-3">
            <h1 className="text-xl font-semibold">Heading</h1>
            <p className="truncate line-clamp-2 text-wrap bottom-0 overflow-hidden">
              At company name, we are passionate about the environment and
              commited to providing sustainalbe enegery sollution for a better
              tomorrow commited to providing sustainalbe enegery sollution for a
              better tomorrow
            </p>
          </div>
        </div>
        <div className="relative text-white col-span-2 h-[15rem] w-[90vw] md:w-auto">
           <Image
            src="/asset/images/svg/four.svg"
            alt="Image 1"
            width={150}
            height={150}
            className="absolute object-cover w-full h-full   rounded-lg"
          />
          <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <div className="absolute bottom-5 ml-3">
            <h1 className="text-xl font-semibold">Heading</h1>
            <p className="truncate line-clamp-2 text-wrap bottom-0 overflow-hidden">
              At company name, we are passionate about the environment and ...
              commited to providing sustainalbe enegery sollution for a better
              tomorrow commited to providing sustainalbe enegery sollution for a
              better tomorrow
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OurServices;
