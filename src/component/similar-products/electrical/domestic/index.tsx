"use client";
import { electricalData } from "@/src/hooks/electricals/domestic/electricalData";
import Card from "../../../card";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";

const DomesticSimilarProduct = () => {
  const router = useRouter();

  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELECTRICAL_PAGE}/domestic/${id}`);
  };
  return (
    <div>
      <div className="flex ">
        {electricalData.map((item, index) => (
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

export default DomesticSimilarProduct;
