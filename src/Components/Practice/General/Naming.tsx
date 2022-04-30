import { useState } from "react";
import DefaultLayout from "../../../Page Layouts/Default";
import { addScripts, CheckAnswer } from "./helperFunctions";
import { NewNonDuplicate } from "./NewNonDuplicate";
import { PracticeUI } from "./PracticeUI";
import { PracticeSettings, Setting } from "./settings";

interface NamingProps {
  Formula: Function;
  Name: Function;
  newIons: Function;
  QuizName: string;
  children?: React.ReactNode;
}

export const Naming: React.FC<NamingProps> = (props) => {
  const [Ions, setIons] = useState(props.newIons());

  const [quizFormula, setQuizFormula] = useState(false);

  function newQuestion() {
    setIons(NewNonDuplicate(props.newIons, Ions));
  }

  return (
    <DefaultLayout>
      <PracticeUI
        correctAnswer={quizFormula ? props.Formula(Ions) : props.Name(Ions)}
        checkAnswer={(text: string) =>
          CheckAnswer(
            text,
            quizFormula ? props.Formula(Ions) : props.Name(Ions)
          )
        }
        settings={
          <Setting
            name={"Answer With"}
            value={quizFormula ? "Formula" : "Name"}
            setter={() => setQuizFormula(!quizFormula)}
          />
        }
        quizName={`Naming ${props.QuizName}`}
        newQuestion={newQuestion}
      >
        <div className="mb-16 text-center text-3xl">
          {quizFormula ? props.Name(Ions) : addScripts(props.Formula(Ions))}
        </div>
      </PracticeUI>
    </DefaultLayout>
  );
};
