import Image from "next/image";
import React from "react";

const DestinationsPage = () => {
  const cityCards = [
    {
      img: "/assets/img/about/indo.jpg",
      title: "INDONESIA",
    },
    {
      img: "/assets/img/about/japan.jpg",
      title: "JAPAN",
    },
    {
      img: "/assets/img/about/moro.jpg",
      title: "MORROCO",
    },
    {
      img: "/assets/img/about/thai.jpg",
      title: "THAILAND",
    },
    {
      img: "/assets/img/about/indo.jpg",
      title: "INDONESIA",
    },
    {
      img: "/assets/img/about/japan.jpg",
      title: "JAPAN",
    },
    {
      img: "/assets/img/about/moro.jpg",
      title: "MORROCO",
    },
    {
      img: "/assets/img/about/thai.jpg",
      title: "THAILAND",
    },
    {
      img: "/assets/img/about/indo.jpg",
      title: "INDONESIA",
    },
    {
      img: "/assets/img/about/japan.jpg",
      title: "JAPAN",
    },
    {
      img: "/assets/img/about/moro.jpg",
      title: "MORROCO",
    },
    {
      img: "/assets/img/about/thai.jpg",
      title: "THAILAND",
    },
    {
      img: "/assets/img/about/indo.jpg",
      title: "INDONESIA",
    },
    {
      img: "/assets/img/about/japan.jpg",
      title: "JAPAN",
    },
    {
      img: "/assets/img/about/moro.jpg",
      title: "MORROCO",
    },
    {
      img: "/assets/img/about/thai.jpg",
      title: "THAILAND",
    },
  ];

  return (
    <section className=" py-36">
      <div className=" container mx-auto">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="h2 text-black/70 text-center mb-8">
            Destination List
          </h1>
          <p className=" text-gray-500 text-center max-w-[600px] leading-8">
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  my-8">
          {cityCards.map((card, index) => (
            <div key={index} className=" my-auto mx-auto">
              <div className=" relative">
                <Image
                  src={card.img}
                  alt={"img"}
                  width={350}
                  height={200}
                  className="w-[340px] h-[310px] object-cover object-center object-fit"
                />
                <span className="text-white text-2xl font-bold absolute left-6 bottom-4">
                  {card.title}
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                  <span className="text-white text-2xl font-bold left-6 bottom-4 absolute">
                    {card.title}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
