"use client";
import CustomeButton from "./CustomButton";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const VerticalInputSearchs = () => {
  return (
    <div className="flex flex-col items-start justify-start w-[310px] py-20">
      <div className="w-full ">
        <form className="bg-white shadow-lg rounded flex flex-col justify-evenly items-center h-[600px]">
          <div className=" flex flex-col items-center gap-6">
            <div className=" flex flex-col justify-center items-start max-w-[240px] ">
              <h1 className=" h4 text-center">
                Book Perfect <br /> Tour
              </h1>
            </div>
            <input
              className=" cursor-pointer shadow appearance-none border rounded w-[250px] h-[60px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-center placeholder:text-gray-700"
              id="destination"
              type="text"
              placeholder="Destination"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              <FaMapMarkerAlt size={20} color="#999" />
            </div>
          </div>
          <div className=" flex flex-row items-center relative">
            <select
              className=" cursor-pointer shadow appearance-none border rounded w-[250px] h-[60px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-center"
              id="tourType"
            >
              <option value="" className="text-center">
                Tour Type
              </option>
              {/* Add tour type options */}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              <FaChevronDown size={20} color="#999" />
            </div>
          </div>
          <div className=" flex flex-row items-center relative">
            <select
              className="shadow cursor-pointer appearance-none border rounded w-[250px] h-[60px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-center"
              id="month"
            >
              <option value="" className="text-center  ">
                Month
              </option>
              {/* Add month options */}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              <FaChevronDown size={20} color="#999" />
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <label
              className="text-gray-700 mr-2 text-sm font-bold "
              htmlFor="price"
            >
              Price:
            </label>
            <input
              className=" w-[250px] py-2 cursor-pointer accent-black leading-tight "
              id="price"
              type="range"
              min={1240}
              max={2390}
              placeholder="Price"
            />
          </div>
          <div>
            <CustomeButton
              containerStyles="w-[196px] h-[62px] bg-[#B2BEB5]"
              text="Search"
            />
          </div>
        </form>
        {/* NEWSLETTER FORM */}
        <form className="bg-white shadow-lg rounded flex flex-col justify-evenly items-center mt-14 h-[365px]">
          <div className=" flex flex-col items-center gap-6 ">
            <div className=" flex flex-col justify-center items-start max-w-[240px] gap-4">
              <h1 className=" h4">Newsletter</h1>
              <p>Lorem ipsum dolor sit amet. Lorem ispum dolor sit amet.</p>
            </div>
            <input
              className=" cursor-pointer shadow appearance-none border rounded w-[250px] h-[60px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-center placeholder:text-gray-700"
              id="E-mail"
              type="text"
              placeholder="E-mail"
            />
          </div>

          <div>
            <CustomeButton
              containerStyles="w-[196px] h-[62px] bg-[#B2BEB5]"
              text="S U B S C R I B E"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerticalInputSearchs;
