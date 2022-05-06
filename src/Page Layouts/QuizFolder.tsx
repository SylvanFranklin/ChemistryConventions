import React, { ReactNode, useState } from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";

export interface QuizFolderProps {
  name: string;
  children: ReactNode;
}

export const QuizFolder: React.FC<QuizFolderProps> = (props) => {
  const [folderOpen, setFolderOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setFolderOpen(!folderOpen);
        }}
        className="bg-standard m-2 mx-auto flex w-full select-none flex-row items-center rounded-md transition-all duration-100 ease-in-out hover:brightness-90 dark:hover:brightness-150"
      >
        <div className="flex flex-row bg-opacity-5 p-5 text-center text-xl text-light-text dark:text-dark-text ">
          <div className="my-auto mr-4">
            {folderOpen ? (
              <BiDownArrow className="my-auto" />
            ) : (
              <BiRightArrow className="my-auto" />
            )}
          </div>
          {props.name}
        </div>
      </div>
      {folderOpen && <div className="ml-auto w-4/5">{props.children}</div>}
    </>
  );
};
