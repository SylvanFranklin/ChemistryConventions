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
      <div className="relative flex items-center justify-center w-20 h-12">
        {darkMode ? (
          <BsFillSunFill className="m-auto" />
        ) : (
          <BsFillMoonFill className="m-auto" />
        )}
      </div>
    </div>
  );
};
