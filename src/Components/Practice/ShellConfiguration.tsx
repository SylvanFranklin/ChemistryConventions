import React, { FunctionComponent } from "react";
import DefaultLayout from "../../Page Layouts/Default";
import { BigElement } from "../Element";
import { TextInput } from "./TextInput";

interface ShellConfigurationProps {
  selection: JSON;
}

const ShellConfiguration: FunctionComponent<ShellConfigurationProps> = () => {



  const handleSubmit = (text: string) => {
    console.log(text);
  };

  return (
    <DefaultLayout title={"Shell Configuration"}>
      <BigElement />
      <TextInput response={handleSubmit} />
    </DefaultLayout>
  );
};

export default ShellConfiguration;
