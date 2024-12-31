import React from "react";
import Value from "../values";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div>
      <h2 className="capitalize text-4xl text-center font-bold mb-8">
      Here’s what you can expect when you work with Tinaus Kings;
      </h2>
      <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-6">
        <div>
          <Value
            title="Excellence"
            text=" We are committed to excellence in all that we do, striving to deliver exceptional products and services to our customers."
          />
          <Value
            title="Ethics"
            text=" We conduct our business with the highest ethical standards, ensuring honesty, integrity, and fairness in all our interactions."
          />
        </div>
        <Image
          src="/asset/images/png/core-value1.jpeg"
          width={400}
          height={400}
          alt="values"
          className="mb-8 w-full h-96 object-cover rounded-md"
        />
        <div>
          <Value
            title="Empowerment"
            text="We empower our customers by providing them with innovative solutions that enhance their lives and improve their well-being."
          />
          <Value
            title="Efficiency"
            text="We value efficiency and strive to optimize our processes to deliver timely and cost-effective solutions to our customers."
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
