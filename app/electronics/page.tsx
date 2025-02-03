"use client";
import Card from "@/src/component/card";
import Hero from "@/src/component/hero";
import Tab from "@/src/component/tabs";
import FireAlarm from "@/src/features/electronicPage/fireAlarm";
import Network from "@/src/features/electronicPage/network";
import Security from "@/src/features/electronicPage/security";
import SearchSection from "@/src/component/searchSection";

const Electronics = () => {
  const items = [
    {
      key: "1",
      label: "Security",
      children: <Security />,
    },
    {
      key: "2",
      label: "Networking",
      children: <Network />,
    },
    {
      key: "3",
      label: "Fire Alarm",
      children: <FireAlarm />,
    },
  ];

  const onChange = (key: string) => {};
  return (
    <div className=" mt-[4rem] lg:mt-[5rem]">
      <Hero
        image="/asset/images/svg/Security.svg"
        title="Explore the Boundless Universe of Electronics Innovations!"
        text="Step into a realm of endless possibilities with our electronic products, meticulously crafted to redefine convenience "
      />
      <section className="lg:px-10 px-2 md:px-5 mt-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mx-2 my-10">
            Electronic Products
          </h1>
        </div>
        <div className="pl-2 text-gray-400 font-semibold">
          <Tab defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </section>

    </div>
  );
};

export default Electronics;
