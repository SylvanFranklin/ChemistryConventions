import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import { Quiz, QuizProps } from "./Quiz";

export interface QuizFolderProps {
  content: QuizProps[];
  name: string;
}

export const QuizFolder: React.FC<QuizFolderProps> = (props) => {
  const [folderOpen, setFolderOpen] = useState(false);

  return (
    <div className="">
      <motion.div
        onClick={() => {
          setFolderOpen(!folderOpen);
        }}
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
      </motion.div>

      {folderOpen ? (
        <div className="pl-10">
          {props.content.map((quiz) => (
            <Quiz
              name={quiz.name}
              path={`${props.name.toLowerCase()}/${quiz.path}`}
              key={quiz.name}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
