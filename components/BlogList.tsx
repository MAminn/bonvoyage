import Image from "next/image";

const BlogList = () => {
  const blogCard = [
    {
      img: "/assets/img/blog/bl-1.jpg",
      date: "February 19, 2018",
      title: "Asia travel route planning",
      text: "Error dolorem pro ne. Veniam inermis concludaturque ex mea. Erat disputando vis te, ei singulis delicatissimi ",
      credits: "by Howard Reed",
    },
    {
      img: "/assets/img/blog/bl-2.jpg",
      date: "March 22, 2018",
      title: "My Thailand Adventure",
      text: "Error dolorem pro ne. Veniam inermis concludaturque ex mea. Erat disputando vis te, ei singulis delicatissimi ",
      credits: "by Howard Reed",
    },
    {
      img: "/assets/img/blog/bl-3.jpg",
      date: "March 22, 2018",
      title: "Carnival In Rio",
      text: "Error dolorem pro ne. Veniam inermis concludaturque ex mea. Erat disputando vis te, ei singulis delicatissimi ",
      credits: "by Howard Reed",
    },
    {
      img: "/assets/img/blog/bl-4.jpg",
      date: "March 22, 2018",
      title: "15 days in hollywood",
      text: "Error dolorem pro ne. Veniam inermis concludaturque ex mea. Erat disputando vis te, ei singulis delicatissimi ",
      credits: "by Howard Reed",
    },
    {
      img: "/assets/img/blog/bl-5.jpg",
      date: "March 22, 2018",
      title: "My China Adventure",
      text: "Error dolorem pro ne. Veniam inermis concludaturque ex mea. Erat disputando vis te, ei singulis delicatissimi ",
      credits: "by Howard Reed",
    },
    {
      img: "/assets/img/blog/bl-6.jpg",
      date: "March 22, 2018",
      title: "The Japanese culture",
      text: "Error dolorem pro ne. Veniam inermis concludaturque ex mea. Erat disputando vis te, ei singulis delicatissimi ",
      credits: "by Howard Reed",
    },
  ];
  return (
    <section className=" my-32">
      <div className="container mx-auto">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {blogCard.map((card, index) => (
            <div
              key={index}
              className=" relative gap-6 mb-12 h-[700px]  bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <Image
                src={card.img}
                alt=""
                width={0}
                height={0}
                className="w-full h-[270px] mb-10"
              />
              <p className=" text-gray-500 text-sm text-center mt-16">
                {card.date}
              </p>
              <h1 className=" h3 text-black/80 text-center mt-4">
                {card.title}
              </h1>
              <p className="text-gray-500 text-md mx-8 mt-16 text-center leading-6">
                {card.text}
              </p>
              <p className="text-black text-center mt-20">{card.credits}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
