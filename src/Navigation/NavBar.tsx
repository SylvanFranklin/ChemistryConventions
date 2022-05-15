import React, { FC, useState } from "react";
import { CommandPalette } from "./CommandPalette";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NavItem from "./NavItem";
import { Search } from "./SearchSwitch";
import { TableButton } from "./TableButton";
import { HiHome } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-40 mb-10 flex h-20 flex-row justify-end text-light-text dark:border-dark-gray dark:text-dark-text">
      <CommandPalette isOpen={isOpen} setIsOpen={setIsOpen} />
      <TableButton />
      <NavItem location={"/practice"}>
        <h2>Practice</h2>
      </NavItem>
      <div className="w-full"></div>
      <NavItem location={"/"}>
        <HiHome />
      </NavItem>

      <DarkModeSwitch />
      <NavItem location="/profile">
        <BsPersonFill/>
      </NavItem>

      <Search setIsOpen={setIsOpen} />
    </div>
  );
};

export default NavBar;
