import React, { useState } from "react";
import Card from "@/src/component/card";
import SearchSection from "@/src/component/searchSection";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";
import { fireAlarmData } from "@/src/hooks/electronics/fireAlarm/fireAlarmData";

const FireAlarm = () => {
   const [data, setData] = useState(fireAlarmData);
   const router = useRouter();

   const handleClick = (id: string | undefined) => {
     router.push(`${APP_ROUTES.ELETRONICS_PAGE}/fireAlarm/${id}`);
   };
  return (
    <div>
      <h1 className="my-6">
        Fire alarm equipment constitutes an essential component of building
        safety systems, swiftly detecting and alerting occupants to potential
        fire hazards. These systems employ a network of smoke detectors, heat
        sensors, and audible alarms to provide early warnings, enabling prompt
        evacuation and mitigating fire-related risks. Continuous advancements in
        fire alarm technology enhance their sensitivity and reliability,
        ensuring rapid response and potentially saving lives in critical
        situations.
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

export default FireAlarm;


