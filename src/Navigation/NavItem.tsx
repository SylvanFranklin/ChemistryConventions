import React, { FunctionComponent, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  action?: Function;
  location?: string;
  children?: ReactNode;
}

const NavItem: FunctionComponent<NavItemProps> = (props) => {
  let navigate = useNavigate();

  return (
    <button
      className={`my-auto flex h-12 place-self-start rounded-xl px-4 transition-all duration-100 ease-in-out hover:bg-light-gray dark:hover:bg-dark-gray`}
      onClick={() => {
        if (props.location) {
          navigate(props.location);
        } else if (props.action) {
          props.action();
        }
      }}
    >
      <div className="my-auto flex select-none flex-row justify-center text-xl">
        {props.children}
      </div>
    </button>
  );
};

export default NavItem;
