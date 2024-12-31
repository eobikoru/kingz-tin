'use client'
import Gallery from "@/src/component/Gallery";
import Offers from "@/src/component/offer";
import Hero from "@/src/component/hero"
import Reviews from "@/src/component/reviews";

const Partnership = () => {

  const title = "Unveiling the Artistry Within"
  const text = "Interior design is the art of sculpting environments that embody the unique spirit of those who live and work within them. Our passion lies in creating spaces that inspire, comfort, and elevate."

  return (
    <div className="mt-[4rem]">
       <Hero
        image="/asset/images/svg/partner.svg"
        title={title}
        text={text} />
      <Offers />
      <Gallery />
      <Reviews />
    </div>
  );
}

export default Partnership
