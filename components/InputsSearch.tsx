"use client";

import CustomeButton from "./CustomButton";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const InputsSearch = () => {
  return (
    <div className="flex max-sm:flex-col lg:flex-row items-center justify-center w-[1350px] relative">
      <div className="absolute top-[-100px] lg:w-full ">
        <form className="bg-white shadow-md rounded flex sm:flex-col max-sm:flex-col lg:flex-row justify-around items-center lg:h-[140px] lg:w-full h-[400px] w-[400px] ">
          <div className=" flex lg:flex-row items-center relative max-sm:flex-col">
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
      </div>
    </div>
  );
};

export default InputsSearch;
