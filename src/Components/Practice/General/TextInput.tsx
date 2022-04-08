import React, { useState } from "react";
import { FC } from "react";

interface TextInputProps {
  response: Function;
}

export const TextInput: FC<TextInputProps> = (props) => {
  const [formValue, setFormValue] = useState("");

  return (
    <form
      className="w-3/4 max-w-sm mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        props.response(formValue);
        setFormValue("");
      }}
    >
      <div className="flex items-center py-2 border-b border-slate-500">
        <input
          className="w-full px-2 mt-2 mr-3 leading-tight bg-transparent border-none appearance-none text-30 dark:text-60 focus:outline-none"
          type="text"
          autoFocus
          value={formValue}
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
        />
        <button className="button-standard" type="submit">
          Enter
        </button>
      </div>
    </form>
  );
};
