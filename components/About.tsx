import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center 
                    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="images/rahul_image_4.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          Hey there! 👋 I'm Rahul, a tech enthusiast with over 8 years of coding
          wizardry under my belt. 🧙‍♂️ From the bustling streets of India to the
          cool vibes of Canada, I've been on a quest for knowledge in the realm
          of Information Technology. 🌐 Armed with a Bachelor's degree in IT and
          a Post Graduation in Information Technology Solutions from Humber
          College, I've honed my skills to master the art of full stack
          development. 💻 With a toolkit featuring Java Spring Boot, Angular,
          Node.js, and React.js, I've journeyed through the realms of startups
          like OpenScreen, where I helped automate bulk QR code generation for
          Shoppers Drug Mart. Now, I'm leveling up at FDM Group as a Software
          Developer Trainee, soaking in industry-recognized training and seizing
          every opportunity that comes my way. Let's code some magic! ✨
        </p>
      </div>
    </motion.div>
  );
}

export default About;
