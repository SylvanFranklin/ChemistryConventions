import React, { useState } from "react";

interface SettingProps {
  name: string;
  value: string;
  setter: Function;
  description?: string;
}

export const Setting: React.FC<SettingProps> = (props) => {
  return (
    <div className=''>
      <h1>{props.name}</h1>
      <button className="button-standard" onClick={() => props.setter()}>{props.value}</button>
    </div>
  );
};

interface PracticeSettingsProps {}

export const PracticeSettings: React.FC<PracticeSettingsProps> = (props) => {
  return (
    <div className="flex flex-col h-full">
      <div className="mt-10">{props.children}</div>
    </div>
  );
};
