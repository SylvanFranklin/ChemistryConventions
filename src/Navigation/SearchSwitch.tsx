import { FC } from "react";
import { BiSearch } from "react-icons/bi";
import NavItem from "./NavItem";

interface SearchProps {
  setIsOpen: Function;
}

export const Search: FC<SearchProps> = (props) => {
  return (
    <NavItem action={() => props.setIsOpen(true)}>
      <div className="relative mx-3 flex items-center justify-center text-2xl">
        <BiSearch className="m-auto" />
      </div>
    </NavItem>
  );
};
