import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export interface QuizProps {
  name: string;
  path: string;
}
export const Quiz: FunctionComponent<QuizProps> = (props) => {
  let navigator = useNavigate();

  return (
    <div
      onClick={() => navigator(`${props.path}`)}
      className="w-full bg-standard m-2 mx-auto flex select-none flex-row items-center rounded-md transition-all duration-100 ease-in-out hover:brightness-90 dark:hover:brightness-150"
    >
      <h2 className="bg-opacity-5 p-5 text-center text-xl text-light-text dark:text-dark-text">
        {props.name}
      </h2>
    </div>
  );
};
