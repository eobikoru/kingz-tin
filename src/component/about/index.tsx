import React from "react";
import AboutUs from "@/src/component/about-us";
import Image from "next/image";

const About = () => {
  return (
    <div className="mb-20">
      <AboutUs
        title="Who We Are."
        text="Tinaus Kings is a leading provider of home improvement, security, and technology solutions in Nigeria. With a passion for innovation and a commitment to excellence, we strive to deliver top-quality products and services that enhance the lives of our customers.
"
      />
      <Image
        src="/about-us1.jpeg"
        width={400}
        height={400}
        alt="/asset/images/png/about us"
        className="w-full h-96  object-cover rounded-md my-10"
      />
      <div className="lg:grid lg:grid-cols-2 lg:items-center lg:justify-between my-10 lg:gap-4">
        <AboutUs
          title="Our Goal!"
          text="We want empower individuals and businesses with innovative solutions that improve their quality of life and protect their assets. We aim to be the trusted partner of choice for all their home improvement and security needs.
"
        />
        <Image
          src="/asset/images/png/about-us2.png"
          width={400}
          height={400}
          alt="about us"
          className="w-full h-96 object-cover rounded-md my-10"
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <AboutUs
          title="Our Dream!"
          text="Our dream is to create a safer, more connected, and sustainable future for our customers and communities. We aspire to be at the forefront of technological advancements, delivering cutting-edge solutions that make a positive impact on society."
          style="lg:order-2"
        />
        <Image
          src="/asset/images/png/about-us3.png"
          width={400}
          height={400}
          alt="about us"
          className="w-full h-96 object-cover rounded-md my-10 lg:order-1"
        />
      </div>
    </div>
  );
};

export default About;
