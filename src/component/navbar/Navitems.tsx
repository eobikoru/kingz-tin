"use client";
import navLinks from "@/src/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="text-black p-2 md:text-black lg:flex font-[400] flex-col items-center gap-7 lg:flex-row justify-center w-full">
      {navLinks.map((links) => {
        const isActive = pathname === links.route;
        return (
          <div key={links.label}>
            <li
              className={`${
                isActive && "text-blue-600 font-semibold"
              } mx-4 my-10 lg:my-0 leading-relaxed h-full flex justify-center text-sm text-gray-600`}
            >
              <Link href={links.route}>{links.label}</Link>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default NavItems;
