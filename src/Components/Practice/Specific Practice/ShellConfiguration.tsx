import React, { FunctionComponent, useState } from "react";
import elementJSON from "../../../Elemental Json/goodElements.json";
import DefaultLayout from "../../../Page Layouts/Default";
import { BigElement } from "../../Table/BigElement";
import { CheckAnswer, randomElement } from "../General/helperFunctions";
import { PracticeUI } from "../General/Results";
import { Setting } from "../General/settings";

interface ConfigurationProps {
  semantic: boolean;
}

const ShellConfiguration: FunctionComponent<ConfigurationProps> = (props) => {
  const [currentElement, setCurrentElement] = useState({
    ...randomElement(elementJSON),
  });

  const [AnswerWithFormula, setAnswerWithFormula] = useState(true);

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
        settings={
          <Setting
            name={"Answer with:"}
            value={AnswerWithFormula ? "Formula" : "Element"}
            setter={() => setAnswerWithFormula(!AnswerWithFormula)}
          />
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
