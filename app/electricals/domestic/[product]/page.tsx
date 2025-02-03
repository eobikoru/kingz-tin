import { electricalData } from "@/src/hooks/electricals/domestic/electricalData"
import ElectricalProductClient from "./ElectricalProductClient"

export function generateStaticParams() {
  return electricalData.map((item) => ({
    product: item.id,
  }))
}

const ElectricalProductPage = ({ params }: { params: { product: string } }) => {
  const findItem = electricalData.find((items: any) => {
    return items.id === params.product
  })

  if (!findItem) {
    return <div>Product not found</div>
  }

  return <ElectricalProductClient item={findItem} />
}

export default ElectricalProductPage

