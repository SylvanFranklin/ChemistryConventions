import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "./Default";
import React from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";

interface QuizzesLayoutProps {}

export const QuizzesLayout: FunctionComponent<QuizzesLayoutProps> = () => {
  return (
    <DefaultLayout title={"Practice"}>
      <div className="mx-auto w-2/5">
        <QuizFolder name={"Naming"}>
          <Quiz name="Ionic Compounds" path="naming/ionic" />
          <Quiz name="Covalent Compounds" path="naming/covalent" />
          <Quiz name="hydrocarbons" path="naming/hydrocarbons" />
          <Quiz name="Polyatomic Ions" path="naming/polyatomicions" />
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
      className="bg-standard m-2 mx-auto flex select-none flex-row items-center rounded-md transition-all duration-100 ease-in-out hover:brightness-90 dark:hover:brightness-150"
    >
      <h1 className="bg-opacity-5 p-5 text-center text-xl text-light-text dark:text-dark-text">
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
        className="bg-standard m-2 mx-auto flex select-none flex-row items-center rounded-md transition-all duration-100 ease-in-out hover:brightness-90 dark:hover:brightness-150"
      >
        <div className="flex flex-row bg-opacity-5 p-5 text-center text-xl text-light-text dark:text-dark-text">
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
