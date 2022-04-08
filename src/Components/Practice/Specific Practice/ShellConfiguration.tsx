import React, { FunctionComponent } from "react";
import DefaultLayout from "../../../Page Layouts/Default";
import { BigElement } from "../../Element";
import { CheckAnswer, randomElement } from "../General/helperFunctions";
import elementJSON from "../../../Elemental Json/goodElements.json";
import { useState } from "react";
import { PracticeUI } from "../General/Results";

interface ShellConfigurationProps {
  semantic: boolean;
}

const ShellConfiguration: FunctionComponent<ShellConfigurationProps> = (
  props
) => {
  const [currentElement, setCurrentElement] = useState({
    ...randomElement(elementJSON),
  });

  return (
    <DefaultLayout>
      <PracticeUI
        correctAnswer={
          props.semantic
            ? currentElement.electron_configuration_semantic
            : currentElement.electron_configuration
        }
        checkAnswer={(text: string) =>
          CheckAnswer(
            text,
            props.semantic
              ? currentElement.electron_configuration_semantic
              : currentElement.electron_configuration
          )
        }
        newQuestion={() => setCurrentElement(randomElement(elementJSON))}
      >
        <BigElement {...currentElement} />
      </PracticeUI>
    </DefaultLayout>
  );
};

export default ShellConfiguration;
