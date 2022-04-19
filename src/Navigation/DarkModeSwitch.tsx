import React, { FC, useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { darkModeContext } from "../App";

export const DarkModeSwitch: FC = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);

  return (
    <div
      className="flex"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      <div className="relative mx-3 flex items-center justify-center text-2xl">
        {darkMode ? (
          <BsFillSunFill className="mx-auto" />
        ) : (
          <BsFillMoonFill className="mx-auto" />
        )}
      </div>
    </div>
  );
};
