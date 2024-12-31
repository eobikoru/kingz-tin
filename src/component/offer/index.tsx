const Offers = () => {
  return (
    <div className="p-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">What we offer</h1>
        <p className="md:w-[75%] lg:w-1/2 mx-auto my-5 ">
  At our core, we are driven by a passion for creating impactful, timeless designs that elevate everyday living.
</p>

      </div>

      <div className="offers grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        <div className="offer bg-slate-200 p-5 rounded-sm">
          <div className="bg-white w-12 h-12 rounded-md mb-7"></div>
          <div className="">
            <h3 className="font-semibold mb-3">Personalized Designs</h3>
            <p>
  We specialize in creating spaces that reflect your unique personality and lifestyle. Whether it&apos;s a cozy home or a dynamic office, our designs are tailored to your preferences and needs.
</p>

          </div>
        </div>
        <div className="offer bg-slate-200 p-5 rounded-sm">
          <div className="bg-white w-12 h-12 rounded-md mb-7"></div>
          <div className="">
            <h3 className="font-semibold mb-3">Innovative Concepts</h3>
            <p>
            Our team combines creativity with functionality to deliver designs that are both beautiful and practical. We push boundaries to create timeless spaces that inspire and captivate.


            </p>
          </div>
        </div>
        <div className="offer bg-slate-200 p-5 rounded-sm">
          <div className="bg-white w-12 h-12 rounded-md mb-7"></div>
          <div className="">
            <h3 className="font-semibold mb-3">Expert Craftsmanship</h3>
            <p>
            Attention to detail is at the heart of what we do. From selecting materials to the final installation, we ensure that every element meets the highest standards of quality and precision.


            </p>
          </div>
        </div>
        <div className="offer bg-slate-200 p-5 rounded-sm">
          <div className="bg-white w-12 h-12 rounded-md mb-7"></div>
          <div className="">
            <h3 className="font-semibold mb-3">Sustainable Practices</h3>
            <p>
            We are committed to environmentally friendly designs. By integrating sustainable materials and energy-efficient solutions, we help create spaces that care for the planet while meeting your needs.
            </p>
          </div>
        </div>
        <div className="offer bg-slate-200 p-5 rounded-sm">
          <div className="bg-white w-12 h-12 rounded-md mb-7"></div>
          <div className="">
            <h3 className="font-semibold mb-3">Custom Furniture & Decor</h3>
            <p>
            We craft bespoke furniture and decor pieces that perfectly complement your space. Each item is designed with care, blending seamlessly into the overall theme and adding a unique touch.


            </p>
          </div>
        </div>
        <div className="offer bg-slate-200 p-5 rounded-sm">
          <div className="bg-white w-12 h-12 rounded-md mb-7"></div>
          <div className="">
            <h3 className="font-semibold mb-3">Space Optimization</h3>
            <p>
            We maximize every square foot of your space to ensure a perfect balance of style and functionality. Our designs make even the smallest areas feel expansive and efficient.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;