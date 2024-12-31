"use client";
import { solarData } from "@/src/hooks/electricals/solar/solarData";
import Card from "../../../card";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";

const SolarSimilarPoduct = () => {
  const router = useRouter();

  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELECTRICAL_PAGE}/solar/${id}`);
  };
  return (
    <div>
      <div className="flex ">
        {solarData.map((item, index) => (
          <div key={item.id} className="mx-2 md:mx-0">
            <Card
              src={item.src}
              title={item.title}
              text={item.buttonText}
              onClick={() => handleClick(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarSimilarPoduct;
