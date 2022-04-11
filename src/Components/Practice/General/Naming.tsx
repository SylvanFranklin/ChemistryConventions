import { useState } from "react";
import DefaultLayout from "../../../Page Layouts/Default";
import { CheckAnswer } from "../General/helperFunctions";
import { PracticeUI } from "../General/Results";

interface NamingProps {
  Formula: Function;
  Name: Function;
  newIons: Function;
}

export const Naming: React.FC<NamingProps> = (props) => {
  const [Ions, setIons] = useState(props.newIons());

  return (
    <DefaultLayout>
      <PracticeUI
        correctAnswer={props.Formula(Ions)}
        checkAnswer={(text: string) => CheckAnswer(text, props.Formula(Ions))}
        newQuestion={() => setIons(props.newIons)}
        settings={null}
      >
        <h1 className="mb-16 text-3xl text-center">{props.Name(Ions)}</h1>
      </PracticeUI>
    </DefaultLayout>
  );
};
