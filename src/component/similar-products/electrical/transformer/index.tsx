"use client";
import { transformerData } from "@/src/hooks/electricals/transformer/transformerData";
import Card from "../../../card";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";

const TransformerSimilarProduct = () => {
  const router = useRouter();

  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELECTRICAL_PAGE}/transformer/${id}`);
  };
  return (
    <div>
      <div className="flex ">
        {transformerData.map((item, index) => (
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

export default TransformerSimilarProduct;
