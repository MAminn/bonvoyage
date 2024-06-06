"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Slider from "./Slider";
import { Pagination } from "swiper/modules";
import SwiperNavButton from "./SwiperNavButton";

const Footer = () => {
  const swiperData = [
    {
      img: "/assets/img/swiper/s1.jpg",
    },
    {
      img: "/assets/img/swiper/s2.jpg",
    },
    {
      img: "/assets/img/swiper/s3.jpg",
    },
    {
      img: "/assets/img/swiper/s4.jpg",
    },
    {
      img: "/assets/img/swiper/s5.jpg",
    },
    {
      img: "/assets/img/swiper/s6.jpg",
    },
    {
      img: "/assets/img/swiper/s7.jpg",
    },
    {
      img: "/assets/img/swiper/s8.jpg",
    },
    {
      img: "/assets/img/swiper/s9.jpg",
    },
    {
      img: "/assets/img/swiper/s10.jpg",
    },
    {
      img: "/assets/img/swiper/s11.jpg",
    },
    {
      img: "/assets/img/swiper/s12.jpg",
    },
    {
      img: "/assets/img/swiper/s13.jpg",
    },
  ];
  const images = [
    "/assets/img/swiper/s1.jpg",
    "/assets/img/swiper/s2.jpg",
    "/assets/img/swiper/s4.jpg",
    "/assets/img/swiper/s5.jpg",
    "/assets/img/swiper/s6.jpg",
    "/assets/img/swiper/s7.jpg",
    "/assets/img/swiper/s8.jpg",
    "/assets/img/swiper/s9.jpg",
    "/assets/img/swiper/s10.jpg",
    "/assets/img/swiper/s11.jpg",
  ];
  return (
    <section className=" bg-black relative ">
      <div className="container mx-auto">
        <div className=" pt-14">
          <h1 className="h2 text-white text-center mb-8">
            Make memories with us
          </h1>
        </div>
        <div className="border border-b-black w-28 mx-auto" />
        <div className=" text-white  py-12">
          <ul className="flex justify-center gap-8 text-xl">
            <li>
              <Link
                href="#"
                className=" text-white hover:text-accent transition-all"
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" text-white hover:text-accent transition-all"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" text-white hover:text-accent transition-all"
              >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" text-white hover:text-accent transition-all"
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
        {/* slider */}
        {/* <div className="container mx-auto pb-20">
          <Slider images={images} />
        </div> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          className=" h-full md:max-w-[660px]  mb-8 "
        >
          {swiperData.map((item, index) => (
            <SwiperSlide key={index} className="w-[120px] h-[120px] ">
              <div className="">
                <Image
                  src={item.img}
                  alt="img"
                  width={0}
                  height={0}
                  className="w-full h-full object-cover object-center object-fit "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" flex justify-center items-center flex-col pb-20 ">
          <p className=" text-white">Get the best offers first.</p>
          <p className=" text-white">Subscribe.</p>
        </div>
      </div>
      <hr className=" w-screen absolute bottom-14" />
    </section>
  );
};

export default Footer;
