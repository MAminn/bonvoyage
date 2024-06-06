"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const links = [
  { name: "home", route: "/" },
  { name: "about", route: "about" },
  { name: "destinations", route: "destinations" },
  { name: "blog", route: "blog" },
  { name: "tours", route: "tours" },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => {
        const isActive = link.route === pathname;

        return (
          <li
            className={`${
              isActive && "text-accent"
            } list-none cursor-pointer hover:text-accent transition-all text-[#333333]`}
            key={link.route}
          >
            <Link className="sidebar-link cursor-pointer" href={link.route}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default MobileNav;
