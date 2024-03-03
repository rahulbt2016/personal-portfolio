import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
                            max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, index) => (
          <div
            key={index} // <-- Add key prop here
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center 
                            justify-center p-20 md:p-44 h-screen"
          >
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                            items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                alt=""
              />

              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {index + 1}
                </span>{" "}
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id odio sit amet purus tincidunt tincidunt. Nulla facilisi.
                Phasellus ac semper nunc. Nullam nec nisl et nisi aliquet
                sollicitudin. Nulla facilisi. Phasellus ac semper nunc. Nullam
                nec nisl et nisi aliquet sollicitudin.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
