"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handeScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // add scroll event
    window.addEventListener("scroll", handeScroll);

    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handeScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-transparent backdrop-blur-sm h-[90px] transition-all z-50 `}>
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src={"/assets/img/logo.png"}
            alt='logo'
            width={160}
            height={55}
          />
        </Link>
        {/* Mobile nav */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} 
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10 "
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          
          flex flex-col text-center gap-8 fixed bg-black/20 backdrop-blur-md w-full left-0 text-base uppercase font-medium text-white transition-all lg:hidden`}
        />
        {/* desktop nav */}
        <Nav containerStyles='flex gap-10 hidden lg:flex text-white text-base uppercase font-medium transition-all' />
        {/* hide/open menu button */}
        <div className=' flex items-center gap-4'>
          {/* login and register buttons */}
          <div className=' text-white flex items-center gap-4 '>
            <button className=' hover:text-accent transition-all text-base uppercase font-medium text-[#333333]'>
              <FaSearch size={25} />
            </button>
            <button className=' hover:text-accent transition-all text-base uppercase font-medium text-[#333333]'>
              <FaShoppingCart size={26} />
            </button>
          </div>
          <button
            className=' text-[#333333] lg:hidden'
            onClick={() => setOpenNav(!openNav)}>
            <MdMenu className=' text-4xl' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
