"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Flutter Developer",
    "Next.js Developer",
  ];

  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = roles[roleIndex];

        if (!isDeleting) {
          setCurrentRole(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setCurrentRole(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-24 pb-10 flex flex-col items-center justify-center gap-2"
    >
      <Image
        src={assets.profile_image_1}
        alt="profile"
        width={112}
        height={112}
        className="rounded-full w-28 h-28 object-cover object-top outline outline-2 outline-black outline-offset-4 dark:outline-white"
      />

      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-2 font-ovo dark:text-white">
        <span>Hi! I am Tanzid Mondol</span>
        <Image
          src={assets.hand_icon}
          alt="hand"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo dark:text-white min-h-[4rem] sm:min-h-[5rem] flex items-center justify-center">
        <span>{currentRole}</span>
        <span className="animate-pulse ml-1 text-gray-400">|</span>
      </h1>

      <p className="max-w-2xl mx-auto font-ovo text-gray-600 dark:text-gray-400">
        I am a passionate Full Stack Developer specializing in MERN Stack,
        Next.js, Java, Flutter, and modern web technologies.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
        <Link
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition font-ovo"
        >
          <span>Contact me</span>
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            width={16}
            height={16}
            className="w-4"
          />
        </Link>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-slate-100/70 dark:hover:bg-darkHover dark:border-white/30 dark:text-white transition font-ovo"
        >
          <span>My Resume</span>
          <Image
            src={assets.download_icon}
            alt="resume"
            width={16}
            height={16}
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
