import { machineData } from "@/src/hooks/electricals/machine/machinedata"
import MachineProductClient from "./MachineProductClient"

export function generateStaticParams() {
  return machineData.map((item) => ({
    product: item.id,
  }))
}

const MachineProductPage = ({ params }: { params: { product: string } }) => {
  const findItem = machineData.find((items: any) => {
    return items.id === params.product
  })

  if (!findItem) {
    return <div>Product not found</div>
  }

  return <MachineProductClient item={findItem} />
}

export default MachineProductPage

