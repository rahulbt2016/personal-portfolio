import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: {
    companyImagePath: string;
    title: string;
    company: string;
    techImages: string[];
    started: string;
    ended: string;
    descriptionPoints: string[];
  }[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
                        max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
