import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  skill: {
    imagePath: string;
    proficiency: number;
    name: string;
  };
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill.imagePath}
        className=" object-cover w-12 h-12 md:w-16 md:h-16 xl:w-32 xl:h-32 filter 
                    group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
                        ease-in-out group-hover:bg-white w-12 h-12 md:w-16 md:h-16 xl:w-32 xl:h-32  z-0"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-lg md:text-xl xl:text-3xl font-bold text-black opacity-100">
            {skill.proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
