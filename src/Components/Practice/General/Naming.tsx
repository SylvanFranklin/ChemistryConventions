import { useState } from "react";
import DefaultLayout from "../../../Page Layouts/Default";
import { addScripts, CheckAnswer } from "./helperFunctions";
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
    return props.newIons();
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
        setNewQuestion={(val: Object) => setIons(val)}
        settings={
          <PracticeSettings>
            <Setting
              name={"Answer With"}
              value={quizFormula ? "Formula" : "Name"}
              setter={() => setQuizFormula(!quizFormula)}
            />
          </PracticeSettings>
        }
        quizName={`Naming ${props.QuizName}`}
        currentQuestion={Ions}
        newQuestionGenerator={() => newQuestion()}
      >
        <div className="mb-16 text-center text-3xl">
          {quizFormula ? props.Name(Ions) : addScripts(props.Formula(Ions))}
        </div>
      </PracticeUI>
    </DefaultLayout>
  );
};
