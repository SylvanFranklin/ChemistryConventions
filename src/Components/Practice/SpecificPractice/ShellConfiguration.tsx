import React, { FunctionComponent, useState } from "react";
import elementJSON from "../../../ElementalJson/goodElements.json";
import DefaultLayout from "../../../Page Layouts/Default";
import { BigElement } from "../../Table/BigElement";
import { CheckAnswer, randomElement } from "../General/helperFunctions";
import { PracticeUI } from "../General/PracticeUI";
import { PracticeSettings, Setting } from "../General/settings";

interface ConfigurationProps {
  semantic: boolean;
}

const ShellConfiguration: FunctionComponent<ConfigurationProps> = (props) => {
  const [semantic, setSemantic] = useState(props.semantic);

  const [currentElement, setCurrentElement] = useState({
    ...randomElement(elementJSON),
  });

  return (
    <DefaultLayout>
      <PracticeUI
        correctAnswer={
          semantic
            ? currentElement.electron_configuration_semantic
            : currentElement.electron_configuration
        }
        checkAnswer={(text: string) =>
          CheckAnswer(
            text,
            semantic
              ? currentElement.electron_configuration_semantic
              : currentElement.electron_configuration
          )
        }
        newQuestion={() => setCurrentElement(randomElement(elementJSON))}
        settings={
          <PracticeSettings>
            <Setting
              name={"question type"}
              value={semantic ? "Semantic" : "normal"}
              setter={() => setSemantic(!semantic)}
            />
          </PracticeSettings>
        }
        quizName={
          semantic ? "Semantic Shell Configuration" : "Shell Configuration"
        }
      >
        <div className="mx-auto">
          <BigElement {...currentElement} />
        </div>
      </PracticeUI>
    </DefaultLayout>
  );
};

export default ShellConfiguration;
