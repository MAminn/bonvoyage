"use client";

import Image from "next/image";
import InputsSearch from "@/components/InputsSearch";

const Hero = () => {
  return (
    <section
      className=" h-[80vh] lg:h-[912px] bg-hero bg-fixed bg-cover bg-center"
      id="home"
    >
      <div className="container mx-auto h-full ">
        <div className=" h-full ">
          <div className=" h-full flex justify-center pt-48">
            <div className=" flex flex-col  gap-36 items-center lg:items-center ">
              <h1 className=" h1 text-center lg:text-center mb-2">
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
