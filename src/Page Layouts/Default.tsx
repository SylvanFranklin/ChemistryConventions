import React, { FunctionComponent } from "react";
import NavBar from "../Navigation/NavBar";

interface DefaultLayoutProps {
  title?: string;
  specialTitle?: React.ReactNode;
  children?: React.ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = (props) => {
  return (
    <div >
      <NavBar />
      <div className="flex h-max select-none flex-col justify-center">
        <h1 className="title text-center">
          {props.specialTitle ? props.specialTitle : props.title}
        </h1>
        <div className="mt-20">{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
