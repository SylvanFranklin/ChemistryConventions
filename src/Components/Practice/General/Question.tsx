import React from "react";
import { TextInput } from "./TextInput";

interface QuestionProps {
  HandleSubmit: Function;
}
export const Question: React.FC<QuestionProps> = (props) => {
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
