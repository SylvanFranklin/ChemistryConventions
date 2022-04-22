import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  title?: string;
  location?: string;
}

const NavItem: FunctionComponent<NavItemProps> = (props) => {
  let navigate = useNavigate();

  return (
    <button
      className="my-auto flex h-12 w-24 border-l-2 px-3 dark:border-dark-gray"
      onClick={() => {
        if (props.location) {
          navigate(props.location);
        }
      }}
    >
      <div className="w-18 mx-auto my-auto select-none text-center text-lg">
        {props.title}
      </div>
    </button>
  );
};

export default NavItem;
