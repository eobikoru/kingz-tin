"use client";
import Image from "next/image";
import Link from "next/link";
// import MobileNav from "./MobileNav";
import { IoClose } from "react-icons/io5";
import NavItems from "./Navitems";
import logo from "../../assets/logo/Tinaus Kingz Engineering Icon.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { APP_ROUTES } from "@/src/utils/appRoutes";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="flex justify-around mb-3  py-3 shadow-lg bg-white z-10 items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={40} height={40} />
        </Link>

        <div>
          <nav className="lg:flex justify-between hidden w-full items-center">
            <NavItems />
          </nav>
        </div>

        <div className="mr-3 flex ">
          <button className="bg-blue-500 font-semibold text-white px-5 py-2 rounded-lg hidden lg:flex">
            <Link href={APP_ROUTES.ELETRONICS_PAGE}>Product</Link>
          </button>
        </div>
        <div onClick={() => setNav(!nav)} className="lg:hidden cursor-pointer">
          <RxHamburgerMenu size={30} />
        </div>
      </div>
      {/* This overlays the page to return the menu list */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[100%]  h-screen bg-black/90 z-10 duration-700 overflow-y-scroll"
            : "fixed top-0 left-[-100%] w-[100%] h-screen bg-black/80 z-10 duration-700 overflow-y-scroll delay-200"
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[80%] md:w-[60%] h-screen bg-white z-10 duration-700 overflow-y-scroll delay-200 rounded-tr-3xl rounded-br-3xl"
              : "fixed top-0 left-[-100%] w-[80%] md:w-[60%] h-screen bg-white z-10 duration-700 overflow-y-scroll"
          }
        >
          <div className="absolute top-3 right-5  ">
            <IoClose size={30} onClick={() => setNav(false)} />
          </div>
          <div className="mt-8 flex" onClick={() => setNav(false)}>
            <NavItems />
          </div>
          <div className="bg-blue-500 flex justify-center text-xl font-[400] text-white px-5 py-3 rounded-lg mx-2">
            <button className="">
              <Link href="/sign-in">Product</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
