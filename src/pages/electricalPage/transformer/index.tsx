import Card from '@/src/component/card';
import SearchSection from '@/src/component/searchSection';
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/src/utils/appRoutes";
import { useState } from 'react';
import { transformerData } from '@/src/hooks/electricals/transformer/transformerData';

const Transfomer = () => {
   const [data, setData] = useState(transformerData);
   const router = useRouter();

   const handleClick = (id: string | undefined) => {
     router.push(`${APP_ROUTES.ELECTRICAL_PAGE}/transformer/${id}`);
   };
  return (
    <div>
      <h1 className="my-6">
        Transformer installations are pivotal in managing electricity
        distribution, facilitating the safe and efficient transmission of power
        across diverse electrical systems. These installations regulate voltage
        levels, stepping up or down electricity to ensure its smooth transfer
        from power stations to end-users. Their presence within power grids
        safeguards equipment, reduces energy loss during transmission, and
        sustains a stable electrical supply to homes, businesses, and industries
        alike.
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
}

export default Transfomer
