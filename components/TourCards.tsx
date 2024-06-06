import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaFacebook,
  FaHotel,
  FaPinterest,
  FaStar,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";

const TourCards = () => {
  const cardData = [
    {
      img: "/assets/img/tours/img1.jpg",
      title: "Rome",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do eiusmod tempor incididunt. Mel cu decore partiendo qualisque. Eu per atqui laoreet, usu case saperet scriptorem id. An minim facete mei.",
      description: [
        {
          icon: FaClock,
          text: "10 days",
        },
        {
          icon: FaUser,
          text: "16+",
        },
        {
          icon: FaHotel,
          text: "Hotel",
        },
        {
          icon: MdChatBubbleOutline,
          text: "Tour Guide",
        },
      ],
      price: "$1990",
      socials: [
        { icon: <FaFacebook />, link: "https:facebook.com" },
        { icon: <FaTwitter />, link: "https:twitter.com" },
        { icon: <FaPinterest />, link: "https:pintrest.com" },
      ],
    },
    {
      img: "/assets/img/tours/img1.jpg",
      title: "Rome",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do eiusmod tempor incididunt. Mel cu decore partiendo qualisque. Eu per atqui laoreet, usu case saperet scriptorem id. An minim facete mei.",
      description: [
        {
          icon: FaClock,
          text: "10 days",
        },
        {
          icon: FaUser,
          text: "16+",
        },
        {
          icon: FaHotel,
          text: "Hotel",
        },
        {
          icon: MdChatBubbleOutline,
          text: "Tour Guide",
        },
      ],
      price: "$1990",
      socials: [
        { icon: <FaFacebook />, link: "https:facebook.com" },
        { icon: <FaTwitter />, link: "https:twitter.com" },
        { icon: <FaPinterest />, link: "https:pintrest.com" },
      ],
    },
    {
      img: "/assets/img/tours/img1.jpg",
      title: "Rome",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do eiusmod tempor incididunt. Mel cu decore partiendo qualisque. Eu per atqui laoreet, usu case saperet scriptorem id. An minim facete mei.",
      description: [
        {
          icon: FaClock,
          text: "10 days",
        },
        {
          icon: FaUser,
          text: "16+",
        },
        {
          icon: FaHotel,
          text: "Hotel",
        },
        {
          icon: MdChatBubbleOutline,
          text: "Tour Guide",
        },
      ],
      price: "$1990",
      socials: [
        { icon: <FaFacebook />, link: "https:facebook.com" },
        { icon: <FaTwitter />, link: "https:twitter.com" },
        { icon: <FaPinterest />, link: "https:pintrest.com" },
      ],
    },
    {
      img: "/assets/img/tours/img1.jpg",
      title: "Rome",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do eiusmod tempor incididunt. Mel cu decore partiendo qualisque. Eu per atqui laoreet, usu case saperet scriptorem id. An minim facete mei.",
      description: [
        {
          icon: FaClock,
          text: "10 days",
        },
        {
          icon: FaUser,
          text: "16+",
        },
        {
          icon: FaHotel,
          text: "Hotel",
        },
        {
          icon: MdChatBubbleOutline,
          text: "Tour Guide",
        },
      ],
      price: "$1990",
      socials: [
        { icon: <FaFacebook />, link: "https:facebook.com" },
        { icon: <FaTwitter />, link: "https:twitter.com" },
        { icon: <FaPinterest />, link: "https:pintrest.com" },
      ],
    },
    {
      img: "/assets/img/tours/img1.jpg",
      title: "Rome",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do eiusmod tempor incididunt. Mel cu decore partiendo qualisque. Eu per atqui laoreet, usu case saperet scriptorem id. An minim facete mei.",
      description: [
        {
          icon: FaClock,
          text: "10 days",
        },
        {
          icon: FaUser,
          text: "16+",
        },
        {
          icon: FaHotel,
          text: "Hotel",
        },
        {
          icon: MdChatBubbleOutline,
          text: "Tour Guide",
        },
      ],
      price: "$1990",
      socials: [
        { icon: <FaFacebook />, link: "https:facebook.com" },
        { icon: <FaTwitter />, link: "https:twitter.com" },
        { icon: <FaPinterest />, link: "https:pintrest.com" },
      ],
    },
    {
      img: "/assets/img/tours/img1.jpg",
      title: "Rome",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do eiusmod tempor incididunt. Mel cu decore partiendo qualisque. Eu per atqui laoreet, usu case saperet scriptorem id. An minim facete mei.",
      description: [
        {
          icon: FaClock,
          text: "10 days",
        },
        {
          icon: FaUser,
          text: "16+",
        },
        {
          icon: FaHotel,
          text: "Hotel",
        },
        {
          icon: MdChatBubbleOutline,
          text: "Tour Guide",
        },
      ],
      price: "$1990",
      socials: [
        { icon: <FaFacebook />, link: "https:facebook.com" },
        { icon: <FaTwitter />, link: "https:twitter.com" },
        { icon: <FaPinterest />, link: "https:pintrest.com" },
      ],
    },
    {
      img: "/assets/img/tours/img1.jpg",
      title: "Rome",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do eiusmod tempor incididunt. Mel cu decore partiendo qualisque. Eu per atqui laoreet, usu case saperet scriptorem id. An minim facete mei.",
      description: [
        {
          icon: FaClock,
          text: "10 days",
        },
        {
          icon: FaUser,
          text: "16+",
        },
        {
          icon: FaHotel,
          text: "Hotel",
        },
        {
          icon: MdChatBubbleOutline,
          text: "Tour Guide",
        },
      ],
      price: "$1990",
      socials: [
        { icon: <FaFacebook />, link: "https:facebook.com" },
        { icon: <FaTwitter />, link: "https:twitter.com" },
        { icon: <FaPinterest />, link: "https:pintrest.com" },
      ],
    },
    {
      img: "/assets/img/tours/img1.jpg",
      title: "Rome",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do eiusmod tempor incididunt. Mel cu decore partiendo qualisque. Eu per atqui laoreet, usu case saperet scriptorem id. An minim facete mei.",
      description: [
        {
          icon: FaClock,
          text: "10 days",
        },
        {
          icon: FaUser,
          text: "16+",
        },
        {
          icon: FaHotel,
          text: "Hotel",
        },
        {
          icon: MdChatBubbleOutline,
          text: "Tour Guide",
        },
      ],
      price: "$1990",
      socials: [
        { icon: <FaFacebook />, link: "https:facebook.com" },
        { icon: <FaTwitter />, link: "https:twitter.com" },
        { icon: <FaPinterest />, link: "https:pintrest.com" },
      ],
    },
  ];

  return (
    <section className=" py-20">
      <div className=" container mx-auto">
        <div className=" flex flex-col justify-start items-start gap-20 lg:gap-10    ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className=" flex sm:flex-col sm:justify-center sm:items-center sm:mb-[250px] max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:mb-[250px]  lg:mb-0 lg:flex-row  gap-8 max-w-[1000px] max-h-[290px]"
            >
              <Image
                src={card.img}
                alt=""
                width={0}
                height={0}
                className="w-[305px] h-[290px] object-cover object-center object-fit"
              />
              <div className=" flex flex-col lg:justify-start gap-[21px] lg:gap-[11px] max-h-[290px] sm:flex-col sm:justify-center sm:items-center sm:max-w-[400px] max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:max-w-[400px]">
                <h1 className="h3">{card.title}</h1>
                <p className=" text-gray-400 :">{card.subtitle}</p>
                <div className=" flex justify-between gap-6">
                  {card.description.map((item, index) => (
                    <div
                      key={index}
                      className=" flex justify-start items-start"
                    >
                      <item.icon className=" lg:text-lg sm:text-xl text-gray-400" />
                      <p className="text-gray-400 pl-1">{item.text}</p>
                    </div>
                  ))}
                  <div className="flex justify-end items-start">
                    <FaStar className="text-gray-500" />
                    <FaStar className="text-gray-500" />
                    <FaStar className="text-gray-500" />
                    <FaStar className="text-gray-500" />
                    <FaStar className="text-gray-500" />
                  </div>
                </div>
                <div className=" border-b border-gray-400 w-full" />
                <div className=" flex justify-between items-center gap-6">
                  <h1 className="h4">
                    {card.price}{" "}
                    <span className=" text-[16px] font-normal">per person</span>
                  </h1>
                  <div className=" flex justify-end items-center gap-3">
                    {card.socials.map((item, index) => (
                      <div
                        key={index}
                        className=" flex justify-end items-center"
                      >
                        <Link href={item.link}>{item.icon}</Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" border-b border-gray-400 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCards;
