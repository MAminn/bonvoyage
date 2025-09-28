"use client";

import Image from "next/image";
import InputsSearch from "@/components/InputsSearch";

const Hero = () => {
  return (
    <section className='h-screen bg-hero bg-fixed bg-cover bg-center' id='home'>
      <div className='container mx-auto h-full'>
        <div className='h-full'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-20 lg:gap-32 items-center text-center'>
              <h1 className='h1 text-center mb-2'>
                Peaceful Moments. <br /> lakes.
              </h1>
              <InputsSearch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
