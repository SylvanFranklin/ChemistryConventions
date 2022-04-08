import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NavItem from "./NavItem";
import { Search } from "./SearchSwitch";
import React from "react";

const NavBar: FC = () => {
  return (
    <div className="flex flex-row h-16 justify-end border-b px-4 mx-auto mb-10">
      {/* <NavItem>
        <Search></Search>
      </NavItem> */}
      <NavItem location={"/"}>
        <h1 className="bg-gradient-to-r from-[#b56576] to-[#e56b6f] py-2 px-4 rounded-md text-white">
          Table
        </h1>
      </NavItem>
      <NavItem location={"/practice"}>
        <h1>Practice</h1>
      </NavItem>
      {/* <NavItem>
        <DarkModeSwitch />
      </NavItem> */}
    </div>
  );
};

export default NavBar;
