import React, { useState } from "react";
import { FC } from "react";

interface TextInputProps {
  response: Function;
}

export const TextInput: FC<TextInputProps> = (props) => {
  const [formValue, setFormValue] = useState("");

  return (
    <form
      className="mx-auto w-3/4 max-w-sm"
      onSubmit={(e) => {
        e.preventDefault();
        props.response(formValue);
        setFormValue("");
      }}
    >
      <div className="flex items-center border-b border-slate-500 py-2">
        <input
          className="text-30 dark:text-60 mt-2 mr-3 w-full appearance-none border-none bg-transparent px-2 leading-tight focus:outline-none"
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
