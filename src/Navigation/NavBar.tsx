import React, { FC } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NavItem from "./NavItem";

const NavBar: FC = () => {
  return (
    <div className="mb-10 mr-6 flex h-20 flex-row justify-end text-light-text dark:border-dark-gray dark:text-dark-text">
      <NavItem location={"/"}>
        <h2>Table</h2>
      </NavItem>
      <NavItem location={"/practice"}>
        <h2>Home</h2>
      </NavItem>
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
