import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo dark:text-white">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-ovo dark:text-white">
        About me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Left - Profile Image */}
        <div className="max-w-max mx-auto relative">
          <Image
            src={assets.user_image}
            alt="Tanzid Mondol"
            width={320}
            height={320}
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />
        </div>

        {/* Right - Info */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo dark:text-white/80">
            I am a passionate Full Stack Developer and CSE student at Pundra
            University of Science & Technology, Bogura. I specialize in building
            complete web and mobile applications using MERN Stack, Next.js,
            Flutter, and Java — with a strong focus on clean code, scalable
            architecture, and real-world deployment.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map((item) => (
              <li
                key={item.title}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="w-7 mt-3 dark:hidden"
                />
                <Image
                  src={item.iconDark}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo dark:text-white/80">
            Tools I use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image
                  src={tool}
                  alt="tool"
                  width={28}
                  height={28}
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
