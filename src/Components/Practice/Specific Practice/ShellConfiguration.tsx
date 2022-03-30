import React, { FunctionComponent } from "react";
import DefaultLayout from "../../../Page Layouts/Default";
import { BigElement } from "../../Element";
import { randomElement } from "../General/helperFunctions";
import { TextInput } from "../General/TextInput";
import elementJSON from "../../../Elemental Json/table.json";

const ShellConfiguration: FunctionComponent = (props) => {



  const handleSubmit = (text: string) => {
    console.log(text);
  };

  return (
    <DefaultLayout title={"Shell Configuration"}>
      <BigElement {...randomElement(elementJSON)} />
      <TextInput response={handleSubmit} />
    </DefaultLayout>
  );
};

export default ShellConfiguration;
