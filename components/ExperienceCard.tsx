import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
                        w-[320px] md:w-[600px] xl:w-[750px] snap-center bg-[#292929] p-10 
                        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full  xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="images/fdm-logo.jpg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-light">
          Software Developer (Java) - Trainee
        </h4>
        <p className="font-bold text-lg md:text-xl lg:text-2xl mt-1">
          FDM Froup
        </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8 rounded-full"
            src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
            alt=""
          />
        </div>
        <p className="uppercase py-3 text-gray-300 text-sm md:text-lg">
          Started work ... - Ended...
        </p>

        <ul className="list-disc space-y-0 ml-5 text-sm">
          <li>
            Summary point Summary point Summary point Summary point Summary
            point Summary point Summary point Summary point
          </li>
          <li>
            Summary point Summary point Summary point Summary point Summary
            point Summary point Summary point Summary point
          </li>
          <li>
            Summary point Summary point Summary point Summary point Summary
            point Summary point Summary point Summary point
          </li>
          <li>
            Summary point Summary point Summary point Summary point Summary
            point Summary point Summary point Summary point
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
