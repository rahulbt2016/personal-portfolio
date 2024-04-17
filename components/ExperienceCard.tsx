import React from "react";
import { motion } from "framer-motion";

type Props = {
  experience: {
    companyImagePath: string;
    title: string;
    company: string;
    techImages: string[];
    started: string;
    ended: string;
    descriptionPoints: string[];
  };
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-1 md:space-y-5 flex-shrink-0 
                        w-80 md:w-[700px] xl:w-[800px] snap-center bg-[#292929] p-2 md:p-10 
                        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-lg  xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={experience.companyImagePath}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-lg md:text-2xl lg:text-3xl font-light">
          {experience.title}
        </h4>
        <p className="font-bold text-sm md:text-xl lg:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.techImages.map((techImage, index) => (
            <img
              className="h-6 w-6 md:h-8 md:w-8 rounded-full"
              src={techImage}
              alt=""
              key={index}
            />
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300 text-xs md:text-lg">
          {experience.started} - {experience.ended}
        </p>

        <ul className="list-disc space-y-0 ml-5 text-xs">
          {experience.descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
