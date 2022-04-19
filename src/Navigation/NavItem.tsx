import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  location?: string;
}

const NavItem: FunctionComponent<NavItemProps> = (props) => {
  let navigate = useNavigate();

  return (
    <div
      className="my-auto flex h-12 border-l-2 px-3 dark:border-dark-gray"
      onClick={() => {
        if (props.location) {
          navigate(props.location);
        }
      }}
    >
      <div className="mx-auto my-auto select-none text-center text-lg">
        {props.children}
      </div>
    </div>
  );
};

export default NavItem;
