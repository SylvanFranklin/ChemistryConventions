import { motion, useAnimation } from "framer-motion";
import React, { FC, useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { darkModeContext } from "../App";

export const DarkModeSwitch: FC = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);

  const toggleAnimation = useAnimation();

  return (
    <div
      className="flex"
      onClick={() => {
        setDarkMode(!darkMode);
        toggleAnimation.start((i) => ({
          rotate: [-100, 0],
          transition: { duration: 0.5, ease: "easeOut" },
        }));
      }}
    >
      <motion.button
        className="relative mx-3 flex items-center justify-center text-xl"
        animate={toggleAnimation}
      >
        {!darkMode ? (
          <BsFillSunFill className="mx-auto" />
        ) : (
          <BsFillMoonFill className="mx-auto" />
        )}
      </motion.button>
    </div>
  );
};
