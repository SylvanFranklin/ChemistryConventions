import React, { FC } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NavItem from "./NavItem";
import { AiOutlineTable } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
  return (
    <div className="mx-14 mb-10 flex h-20 flex-row justify-end text-light-text dark:border-dark-gray dark:text-dark-text">
      <Link
        className="my-auto flex h-12 flex-row rounded-xl bg-gradient-to-r from-[#6d597a] to-[#e56b6f] px-4 text-dark-text hover:flex-row-reverse transition-all duration-200 ease-in delay-75 animate-pulse"
        to={"/"}
      >
        <h2 className="m-2 my-auto">Table</h2>
        <AiOutlineTable className="my-auto text-3xl" />
      </Link>
      <div className="w-full"></div>
      <NavItem location={"/practice"}>
        <h2>Practice</h2>
      </NavItem>
      <NavItem>
        <DarkModeSwitch />
      </NavItem>
    </div>
  );
};

export default NavBar;
