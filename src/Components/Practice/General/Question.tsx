import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { TextInput } from "./TextInput";

interface QuestionProps {
  children?: ReactNode;
  HandleSubmit: Function;
}
export const Question: React.FC<QuestionProps> = (props) => {
  return (
    <motion.div
      className="flex h-full flex-col justify-end"
      animate={{ border: "#6b8772" }}
    >
      {props.children}
      <div className="mt-10 mb-10">
        <TextInput
          response={(text: string) => props.HandleSubmit(text)}
        ></TextInput>
      </div>
    </motion.div>
  );
};
