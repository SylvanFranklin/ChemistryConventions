import { FunctionComponent } from "react";
import NavBar from "../Navigation/NavBar";

interface DefaultLayoutProps {
  title: string;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = (props) => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center select-none">
        <h1 className="text-5xl text-center text-black dark:text-60">
          {props.title}
        </h1>
        <div className="mt-20">{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
