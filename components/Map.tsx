"use client";

import Image from "next/image";

const Map = () => {
  const cityData = [
    {
      title: "London",
      address: "198 West 21th Street, Suite 721",
      phone: "Phone: +88 (0) 101 0000 000",
      fax: "Fax: +88 (0) 202 0000 001",
      email: "Email: bonvoyage@example.com",
    },
    {
      title: "New York",
      address: "198 West 21th Street, Suite 721",
      phone: "Phone: +88 (0) 101 0000 000",
      fax: "Fax: +88 (0) 202 0000 001",
      email: "Email: bonvoyage@example.com",
    },
    {
      title: "Oslo",
      address: "198 West 21th Street, Suite 721",
      phone: "Phone: +88 (0) 101 0000 000",
      fax: "Fax: +88 (0) 202 0000 001",
      email: "Email: bonvoyage@example.com",
    },
    {
      title: "Zurich",
      address: "198 West 21th Street, Suite 721",
      phone: "Phone: +88 (0) 101 0000 000",
      fax: "Fax: +88 (0) 202 0000 001",
      email: "Email: bonvoyage@example.com",
    },
  ];
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
  ];

  return (
    <section className=" h-full my-32">
      <div className="container mx-auto">
        <div className=" flex flex-col justify-center items-center text-center">
          <h1 className="h2 text-black/70 text-center mb-8">
            <span className=" text-[60px]">A</span>bout Us
          </h1>
          <div className="border border-b-black w-28 mx-auto" />
          <p className=" text-center py-8 text-gray-500 max-w-[650px]">
            This is version of Lorem Ipsum. Proin gravida nibh vel velit auctor
            aliquet. Aenean sollicitudin, loreendum auctor nisi elit consequat
            ipsum, nec sagittis sem nibh id elit. vulputate cursus a sit amet
            mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
            auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu
            in elit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna
            eu felis dapibus condimentum sit amet a augue. Sed non neque elit
          </p>
          <Image
            src={"/assets/img/about/map-pic.png"}
            alt=""
            width={0}
            height={0}
            className="w-[1300px] h-[400px]"
          />
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28  my-8">
            {cityData.map((card, index) => (
              <div
                key={index}
                className=" my-auto mx-auto flex flex-col justify-start items-start"
              >
                <h2 className="h3 pb-4 pt-4 text-center text-black/60 ">
                  {card.title}
                </h2>
                <p className="pb-2 text-gray-400 text-center">{card.address}</p>
                <p className="pb-2 text-gray-400 text-center">{card.phone}</p>
                <p className="pb-2 text-gray-400 text-center">{card.fax}</p>
                <p className="pb-2 text-gray-400 text-center">{card.email}</p>
              </div>
            ))}
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
                    className="w-[450px] h-[220px] object-cover object-center object-fit"
                  />
                  <span className="text-white text-2xl font-bold absolute left-6 bottom-4">
                    {card.title}
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                    <span className="text-white text-2xl font-bold left-6 bottom-4 absolute">
                      {card.title}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
