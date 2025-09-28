import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWineGlass } from "react-icons/fa";
import { FaAppleWhole, FaBurger, FaGlassWater } from "react-icons/fa6";

const Brands = () => {
  return (
    <section
      className='relative min-h-[70vh] bg-cover bg-center bg-fixed py-20 overflow-hidden'
      id='brands'
      style={{ backgroundImage: "url(/assets/img/bgBrands.jpg)" }}>
      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-black/40 backdrop-blur-sm'></div>

      <div className='container mx-auto relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='h2 text-white mb-4'>Experience & Discover</h2>
          <p className='text-white/80 text-lg max-w-2xl mx-auto'>
            Immerse yourself in authentic local experiences that make every
            journey unforgettable
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6'>
          <div className='flex flex-col justify-center items-center gap-6 group cursor-pointer'>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-2xl'>
              <FaWineGlass className='text-white text-6xl mx-auto opacity-90 group-hover:opacity-100 transition-all duration-300' />
            </div>
            <h3 className='text-white font-semibold text-lg'>Relax & Unwind</h3>
            <p className='text-white/70 text-center text-sm leading-relaxed'>
              Experience moments of pure tranquility and joy
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-6 group cursor-pointer'>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-2xl'>
              <FaBurger className='text-white text-6xl mx-auto opacity-90 group-hover:opacity-100 transition-all duration-300' />
            </div>
            <h3 className='text-white font-semibold text-lg'>Local Cuisine</h3>
            <p className='text-white/70 text-center text-sm leading-relaxed'>
              Savor authentic flavors and culinary traditions
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-6 group cursor-pointer'>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-2xl'>
              <FaGlassWater className='text-white text-6xl mx-auto opacity-90 group-hover:opacity-100 transition-all duration-300' />
            </div>
            <h3 className='text-white font-semibold text-lg'>Hidden Gems</h3>
            <p className='text-white/70 text-center text-sm leading-relaxed'>
              Explore off-the-beaten-path destinations
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-6 group cursor-pointer'>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-2xl'>
              <FaAppleWhole className='text-white text-6xl mx-auto opacity-90 group-hover:opacity-100 transition-all duration-300' />
            </div>
            <h3 className='text-white font-semibold text-lg'>
              Fresh & Healthy
            </h3>
            <p className='text-white/70 text-center text-sm leading-relaxed'>
              Enjoy nutritious meals at amazing value
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-6 group cursor-pointer'>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-2xl'>
              <FaWineGlass className='text-white text-6xl mx-auto opacity-90 group-hover:opacity-100 transition-all duration-300' />
            </div>
            <h3 className='text-white font-semibold text-lg'>Wine & Dine</h3>
            <p className='text-white/70 text-center text-sm leading-relaxed'>
              Indulge in premium local wine experiences
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto'>
            <h3 className='text-white text-2xl font-bold mb-4'>
              Ready for Your Adventure?
            </h3>
            <p className='text-white/80 mb-6'>
              Let us craft the perfect journey tailored to your dreams and
              desires.
            </p>
            <button className='bg-accent/80 hover:bg-accent text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm'>
              Start Planning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
