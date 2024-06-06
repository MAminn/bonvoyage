import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWineGlass } from "react-icons/fa";
import { FaAppleWhole, FaBurger, FaGlassWater } from "react-icons/fa6";

const Brands = () => {
  return (
    <section className=" bg-gray-100 py-8" id="contact">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 lg:grid-cols-5 py-8 ">
          <div className=" flex flex-col justify-center items-center gap-8">
            <Link href={""} className=" group">
              <FaWineGlass className=" opacity-50 group-hover:opacity-70 transition-all mx-auto text-8xl" />
            </Link>
            <p className=" text-center ">Relax and have fun.</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-8">
            <Link href={""} className=" group">
              <FaBurger className=" opacity-50 group-hover:opacity-70 transition-all mx-auto text-8xl" />
            </Link>
            <p className=" text-center ">Try local specialties.</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-8">
            <Link href={""} className=" group">
              <FaGlassWater className=" opacity-50 group-hover:opacity-70 transition-all mx-auto text-8xl" />
            </Link>
            <p className=" text-center ">Discover unknown places.</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-8">
            <Link href={""} className=" group">
              <FaAppleWhole className=" opacity-50 group-hover:opacity-70 transition-all mx-auto text-8xl" />
            </Link>
            <p className=" text-center ">Enjoy at great price.</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-8">
            <Link href={""} className=" group">
              <FaWineGlass className=" opacity-50 group-hover:opacity-70 transition-all mx-auto text-8xl" />
            </Link>
            <p className=" text-center ">Try local specialties.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
