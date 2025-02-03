"use client";

import React, { useState } from "react";

const questions = [
  {
    question: "What types of domestic appliances do you sell?",
    answer:
      " We offer a wide range of domestic appliances, including sockets, switches, lighting fixtures, and more. Our inventory is carefully curated to ensure quality and functionality.",
  },
  {
    question: "How do I schedule an installation service?",
    answer:
      "Scheduling an installation service is easy! Simply contact our team via phone or whatsapp, and we'll assist you in booking a convenient appointment time that fits your schedule.",
  },
  {
    question: " Are your technicians certified and experienced?",
    answer:
      "  Yes, our technicians are highly trained, certified professionals with years of experience in their respective fields. You can trust them to deliver exceptional service and craftsmanship.",
  },
  {
    question: "Do you offer maintenance services for installed appliances?",
    answer:
      " Yes, we offer maintenance services to ensure your installed appliances continue to operate at peak performance. Contact us to learn more about our maintenance packages.",
  },
  {
    question: "What brands of security gadgets do you sell?",
    answer:
      "   We carry a variety of reputable brands for security gadgets, including CCTV cameras, networking devices, and fire alarms. Our team can recommend the best products based on your specific requirements and budget.",
  },
  {
    question: " Can you assist with custom solar installations?",
    answer:
      "  Absolutely! We specialize in designing and installing custom solar solutions tailored to your energy needs and property specifications. Contact us for a personalized consultation.",
  },
  {
    question: " What payment methods do you accept?",
    answer:
      " We accept various payment methods, including cash, bank transfers, and online payments. Our team will provide detailed payment instructions upon confirmation of your service or product purchase.",
  },
  {
    question: " Do you offer warranty coverage for your products and services?",
    answer:
      "Yes, we stand behind the quality of our products and services. Most of our products come with manufacturer warranties, and we also offer warranty coverage for our installation services. Please inquire for specific details.",
  },
  {
    question: " Can I request a quote for services before booking?",
    answer:
      "Of course! We're happy to provide transparent and competitive quotes for our services. Simply reach out to our team with details of your project, and we'll promptly provide you with a customized quote.",
  },
];

const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className=" flex flex-col gap-5 items-center justify-center">
      <div className="w-4/5 my-10">

      <div className="border rounded-md text-white  bg-blue-500 w-[25%] text-center px-2 py-2 mx-auto">
        FAQ
      </div>
      <h3 className="font-bold text-xl mt-5 text-center mb-12">
        Get your thought questions answered at a go!
      </h3>

      <div className="">
        {questions.map((item, index) => {
          return (
            <div
              className="py-3 border border-l-0 border-r-0 border-t-0 transition-colors duration-300"
              key={index}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h2 className="font-bold text-sm md:text-lg">
                  {item.question}
                </h2>
                <span
                  className="text-2xl transition-transform duration-3000"
                  style={{
                    transform:
                      selected === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {selected === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`${
                  selected === index ? "h-auto" : "h-0 overflow-hidden"
                } text-sm md:text-lg`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center justify-center mt-12 ">
        <h3 className="font-bold text-xl lg:text-3xl mb-5">
          Still Have Questions?
        </h3>
        <p>
          Can’t find the answer you’re looking for? Kindly contact{" "}
          <a
  href="https://wa.me/2348025128208"
  target="_blank"
  rel="noopener noreferrer"
  className="underline text-blue-500 px-2 cursor-pointer"

>
  customer support
</a>

          for swift response.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Accordion;
