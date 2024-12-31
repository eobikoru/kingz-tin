import Card from "@/src/component/card";
import SearchSection from "@/src/component/searchSection";
import { machineData } from "@/src/hooks/electricals/machine/machinedata";
import React, { useState } from "react";
import { APP_ROUTES } from "@/src/utils/appRoutes";
import { useRouter } from "next/navigation";

const Machine = () => {
  const [data, setData] = useState(machineData);
  const router = useRouter();

  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELECTRICAL_PAGE}/machine/${id}`);
  };
  return (
    <div>
      <h1 className="my-6">
        Machine installations encompass the intricate setup and integration of
        industrial equipment, ensuring seamless operation within various
        manufacturing and production environments. These installations involve
        meticulous planning, assembly, and calibration of machinery to optimize
        efficiency and output. From assembly lines to complex manufacturing
        plants, precise machine installations play a crucial role in driving
        productivity and maintaining operational excellence.
      </h1>
      <div>
        {/* <SearchSection /> */}
      </div>
      <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <Card
              src={item.src}
              title={item.title}
              text={item.buttonText}
              id={item.id}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Machine;

