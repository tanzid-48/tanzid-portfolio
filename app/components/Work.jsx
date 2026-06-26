import Image from "next/image";
import { assets, workData } from "@/assets/assets";
import Link from "next/link";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo dark:text-white">
        My portfolio
      </h4>
      <h2 className="text-center text-5xl font-ovo dark:text-white">
        My latest work
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-white/80">
        Explore my latest projects — from full stack web apps to mobile and
        desktop applications, built with modern technologies and clean code.
      </p>

      <div className="work-grid my-10 gap-5 dark:text-black">
        {workData.map((work, index) => (
          <div
            key={index}
            className="h-72 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${work.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-gray-800">{work.title}</h2>
                <p className="text-sm text-gray-600">{work.description}</p>
              </div>
              <Link
                href={work.link || "#"}
                target="_blank"
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
              >
                <Image
                  src={assets.send_icon}
                  alt="open"
                  width={20}
                  height={40}
                  className="w-5"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="https://github.com/tanzid-48"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white font-ovo"
      >
        Show more on GitHub
        <Image
          src={assets.right_arrow_bold}
          alt="arrow"
          width={16}
          height={16}
          className="w-4 dark:hidden"
        />
        <Image
          src={assets.right_arrow_bold_dark}
          alt="arrow"
          width={16}
          height={16}
          className="w-4 hidden dark:block"
        />
      </Link>
    </div>
  );
};

export default Work;
