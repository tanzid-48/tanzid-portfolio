import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRef } from "react";

const Navbar = () => {
  const menuItems = [
    { name: "Home", href: "#top" },
    { name: "About me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact me", href: "#contact" },
  ];

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-30 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="bh-header"
          className="w-full"
        />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link href="/">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link className="font-ovo" href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="light" className="w-6" />
          </button>
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </Link>
          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-48 text-lg z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt="close-menu"
              className="w-5 cursor-pointer"
            />
          </div>
          {menuItems.map((item, index) => (
            <li onClick={closeMenu} key={index}>
              <Link className="font-ovo" href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
