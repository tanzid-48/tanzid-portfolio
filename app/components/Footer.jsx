import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Link href="/">
          <Image
            src={assets.logo}
            alt="Logo"
            width={144}
            height={50}
            className="w-36 mx-auto mb-2 dark:hidden"
          />
          <Image
            src={assets.logo_dark}
            alt="Logo"
            width={144}
            height={50}
            className="w-36 mx-auto mb-2 hidden dark:block"
          />
        </Link>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={assets.mail_icon}
            alt="mail"
            width={20}
            height={20}
            className="w-5 dark:hidden"
          />
          <Image
            src={assets.mail_icon_dark}
            alt="mail"
            width={20}
            height={20}
            className="w-5 hidden dark:block"
          />
          <a
            href="mailto:mdtanzid.525@gmail.com"
            className="font-ovo dark:text-white hover:text-gray-500 transition"
          >
            mdtanzid.525@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p className="font-ovo text-gray-600 dark:text-white/70">
          © {new Date().getFullYear()} Tanzid Mondol. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link
              target="_blank"
              href="https://github.com/tanzid-48"
              className="font-ovo dark:text-white hover:text-gray-500 transition"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/tanzid-mondol-2a2456379"
              className="font-ovo dark:text-white hover:text-gray-500 transition"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://facebook.com/tanzid.mondol"
              className="font-ovo dark:text-white hover:text-gray-500 transition"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://wa.me/8801798547651"
              className="font-ovo dark:text-white hover:text-gray-500 transition"
            >
              WhatsApp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;