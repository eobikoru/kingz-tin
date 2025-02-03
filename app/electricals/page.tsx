"use client";

import Hero from "@/src/component/hero";
import Tab from "@/src/component/tabs";
import Domestic from "@/src/features/electricalPage/domestic";
import Machine from "@/src/features/electricalPage/machine";
import Solar from "@/src/features/electricalPage/solar";
import Transformer from "@/src/features/electricalPage/transformer";


const Electricals = () => {
  const items = [
    {
      key: "1",
      label: "Domestic",
      children: <Domestic />,
    },
    {
      key: "2",
      label: "Transfomer Installation",
      children: <Transformer />,
    },
    {
      key: "3",
      label: "Machine Installation",
      children: <Machine />,
    },
    {
      key: "4",
      label: "Solar Installation",
      children: <Solar />,
    },
  ];

  const onChange = (key: string) => {};

  return (
    <div className="mt-[4.1rem]">
      <Hero
        image="/asset/images/svg/Domestic.svg"
        title="Spark Your World: Discover the Cutting-Edge Wonders !"
        text="Experience the future at your fingertips with our diverse range of electrical products, designed to elevate your lifestyle. "
      />
      <section className="lg:px-10 px-2 md:px-5 mt-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mx-2 my-10">
            Electrical Products
          </h1>
        </div>
        <div className="pl-2 text-gray-400 font-semibold">
          <Tab defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </section>

    </div>
  );
};

export default Electricals;
