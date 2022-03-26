import { FC, useContext, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { darkModeContext } from "../App";

export const DarkModeSwitch: FC = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);

  return (
    <div
      className="flex w-10 h-16 transition-all duration-500"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      <div className="flex relative items-center justify-center dark:text-60 text-30 h-12 w-12 mt-2 mb-2 mx-auto">
        {darkMode ? (
          <BsFillSunFill className="w-6 h-6" />
        ) : (
          <BsFillMoonFill className="w-5 h-5" />
        )}
      </div>
    </div>
  );
};
