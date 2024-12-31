"use client";
import { fireAlarmData } from "@/src/hooks/electronics/fireAlarm/fireAlarmData";
import Card from "../../../card";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";

const FireAlarmSimiliarProduct = () => {
  const router = useRouter();

  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELETRONICS_PAGE}/fireAlarm/${id}`);
  };
  return (
    <div>
      <div className="flex ">
        {fireAlarmData.map((item, index) => (
          <div key={item.id} className=" md:mx-0">
            <Card
              src={item.src}
              title={item.title}
              id={item.id}
              text={item.buttonText}
              onClick={() => handleClick(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FireAlarmSimiliarProduct;
