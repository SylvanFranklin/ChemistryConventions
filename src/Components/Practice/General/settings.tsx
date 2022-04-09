import React, { useState } from "react";

export const PracticeSettings: React.FC = () => {
  const [AnswerWithName, setAnswerWithName] = useState(true);

  return (
    <div className="flex flex-col h-full">
      <div className="mt-10">
        <Setting
          name={"Quiz Names"}
          current={AnswerWithName}
          setter={setAnswerWithName}
        ></Setting>
      </div>
    </div>
  );
};

interface SettingProps {
  name: string;
  current: boolean;
  setter: Function;
}

const Setting: React.FC<SettingProps> = (props) => {
  return (
    <div className="bg-standard p-3">
      <h1> {props.name}</h1>

      <button
        className="button-standard"
        onClick={() => props.setter(!props.current)}
      >
        {String(props.current)}
      </button>
    </div>
  );
};
