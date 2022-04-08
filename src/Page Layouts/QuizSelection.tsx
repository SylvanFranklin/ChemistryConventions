import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "./Default";
import React from "react";

interface QuizzesLayoutProps {}

export const QuizzesLayout: FunctionComponent<QuizzesLayoutProps> = () => {
  return (
    <DefaultLayout title={"Practice"}>
      <Quiz name="shell configuration" path="shellconfiguration" />
      <Quiz
        name="shell configuration semantic"
        path="shellconfiguration/semantic"
      />
      <Quiz name="Naming Ionic Compounds" path="naming/ionic" />
      <Quiz name="Naming Covalent Compounds" path="naming/covalent" />
      <Quiz name="Naming hydrocarbons" path="naming/hydrocarbons" />
    </DefaultLayout>
  );
};

interface QuizProps {
  name: string;
  path: string;
}

const Quiz: FunctionComponent<QuizProps> = (props) => {
  let navigator = useNavigate();

  return (
    <div
      onClick={() => navigator(props.path)}
      className="flex flex-row items-center w-1/3 m-2 mx-auto transition-all duration-200 ease-in-out rounded-md select-none bg-30 bg-standard hover:bg-opacity-50"
    >
      <h1 className="p-5 text-xl text-center text-light-text dark:text-dark-text bg-opacity-5">
        {props.name}
      </h1>
    </div>
  );
};

export default QuizzesLayout;
