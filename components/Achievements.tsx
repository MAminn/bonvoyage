"use client";

import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    number: 19,
    text: "Amazing deals",
  },
  {
    number: 670,
    text: "Sold tours",
  },
  {
    number: 24,
    text: "New tours",
  },
  {
    number: 980,
    text: "Happy customers",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="bg-achievements h-[700px] w-full bg-fixed bg-cover bg-center ">
      <div className=" container mx-auto">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-16 py-[230px]">
          {stats.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center items-center"
            >
              {/* circle outer */}
              <div className="  w-[140px] h-[140px] mx-auto p-1 mb-6">
                {/* circle inner & count number */}
                <div
                  ref={ref}
                  className="  w-full h-full flex items-center justify-center text-5xl text-white "
                >
                  {/* render the countup animation only when the component is in view */}
                  {isInView && (
                    <CountUp start={0} end={item.number} duration={6} />
                  )}
                </div>
              </div>
              <hr className=" w-[50px] mb-6" />
              {/* text */}
              <div className="flex flex-col justify-center items-center text-center">
                <h4 className=" h4 text-white">{item.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
