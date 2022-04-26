import { FC } from "react";
import { BiSearch } from "react-icons/bi";
import NavItem from "./NavItem";

export const Search: FC = () => {
  return (
    <NavItem>
      <div className="relative mx-3 flex items-center justify-center text-2xl">
        <BiSearch className='m-auto'/>
      </div>
    </NavItem>
  );
};
