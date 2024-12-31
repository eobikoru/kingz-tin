"use client";
import { networkingData } from "@/src/hooks/electronics/networking/networkingData";
import Card from "../../../card";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";

const NetworkingSimilarProduct = () => {
  const router = useRouter();

  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELETRONICS_PAGE}/networking/${id}`);
  };
  return (
    <div>
      <div className="flex ">
        {networkingData.map((item, index) => (
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

export default NetworkingSimilarProduct;
