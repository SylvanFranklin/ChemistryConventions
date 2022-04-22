import React, { FunctionComponent } from "react";
import DefaultLayout from "./Default";
import { Quiz } from "./Quiz";
import { QuizFolder } from "./QuizFolder";

interface QuizzesLayoutProps {}

export const QuizzesLayout: FunctionComponent<QuizzesLayoutProps> = () => {
  return (
    <DefaultLayout title={"Practice"}>
      <div className="mx-auto w-2/5">
        <QuizFolder
          name={"Naming"}
          content={[
            { name: "Ionic Compounds", path: "ionic" },
            { name: "Covalent Compounds", path: "covalent" },
            { name: "Acids", path: "acids" },
            { name: "Hydrocarbons", path: "hydrocarbons" },
            { name: "Polyatomic Ions", path: "polyatomic" },
          ]}
        ></QuizFolder>
        <Quiz name="shell configuration" path="shellconfiguration" />
      </div>
    </DefaultLayout>
  );
};

export default QuizzesLayout;
