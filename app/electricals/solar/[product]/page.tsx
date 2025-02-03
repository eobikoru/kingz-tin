import { solarData } from "@/src/hooks/electricals/solar/solarData"
import SolarProductClient from "./SolarProductClient"

export function generateStaticParams() {
  return solarData.map((item) => ({
    product: item.id,
  }))
}

const SolarProductPage = ({ params }: { params: { product: string } }) => {
  const findItem = solarData.find((items: any) => {
    return items.id === params.product
  })

  if (!findItem) {
    return <div>Product not found</div>
  }

  return <SolarProductClient item={findItem} />
}

export default SolarProductPage

