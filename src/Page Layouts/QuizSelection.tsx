import React, { FunctionComponent } from "react";
import DefaultLayout from "./Default";
import { Quiz } from "./Quiz";
import { QuizFolder } from "./QuizFolder";

interface QuizzesLayoutProps {}

export const QuizzesLayout: FunctionComponent<QuizzesLayoutProps> = () => {
  return (
    <DefaultLayout title={"Practice"}>
      <div className="mx-auto flex w-1/2 flex-row space-x-5">
        <div className="ml-auto flex w-full flex-col">
          <QuizFolder name={"Naming / Formulas"}>
            <Quiz name="Ionic Compounds" path="naming/ionic" />
            <Quiz name="Covalent Compounds" path="naming/covalent" />
            <Quiz name="Acids" path="naming/acids" />
            <Quiz name="Hydrocarbons" path="naming/hydrocarbons" />
            <Quiz name="Polyatomic Ions" path="naming/polyatomic" />
          </QuizFolder>
          <Quiz name="shell configuration" path="shellconfiguration" />
        </div>
        <div className="mr-auto flex w-full flex-col"></div>
      </div>
    </DefaultLayout>
  );
};

export default QuizzesLayout;
