import React from "react";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  location?: string;
}

const NavItem: FunctionComponent<NavItemProps> = (props) => {
  let navigate = useNavigate();

  return (
    <div
      className="flex h-12 px-3 my-auto border-l-2 border-opacity-80"
      onClick={() => {
        if (props.location) {
          navigate(props.location);
        }
      }}
    >
      <div className="mx-auto my-auto text-lg text-center select-none">
        {props.children}
      </div>
    </div>
  );
};

export default NavItem;
