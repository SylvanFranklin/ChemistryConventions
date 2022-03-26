import React, { useState } from "react";
import { FC } from "react";

interface TextInputProps {
  response: Function;
}



export const TextInput: FC<TextInputProps> = (props) => {
  const [formValue, setFormValue] = useState("");

  return (
    <form
      className="w-1/2 max-w-sm mx-auto mt-14"
      onSubmit={(e) => {
        e.preventDefault();
        props.response(formValue);
        setFormValue("");
      }}
    >
      <div className="flex items-center py-2 border-b border-slate-500">
        <input
          className="w-full px-2 mr-3 mt-2 leading-tight text-gray-300 bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          autoFocus
          value={formValue}
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
        />
        <button
          className="select-none flex-shrink-0 px-2 py-1 text-lg text-30 dark:text-60 rounded bg-opacity-5 bg-slate-700 hover:bg-10 "
          type="submit"
        >
          Enter
        </button>
      </div>
    </form>
  );
};
