import React from "react";

export type AboutUsProps = {
  title: string;
  text: string;
  style?: string;
};
const AboutUs = ({ title, text, style }: AboutUsProps) => {
  return (
    <div className={`mb-2 ${style}`}>
      <h2 className="text-2xl mb-2 font-bold">{title}</h2>
      <p className="">{text}</p>
    </div>
  );
};

export default AboutUs;
