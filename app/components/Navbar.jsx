"use client";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRef, useEffect, useState } from "react";

const Navbar = () => {
  const menuItems = [
    { name: "Home", href: "#top" },
    { name: "About me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact me", href: "#contact" },
  ];

  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.theme = newDark ? "dark" : "light";
  };

  useEffect(() => {
    const savedDark =
      localStorage.theme !== "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(savedDark);
    document.documentElement.classList.toggle("dark", savedDark);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-30 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="bg" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <Link href="/">
          <Image
            src={assets.logo}
            alt="Logo"
            width={112}
            height={40}
            className="w-28 cursor-pointer mr-14 dark:hidden"
          />
          <Image
            src={assets.logo_dark}
            alt="Logo"
            width={112}
            height={40}
            className="w-28 cursor-pointer mr-14 hidden dark:block"
          />
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScrolled
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:border-white/30 dark:bg-transparent"
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                className="font-ovo hover:text-gray-500 dark:text-white dark:hover:text-gray-300 transition"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}>
            {isDark ? (
              <Image
                src={assets.sun_icon}
                alt="light"
                width={24}
                height={24}
                className="w-6"
              />
            ) : (
              <Image
                src={assets.moon_icon}
                alt="dark"
                width={24}
                height={24}
                className="w-6"
              />
            )}
          </button>

          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-ovo dark:border-white/30 dark:text-white transition"
          >
            Contact
            {isDark ? (
              <Image
                src={assets.arrow_icon_dark}
                alt="arrow"
                width={12}
                height={12}
                className="w-3"
              />
            ) : (
              <Image
                src={assets.arrow_icon}
                alt="arrow"
                width={12}
                height={12}
                className="w-3"
              />
            )}
          </Link>

          <button onClick={openMenu} className="block md:hidden ml-3">
            {isDark ? (
              <Image
                src={assets.menu_white}
                alt="menu"
                width={24}
                height={24}
                className="w-6"
              />
            ) : (
              <Image
                src={assets.menu_black}
                alt="menu"
                width={24}
                height={24}
                className="w-6"
              />
            )}
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-ovo dark:bg-darkHover dark:text-white"
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeMenu}
          >
            {isDark ? (
              <Image
                src={assets.close_white}
                alt="close"
                width={20}
                height={20}
                className="w-5"
              />
            ) : (
              <Image
                src={assets.close_black}
                alt="close"
                width={20}
                height={20}
                className="w-5"
              />
            )}
          </div>
          {menuItems.map((item, index) => (
            <li key={index} onClick={closeMenu}>
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
