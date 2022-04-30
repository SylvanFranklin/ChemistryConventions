import { motion, useAnimation } from "framer-motion";
import React, { ReactElement, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Question } from "./Question";
import { Results } from "./Results";
import { PracticeSettings } from "./settings";

interface PracticeUIProps {
  quizName: string;
  correctAnswer: string;
  checkAnswer: Function;
  newQuestion: Function;
  settings: ReactElement;
  children?: React.ReactNode;
}
export const PracticeUI: React.FC<PracticeUIProps> = (props) => {
  // const [correctStreak, setCorrectStreak] = useState(0);
  const [showingResults, setShowingResults] = useState(false);
  const [showingSettings, setShowingSettings] = useState(false);
  const [userInput, setUserInput] = useState("");

  const correctAnimation = useAnimation();

  const toggleResults = () => {
    setShowingResults(false);
  };

  function newQuestion() {
    props.newQuestion();
  }

  const HandleSubmit = (text: string) => {
    if (!props.checkAnswer(text)) {
      // setCorrectStreak(0);
      setShowingResults(true);
      setUserInput(text);
    } else {
      // setCorrectStreak(correctStreak + 1);
      correctAnimation.start((correct) => ({
        borderColor: ["#719c70", "#d8dee9"],
        transition: { duration: 2.5, ease: "easeInOut" },
      }));

      newQuestion();
    }
  };

  return (
    <motion.div
      className="border-standard mx-auto h-96 w-1/2 rounded-md p-8 text-light-text dark:text-dark-text"
      animate={correctAnimation}
    >
      <TopBar
        setShowingSettings={setShowingSettings}
        showingSettings={showingSettings}
        quizName={props.quizName}
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
    </motion.div>
  );
};

interface TopBarProps {
  quizName: string;
  setShowingSettings: Function;
  showingSettings: Boolean;
}

const TopBar: React.FC<TopBarProps> = (props) => {
  return (
    <div className="-mt-2 flex w-full flex-row">
      <GoThreeBars
        onClick={() => props.setShowingSettings(!props.showingSettings)}
        className="text-3xl"
      />

      <h1 className="text-standard my-auto ml-auto text-right">
        {props.quizName}
      </h1>
    </div>
  );
};
