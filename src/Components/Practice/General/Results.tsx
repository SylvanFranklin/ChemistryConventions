import React, { ReactElement, useState } from "react";
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
    <div className="w-1/2 p-8 mx-auto border-2 rounded-md h-96">
      <GoThreeBars
        onClick={() => setShowingSettings(!showingSettings)}
        className="text-3xl m-[-1rem]"
      />

      {showingSettings ? (
        <PracticeSettings>{props.settings}</PracticeSettings>
      ) : (
        <>
          {showingResults ? (
            <Results
              userInput={userInput}
              correctAnswer={props.correctAnswer}
              setShowingResults={setShowingResults}
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
  return (
    <div className="flex flex-col justify-end h-full">
      <h1 className="mt-3 overflow-x-auto text-xl font-bold text-center">
        Your Answer
      </h1>
      <h1 className="h-20 mt-3 overflow-x-auto text-center text-md bg-standard">
        {props.userInput}
      </h1>

      <h1 className="mt-3 overflow-x-auto text-xl font-bold text-center">
        Correct Answer
      </h1>
      <h1 className="h-20 mt-3 overflow-x-auto text-center text-md bg-standard">
        {addScripts(props.correctAnswer)}
      </h1>

      <button
        onClick={() => {
          props.setShowingResults(false);
          props.newQuestion();
        }}
        className="mx-auto mt-3 button-standard"
      >
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
    <div className="flex flex-col justify-end h-full">
      {props.children}

      <div className="mt-10 mb-10">
        <TextInput
          response={(text: string) => props.HandleSubmit(text)}
        ></TextInput>
      </div>
    </div>
  );
};
