import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  text: string;
  location: string;
}

const NavItem: FunctionComponent<NavItemProps> = (props) => {
  let navigate = useNavigate();

  return (
    <div
      className="flex w-20 h-16 transition-all duration-500"
      onClick={() => navigate(props.location)}
    >
      <h1 className="mx-auto my-auto text-lg text-center dark:text-60 text-30 select-none hover:text-10">
        {props.text}
      </h1>
    </div>
  );
};

export default NavItem;
