import React, { useState } from "react";
import Card from "@/src/component/card";
import SearchSection from "@/src/component/searchSection";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";
import { networkingData } from "@/src/hooks/electronics/networking/networkingData";

const Network = () => {
  const [data, setData] = useState(networkingData);
  const router = useRouter();

  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELETRONICS_PAGE}/networking/${id}`);
  };
  return (
    <div>
      <h1 className="my-6">
        Networking equipment forms the backbone of modern communication
        infrastructures, enabling seamless connectivity and data exchange across
        various devices and systems. Routers, switches, and modems comprise this
        essential equipment, orchestrating the flow of information within
        networks, whether local or global. Constant innovation in networking
        equipment enhances speed, reliability, and security, supporting the
        ever-growing demand for interconnectedness in both personal and
        professional spheres.
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
              id={item.id}
              text={item.buttonText}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Network;
