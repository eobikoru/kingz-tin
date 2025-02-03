import AboutUs from '@/src/component/about-us'
import AcademyReviews from '@/src/component/academy-review'
import AcademyGallery from '@/src/component/gallery-academy'
import Hero from '@/src/component/hero'
import Image from 'next/image'
import React from 'react'

const AcademyPage = () => {
  return (
    <main>
    <Hero
        image="/asset/images/svg/about-us.svg"
        title="Academy for a Brighter and Sustainable Future."
        text="Inspiring Change. Powering the World Sustainably."
      />
      <div className="w-5/6 mx-auto" > 
       <div className="lg:grid lg:grid-cols-2 lg:items-center lg:justify-between my-10 lg:gap-4">
        <AboutUs
          title="Our mission"
          text="We are committed to transforming the world through sustainable power solutions and fostering joy in every community we touch. By empowering individuals and organizations with innovative and renewable energy systems, we aim to create a brighter, greener, and more sustainable future."
        />
        <Image
          src="/asset/images/png/acad.jpg"
          width={400}
          height={400}
          alt="about us"
          className="w-full h-96 object-cover rounded-md my-10"
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <AboutUs
          title="Our vision"
          text="To be a global beacon of sustainable power and joy, inspiring communities to embrace renewable energy while enriching lives with happiness and hope. We envision a world where sustainable energy is not just an option but a way of life."
          style="lg:order-2"
        />
        <Image
          src="/asset/images/png/about-us3.png"
          width={400}
          height={400}
          alt="about us"
          className="w-full h-96 object-cover rounded-md my-10 lg:order-1"
        />
      </div>
      <AcademyGallery/>
      <AcademyReviews/>
      </div>
    </main>
  )
}

export default AcademyPage