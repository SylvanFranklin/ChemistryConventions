import { motion, useAnimation } from "framer-motion";
import React, { FC, useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { darkModeContext } from "../App";
import NavItem from "./NavItem";

export const DarkModeSwitch: FC = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);
  const toggleAnimation = useAnimation();

  return (
    <NavItem
      action={() => {
        setDarkMode(!darkMode);
        toggleAnimation.start((i) => ({
          rotate: [-100, 0],
          transition: { duration: 0.5, ease: "easeOut" },
        }));
      }}
    >
      <div className="flex">
        <motion.div className="" animate={toggleAnimation}>
          {!darkMode ? (
            <BsFillSunFill className="mx-auto" />
          ) : (
            <BsFillMoonFill className="mx-auto" />
          )}
        </motion.div>
      </div>
    </NavItem>
  );
};
