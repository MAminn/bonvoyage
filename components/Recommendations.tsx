import Image from "next/image";
import React from "react";
import { FaClock, FaStar, FaUser } from "react-icons/fa";

const Recommendations = () => {
  const cardData = [
    {
      image: "/assets/img/cards/img9.jpg",
      title: "Card 1 Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatesiure magnam",
      subtitle: "Card 1 Subtitle",
    },
    {
      image: "/assets/img/cards/img1.jpg",
      title: "Card 2 Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      subtitle: "Card 2 Subtitle",
    },
    {
      image: "/assets/img/cards/img2.jpg",
      title: "Card 3 Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      subtitle: "Card 3 Subtitle",
    },
    {
      image: "/assets/img/cards/img3.jpg",
      title: "Card 4 Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      subtitle: "Card 4 Subtitle",
    },
    {
      image: "/assets/img/cards/img4.jpg",
      title: "Card 5 Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      subtitle: "Card 5 Subtitle",
    },
    {
      image: "/assets/img/cards/img5.jpg",
      title: "Card 6 Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      subtitle: "Card 6 Subtitle",
    },
    {
      image: "/assets/img/cards/img6.jpg",
      title: "Card 7 Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      subtitle: "Card 7 Subtitle",
    },
    {
      image: "/assets/img/cards/img7.jpg",
      title: "Card 8 Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      subtitle: "Card 8 Subtitle",
    },
    {
      image: "/assets/img/cards/img8.jpg",
      title: "Card 9 Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
      subtitle: "Card 9 Subtitle",
    },
  ];

  return (
    <section className=" py-40">
      <div className="container mx-auto">
        <h1 className="h2 text-black/70 text-center mb-8">
          <span className=" text-[60px]">W</span>e recommend
        </h1>
        <div className="border border-b-black w-28 mx-auto" />
        <p className=" text-center py-8 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          iure magnam <br /> consequuntur hic dignissimos eos illum dolores nisi
          esse.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className=" my-auto mx-2 flex flex-col justify-center items-center"
            >
              <div className="">
                <Image
                  src={card.image}
                  alt={"img"}
                  width={350}
                  height={200}
                  className="w-[420px] h-[300px] object-cover object-center object-fit"
                />
              </div>
              <h2 className="h3 pb-4 ">{card.title}</h2>
              <p className="pb-4 text-gray-500 text-center max-[200px]:">
                {card.description}
              </p>
              <hr className=" w-[400px] mb-2" />
              <div className=" mb-8 flex gap-4 justify-around ">
                <div className=" flex justify-start items-center gap-2 ">
                  <FaClock className=" text-gray-500" />
                  <p className=" flex items-end  text-gray-500 ">10 Days</p>
                </div>
                <div className="  flex justify-center items-center gap-2">
                  <FaUser className="text-gray-500" />{" "}
                  <p className=" flex items-end text-gray-500 ">16+</p>
                </div>
                <div className="flex justify-end items-center">
                  <FaStar className="text-gray-500" />
                  <FaStar className="text-gray-500" />
                  <FaStar className="text-gray-500" />
                  <FaStar className="text-gray-500" />
                  <FaStar className="text-gray-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
