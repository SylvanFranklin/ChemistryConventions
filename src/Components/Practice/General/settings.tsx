import React, { ReactNode } from "react";

interface SettingProps {
  name: string;
  value: string;
  setter: Function;
  description?: string;
}

export const Setting: React.FC<SettingProps> = (props) => {
  return (
    <div
      className="bg-standard m-4 flex flex-row rounded-lg p-3"
      onClick={() => props.setter()}
    >
      <h1 className="my-auto">{props.name}</h1>
      <div className="mx-auto"></div>
      <button className="button-standard">{props.value}</button>
    </div>
  );
};

interface PracticeSettingsProps {
  children: ReactNode;
}

export const PracticeSettings: React.FC<PracticeSettingsProps> = (props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="mt-10">{props.children}</div>
    </div>
  );
};
