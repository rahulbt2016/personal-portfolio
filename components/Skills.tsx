import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {
  skills: {
    imagePath: string;
    proficiency: number;
  }[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-5 md:grid-cols-8 xl:grid-cols-10 gap-5">
        {skills.map((skill, index) => (
          <Skill
            skill={skill}
            directionLeft={index < skills.length / 2 ? true : false}
            key={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
