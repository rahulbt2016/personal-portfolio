import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {
  socials: string[];
};

function Header({ socials }: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between max-w-8xl mx-auto z-20
        xl:items-center "
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        {socials.map((social, index) => (
          <SocialIcon
            key={index}
            url={social}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        onClick={() => (window.location.href = "#contact")}
      >
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
