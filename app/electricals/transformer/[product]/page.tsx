import { transformerData } from "@/src/hooks/electricals/transformer/transformerData"
import TransformerProductClient from "./TransformerProductClient"

export function generateStaticParams() {
  return transformerData.map((item) => ({
    product: item.id,
  }))
}

const TransformerProductPage = ({ params }: { params: { product: string } }) => {
  const findItem = transformerData.find((items: any) => {
    return items.id === params.product
  })

  if (!findItem) {
    return <div>Product not found</div>
  }

  return <TransformerProductClient item={findItem} />
}

export default TransformerProductPage

