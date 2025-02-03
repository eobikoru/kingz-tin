import { securityData } from "@/src/hooks/electronics/security/securityData"
import SecurityProductClient from "./SecurityProductClient"

export function generateStaticParams() {
  return securityData.map((item) => ({
    product: item.id,
  }))
}

const SecurityProductPage = ({ params }: { params: { product: string } }) => {
  const findItem = securityData.find((items: any) => {
    return items.id === params.product
  })

  if (!findItem) {
    return <div>Product not found</div>
  }

  return <SecurityProductClient item={findItem} />
}

export default SecurityProductPage

