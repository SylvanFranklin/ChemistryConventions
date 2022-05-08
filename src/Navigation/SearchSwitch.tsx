import { FC, useEffect } from "react";
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
      <div className="relative mx-3 flex items-center justify-center text-2xl">
        <BiSearch className="m-auto" />
      </div>
    </NavItem>
  );
};

