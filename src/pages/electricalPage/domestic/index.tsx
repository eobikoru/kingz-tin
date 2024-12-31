import React, { useState } from "react";
import Card from "@/src/component/card";
import SearchSection from "@/src/component/searchSection";
import { electricalData } from "@/src/hooks/electricals/domestic/electricalData";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";
const Domestic = () => {
  const [data, setData] = useState(electricalData);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELECTRICAL_PAGE}/domestic/${id}`);
  };
  return (
    <div>
      <h1 className="my-6">
        Domestic electrical appliances are the silent heroes that streamline our
        daily routines, providing convenience and efficiency. From refrigerators
        preserving our food to washing machines handling our laundry, these
        appliances simplify household tasks, saving both time and effort. Their
        integration of cutting-edge technology continually evolves to enhance
        functionality, making our lives more comfortable and allowing us to
        focus on what truly matters.
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
              onClick={() => handleClick(item.id)}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Domestic;
