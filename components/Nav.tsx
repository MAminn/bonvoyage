"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  const pathname = usePathname();
  const links = [
    { name: "home", route: "/" },
    { name: "about", route: "about" },
    { name: "destinations", route: "destinations" },
    { name: "blog", route: "blog" },
    { name: "tours", route: "tours" },
  ];

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => {
        const isActive = link.route === pathname;

        return (
          <li
            key={link.route}
            className={` list-none cursor-pointer hover:text-accent transition-all ${
              isActive ? "text-accent" : " text-[#333333]"
            }`}
          >
            <Link className="sidebar-link" href={link.route}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default Nav;
