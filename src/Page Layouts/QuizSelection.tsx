import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "./Default";
import React from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";

interface QuizzesLayoutProps {}

export const QuizzesLayout: FunctionComponent<QuizzesLayoutProps> = () => {
  return (
    <DefaultLayout title={"Practice"}>
      <div className="w-2/5 mx-auto">
        <QuizFolder name={"Naming"}>
          <Quiz name="Naming Ionic Compounds" path="naming/ionic" />
          <Quiz name="Naming Covalent Compounds" path="naming/covalent" />
          <Quiz name="Naming hydrocarbons" path="naming/hydrocarbons" />
        </QuizFolder>

        <Quiz name="shell configuration" path="shellconfiguration" />
        <Quiz
          name="shell configuration semantic"
          path="shellconfiguration/semantic"
        />
      </div>
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
      className="flex flex-row items-center m-2 mx-auto transition-all duration-100 ease-in-out rounded-md select-none bg-standard hover:bg-opacity-50"
    >
      <h1 className="p-5 text-xl text-center text-light-text dark:text-dark-text bg-opacity-5">
        {props.name}
      </h1>
    </div>
  );
};

interface QuizFolderProps {
  name: string;
}

const QuizFolder: React.FC<QuizFolderProps> = (props) => {
  const [folderOpen, setFolderOpen] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setFolderOpen(!folderOpen)}
        className="flex flex-row items-center m-2 mx-auto transition-all duration-100 ease-in-out rounded-r-md select-none bg-standard hover:bg-opacity-50"
      >
        <div className="p-5 text-xl flex flex-row text-center text-light-text dark:text-dark-text bg-opacity-5">
          <div className="my-auto mr-4">
            {folderOpen ? (
              <BiDownArrow className="my-auto" />
            ) : (
              <BiRightArrow className="my-auto" />
            )}
          </div>
          {props.name}
        </div>
      </div>

      {folderOpen ? <div className="pl-10">{props.children}</div> : null}
    </div>
  );
};

export default QuizzesLayout;
