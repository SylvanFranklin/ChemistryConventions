import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { JsxElement } from "typescript";

interface NavItemProps {
  location?: string;
}

interface EmptyNavItemProps {}

export const EmptyNavItem: React.FC<EmptyNavItemProps> = (props) => {
  return <div></div>;
};

const NavItem: FunctionComponent<NavItemProps> = (props) => {
  let navigate = useNavigate();

  return (
    <div
      className="flex w-20 h-12 mx-1 transition-all duration-200 my-auto hover:text-light-10"
      onClick={() => {
        if (props.location) {
          navigate(props.location);
        }
      }}
    >
      <div className="mx-auto my-auto text-lg text-center select-none dark:text-60 text-30 hover:text-10">
        {props.children}
      </div>
    </div>
  );
};

export default NavItem;
