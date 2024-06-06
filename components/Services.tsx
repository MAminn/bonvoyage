import Image from "next/image";

const Services = () => {
  const serviceData = [
    {
      img: "/assets/img/services/s-1.jpg",
      title: "Arrangement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adi piscing elit sed.…",
      price: "$1750",
    },
    {
      img: "/assets/img/services/s-2.jpg",
      title: "Flight",
      description:
        "Lorem ipsum dolor sit amet, consectetur adi piscing elit sed.…",
      price: "$1990",
    },
    {
      img: "/assets/img/services/s-3.jpg",
      title: "Transport",
      description:
        "Lorem ipsum dolor sit amet, consectetur adi piscing elit sed.…",
      price: "$1390",
    },
    {
      img: "/assets/img/services/s-4.jpg",
      title: "Deals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adi piscing elit sed.…",
      price: "$1820",
    },
  ];

  return (
    <section>
      <div className="container mx-auto my-48">
        <h1 className="h2 text-black/70 text-center mb-8">
          <span className=" text-[60px]">O</span>ur Services
        </h1>
        <div className="border border-b-black w-28 mx-auto" />
        <p className=" text-center py-8 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          iure magnam <br /> consequuntur hic dignissimos eos illum dolores nisi
          esse.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  my-8">
          {serviceData.map((card, index) => (
            <div key={index} className=" my-auto mx-auto">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={card.img}
                  alt={"img"}
                  width={350}
                  height={200}
                  className="w-[310px] h-[260px] object-cover object-center object-fit"
                />
              </div>
              <h2 className="h3 pb-4 pt-4 text-center text-black/80 ">
                {card.title}
              </h2>
              <p className="pb-4 text-gray-500  text-center max-w-[250px]">
                {card.description}
              </p>
              <p className="pb-4 text-black/80 text-center">{card.price}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className=" w-screen pt-28" />
    </section>
  );
};

export default Services;
