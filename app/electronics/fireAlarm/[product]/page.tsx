import { fireAlarmData } from "@/src/hooks/electronics/fireAlarm/fireAlarmData"
import FireAlarmProductClient from "./FireAlarmProduct"


export function generateStaticParams() {
  return fireAlarmData.map((item) => ({
    product: item.id,
  }))
}

const FireAlarmProductPage = ({ params }: { params: { product: string } }) => {
  const findItem = fireAlarmData.find((items: any) => {
    return items.id === params.product
  })

  if (!findItem) {
    return <div>Product not found</div>
  }

  return <FireAlarmProductClient item={findItem} />
}

export default FireAlarmProductPage

