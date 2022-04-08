import { useState } from "react";
import { CheckAnswer, randInt } from "../General/helperFunctions";
import DefaultLayout from "../../../Page Layouts/Default";
import { PracticeUI } from "../General/Results";

export const HydroCarbonNaming: React.FC = () => {
  const Formula = (carbons: number, type: number) => {
    let hydrogens: number;

    //     ane
    if (type === 1) {
      hydrogens = carbons * 2 + 2;

      //     ene
    } else if (type === 2) {
      hydrogens = carbons * 2;

      //     yne
    } else {
      hydrogens = carbons * 2 - 2;
    }

    return `C_${carbons}H_${hydrogens}`;
  };

  const Name = (carbons: number, type: number) => {
    const prefixes = [
      "meth",
      "eth",
      "prop",
      "but",
      "pent",
      "hex",
      "hept",
      "oct",
      "non",
      "dec",
    ];

    let ending: string;

    if (type === 1) {
      ending = "ane";
    } else if (type === 2) {
      ending = "ene";
    } else {
      ending = "yne";
    }

    return prefixes[carbons - 1] + ending;
  };

  const [Carbons, setCarbons] = useState(randInt(1, 10));
  const [Type, setType] = useState(randInt(1, 3));

  return (
    <DefaultLayout>
      <PracticeUI
        correctAnswer={Formula(Carbons, Type)}
        checkAnswer={(text: string) =>
          CheckAnswer(text, Formula(Carbons, Type))
        }
        newQuestion={() => {
          setCarbons(randInt(1, 10));
          setType(randInt(1, 4));
        }}
      >
        <h1 className="text-center text-3xl mb-16">{Name(Carbons, Type)}</h1>
      </PracticeUI>
    </DefaultLayout>
  );
};
