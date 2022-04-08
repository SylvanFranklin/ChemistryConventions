import { FunctionComponent } from "react";
import { JsxElement } from "typescript";
import NavBar from "../Navigation/NavBar";

interface DefaultLayoutProps {
  title?: string;
  specialTitle?: JsxElement;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = (props) => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center select-none ">
        <h1 className="title text-center">
          {props.specialTitle ? props.specialTitle : props.title}
        </h1>
        <div className="mt-20">{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
