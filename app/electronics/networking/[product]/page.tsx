import { networkingData } from "@/src/hooks/electronics/networking/networkingData"
import NetworkingProductClient from "./NetworkingProductClient"


export function generateStaticParams() {
  return networkingData.map((item) => ({
    product: item.id,
  }))
}

const NetworkingProductPage = ({ params }: { params: { product: string } }) => {
  const findItem = networkingData.find((items: any) => {
    return items.id === params.product
  })

  if (!findItem) {
    return <div>Product not found</div>
  }

  return <NetworkingProductClient item={findItem} />
}

export default NetworkingProductPage

