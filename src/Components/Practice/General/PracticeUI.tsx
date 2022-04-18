import React, { ReactElement, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Question } from "./Question";
import { Results } from "./Results";
import { PracticeSettings } from "./settings";

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


