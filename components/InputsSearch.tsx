"use client";

import CustomeButton from "./CustomButton";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const InputsSearch = () => {
  return (
    <div className='flex max-sm:flex-col lg:flex-row items-center justify-center w-[1350px] relative'>
      <div className='absolute top-[-100px] lg:w-full '>
        <form className='bg-white/20 backdrop-blur-lg shadow-xl rounded-lg border border-white/30 flex sm:flex-col max-sm:flex-col lg:flex-row justify-around items-center lg:h-[140px] lg:w-full h-[400px] w-[400px] '>
          <div className=' flex lg:flex-row items-center relative max-sm:flex-col'>
            <input
              className=' cursor-pointer shadow-lg appearance-none bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg w-[250px] h-[60px] py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent placeholder:text-center placeholder:text-white/80'
              id='destination'
              type='text'
              placeholder='Destination'
            />
            <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'>
              <FaMapMarkerAlt size={20} color='#ffffff' />
            </div>
          </div>
          <div className=' flex flex-row items-center relative'>
            <select
              className=' cursor-pointer shadow-lg appearance-none bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg w-[250px] h-[60px] py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent'
              id='tourType'>
              <option value='' className='text-center bg-gray-800 text-white'>
                Tour Type
              </option>
              {/* Add tour type options */}
            </select>
            <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'>
              <FaChevronDown size={20} color='#ffffff' />
            </div>
          </div>
          <div className=' flex flex-row items-center relative'>
            <select
              className='shadow-lg cursor-pointer appearance-none bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg w-[250px] h-[60px] py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent'
              id='month'>
              <option value='' className='text-center bg-gray-800 text-white'>
                Month
              </option>
              {/* Add month options */}
            </select>
            <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'>
              <FaChevronDown size={20} color='#ffffff' />
            </div>
          </div>
          <div className=' flex justify-between items-center bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 w-[250px] h-[60px]'>
            <label
              className='text-white mr-2 text-sm font-bold '
              htmlFor='price'>
              Price:
            </label>
            <input
              className=' w-[150px] py-2 cursor-pointer accent-white leading-tight '
              id='price'
              type='range'
              min={1240}
              max={2390}
              placeholder='Price'
            />
          </div>
          <div>
            <CustomeButton
              containerStyles='w-[196px] h-[62px] bg-accent/80 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg hover:bg-accent/90 transition-all duration-300'
              text='Search'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputsSearch;
