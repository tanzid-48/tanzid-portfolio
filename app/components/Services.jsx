import Image from "next/image";
import { serviceData } from "@/assets/assets";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-6 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo dark:text-white">
        What I offer
      </h4>
      <h2 className="text-center text-5xl font-ovo dark:text-white">
        My Services
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-white/80">
        I am a passionate Full Stack Developer specializing in MERN Stack,
        Next.js, Flutter, and Java — building modern, scalable, and
        user-friendly applications.
      </p>

      <div className="services-grid gap-6 my-10">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white font-ovo">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-6 dark:text-white/80 font-ovo">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
