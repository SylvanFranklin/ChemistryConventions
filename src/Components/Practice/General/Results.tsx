import React, { ReactElement, useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { addScripts } from "./helperFunctions";
import { PracticeSettings } from "./settings";
import { TextInput } from "./TextInput";

interface PracticeUIProps {
  correctAnswer: string;
  checkAnswer: Function;
  newQuestion: Function;
  settings: ReactElement;
}
export const PracticeUI: React.FC<PracticeUIProps> = (props) => {
  // const [correctStreak, setCorrectStreak] = useState(0);
  const [showingResults, setShowingResults] = useState(false);
  const [showingSettings, setShowingSettings] = useState(false);
  const [userInput, setUserInput] = useState("");

  const toggleResults = () => {
    setShowingResults(false);
  };

  const newQuestion = () => {
    props.newQuestion();
  };

  const HandleSubmit = (text: string) => {
    if (!props.checkAnswer(text)) {
      // setCorrectStreak(0);
      setShowingResults(true);
      setUserInput(text);
    } else {
      // setCorrectStreak(correctStreak + 1);
      props.newQuestion();
    }
  };

  return (
    <div className="mx-auto h-96 w-1/2 rounded-md border-2 p-8 text-light-text dark:text-dark-text">
      <GoThreeBars
        onClick={() => setShowingSettings(!showingSettings)}
        className="m-[-1rem] text-3xl"
      />

      {showingSettings ? (
        <PracticeSettings>{props.settings}</PracticeSettings>
      ) : (
        <>
          {showingResults ? (
            <Results
              userInput={userInput}
              correctAnswer={props.correctAnswer}
              setShowingResults={toggleResults}
              newQuestion={newQuestion}
            />
          ) : (
            <Question HandleSubmit={HandleSubmit}>{props.children}</Question>
          )}
        </>
      )}
    </div>
  );
};

interface ResultsProps {
  userInput: string;
  correctAnswer: string;
  setShowingResults: Function;
  newQuestion: Function;
}
const Results: React.FC<ResultsProps> = (props) => {
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
        Your Answer
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

interface QuestionProps {
  HandleSubmit: Function;
}

const Question: React.FC<QuestionProps> = (props) => {
  return (
    <div className="flex h-full flex-col justify-end">
      {props.children}

      <div className="mt-10 mb-10">
        <TextInput
          response={(text: string) => props.HandleSubmit(text)}
        ></TextInput>
      </div>
    </div>
  );
};
