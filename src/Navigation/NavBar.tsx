import React, { FC } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NavItem from "./NavItem";
import { TableButton } from "./TableButton";

const NavBar: FC = () => {
  return (
    <div className="mx-40 mb-10 flex h-20 flex-row justify-end text-light-text dark:border-dark-gray dark:text-dark-text">
      <TableButton />
      <div className="w-full"></div>
      <NavItem location={"/practice"}>
        <h2>Practice</h2>
      </NavItem>
      <DarkModeSwitch />
    </div>
  );
};

export default NavBar;
