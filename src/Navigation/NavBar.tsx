import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NavItem from "./NavItem";

const NavBar: FC = () => {
  return (
    <div className="flex flex-row justify-end h-5 pr-10 mb-12 w-100">
      <NavItem location="/" text="Table" />
      <NavItem location="/practice" text="Practice" />
      <DarkModeSwitch />
    </div>
  );
};

export default NavBar;
