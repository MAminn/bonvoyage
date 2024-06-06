import TourCards from "@/components/TourCards";
import Link from "next/link";
import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import VerticalInputsSearch from "@/components/VerticalInputsSearch";

const ToursPage = () => {
  return (
    <section className=" h-full">
      <div className="bg-tour bg-fixed bg-cover bg-center w-full h-[400px]">
        <div className=" container flex justify-start items-start ">
          <h1 className="h1 text-center mt-36">Tour List</h1>
        </div>
      </div>
      <div className=" lg:flex lg:justify-start lg:items-center h-[85px] bg-gray-100 lg:pl-56 sm:grid sm:grid-cols-1 ">
        <ul className=" flex justify-start items-center gap-1 ">
          <li className="w-[150px] h-[85px] text-center gap-4 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
            <FaCalendarAlt className=" text-[30px]" />
            <Link href="/">Date</Link>
          </li>
          <li className="w-[230px] h-[85px] text-center gap-4 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
            <BsArrowUpRight className=" text-[30px]" />
            <Link href="/">Price Low to High</Link>
          </li>
          <li className="w-[230px] h-[85px] text-center gap-4 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
            <BsArrowDownRight className=" text-[30px]" />
            <Link href="/">Price High to Low</Link>
          </li>
          <li className="w-[150px] h-[85px] flex items-center text-center gap-4 justify-center hover:bg-accent hover:text-white transition-all duration-300">
            <MdDriveFileRenameOutline className=" text-[30px]" />
            <Link href="/">Name</Link>
          </li>
        </ul>
      </div>
      <div className=" flex justify-center lg:flex-row lg:items-start max-sm:flex-col sm:flex-col sm:items-center max-sm:items-center sm:justify-center">
        <VerticalInputsSearch />
        <TourCards />
      </div>
    </section>
  );
};

export default ToursPage;
