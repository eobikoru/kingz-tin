import React, { useState } from "react";
import Card from "@/src/component/card";
import SearchSection from "@/src/component/searchSection";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";
import { securityData } from "@/src/hooks/electronics/security/securityData";

const Security = () => {
  const [data, setData] = useState(securityData);
  const router = useRouter();

  const handleClick = (id: string | undefined) => {
    router.push(`${APP_ROUTES.ELETRONICS_PAGE}/security/${id}`);
  };
  return (
    <div>
      <h1 className="my-6">
        Security equipment encompasses a diverse array of technologies and tools
        designed to protect individuals, properties, and assets from potential
        threats. From sophisticated surveillance cameras and access control
        systems to alarm systems and motion detectors, these tools work
        collectively to enhance safety and provide peace of mind. Constant
        innovation in security equipment aims to offer smarter, more integrated
        solutions, leveraging advancements in technology to ensure comprehensive
        protection in various environments and scenarios.
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

export default Security;