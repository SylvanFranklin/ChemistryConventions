import { FC, useEffect } from "react";
import { BiCommand } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import NavItem from "./NavItem";

interface SearchProps {
  setIsOpen: Function;
}

export const Search: FC<SearchProps> = (props) => {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey))
        props.setIsOpen((value: Boolean) => !value);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <NavItem action={() => props.setIsOpen(true)}>
      <div className="text-standard flex flex-row">
        <BiSearch className="my-auto text-md" />
        {/* <h1 className="my-auto mx-1">search</h1> */}
        <div className="ml-1 flex flex-row rounded-md border-2 px-1 text-sm text-gray-600 border-gray-600">
          <BiCommand className="my-auto" />
          <h1 className="my-auto ml-1">K</h1>
        </div>
      </div>
    </NavItem>
  );
};
