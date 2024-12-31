import React from "react";

export type ValueProps = {
  title: string;
  text: string;
};

const Value = ({ title, text }: ValueProps) => {
  return (
    <div className="mb-8">
      <h2 className="mb-2 capitalize font-bold text-2xl">{title}</h2>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Value;
