import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

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
      className="flex w-20 h-12 mx-1 my-auto transition-all duration-200"
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
