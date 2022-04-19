import React, { FC } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NavItem from "./NavItem";

const NavBar: FC = () => {
  return (
    <div className="mx-auto mb-10 flex h-16 flex-row justify-end border-b-2 px-4 text-light-text dark:border-dark-gray dark:text-dark-text">
      {/* <NavItem>
        <Search></Search>
      </NavItem> */}
      <NavItem location={"/"}>
        <h1 className="">Table</h1>
      </NavItem>
      <NavItem location={"/practice"}>
        <h1>Practice</h1>
      </NavItem>
      <NavItem>
        <DarkModeSwitch />
      </NavItem>
    </div>
  );
};

export default NavBar;
