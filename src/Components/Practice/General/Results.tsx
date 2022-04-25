import React, { useEffect } from "react";
import { addScripts } from "./helperFunctions";

interface ResultsProps {
  userInput: string;
  correctAnswer: string;
  setShowingResults: Function;
  newQuestion: Function;
}
export const Results: React.FC<ResultsProps> = (props) => {
  const Okay = () => {
    props.setShowingResults();
    props.newQuestion();
    return;
  };

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      e.preventDefault();
      if (e.key === "Enter") {
        Okay();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="flex h-full flex-col justify-end">
      <h1 className="mt-3 overflow-x-auto text-center text-xl font-bold">
        Your Answer {props.userInput ? "(incorrect)" : "(blank)"}
      </h1>
      <div className="text-md bg-standard mt-3 h-20 overflow-x-auto text-center">
        {props.userInput}
      </div>

      <h1 className="mt-3 overflow-x-auto text-center text-xl font-bold">
        Correct Answer
      </h1>
      <div className="text-md bg-standard mt-3 h-20 overflow-x-auto text-center">
        {addScripts(props.correctAnswer)}
      </div>

      <button onClick={Okay} className="button-standard mx-auto mt-3">
        Okay
      </button>
    </div>
  );
};
