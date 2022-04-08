import { useState } from "react";
import { ElementProps } from "../../Element";
import {
  charge,
  ide,
  gcd,
  randomElement,
  CheckAnswer,
} from "../General/helperFunctions";
import nonmetals from "../../../Elemental Json/nonmetals.json";
import DefaultLayout from "../../../Page Layouts/Default";
import { PracticeUI } from "../General/Results";

export const CovalentNaming: React.FC = () => {
  const [ions, setIons] = useState({
    nonmetal1: randomElement(nonmetals),
    nonmetal2: randomElement(nonmetals),
  });

  const Name = (nonmetal1: ElementProps, nonmetal2: ElementProps) => {
    function isVowel(x: string) {
      var result;

      result = x === "A" || x === "E" || x === "I" || x === "O" || x === "U";
      return result;
    }

    const prefixes = [
      "",
      "mono",
      "di",
      "tri",
      "tetra",
      "penta",
      "hexa",
      "hepta",
      "octa",
      "nona",
      "deca",
    ];
    //abs
    let pref1: number = Math.abs(charge(nonmetal1));
    let pref2: number = Math.abs(charge(nonmetal2));

    pref1 /= gcd(pref1, pref2);
    pref2 /= gcd(pref1, pref2);

    let modifiedpre1: string = prefixes[pref1];
    let modifiedpre2: string = prefixes[pref2];

    if (modifiedpre1 === modifiedpre2) {
      modifiedpre1 = "";
      modifiedpre2 = "";
    } else if (isVowel(nonmetal1.name[0])) {
      modifiedpre1 = modifiedpre1.slice(0, -1);
    } else if (isVowel(nonmetal2.name[0])) {
      modifiedpre2 = modifiedpre2.slice(0, -1);
    }

    return `${modifiedpre1}${nonmetal1.name.toLowerCase()} ${modifiedpre2}${ide(
      nonmetal2.name.toLowerCase()
    )}`;
  };

  const Formula = (nonmetal1: ElementProps, nonmetal2: ElementProps) => {
    let metalCharge: number = Math.abs(charge(nonmetal1));
    let nonmetalCharge: number = Math.abs(charge(nonmetal2));

    metalCharge /= gcd(metalCharge, nonmetalCharge);
    nonmetalCharge /= gcd(metalCharge, nonmetalCharge);

    const subMetalCharge = metalCharge !== 1 ? metalCharge : "";
    const subNonmetalCharge = nonmetalCharge !== 1 ? nonmetalCharge : "";

    return `${nonmetal1.symbol}_${subMetalCharge}${nonmetal2.symbol}_${subNonmetalCharge}`;
  };

  return (
    <DefaultLayout>
      <PracticeUI
        correctAnswer={Formula(ions.nonmetal1, ions.nonmetal2)}
        checkAnswer={(text: string) =>
          CheckAnswer(text, Formula(ions.nonmetal1, ions.nonmetal2))
        }
        newQuestion={() =>
          setIons({
            nonmetal1: randomElement(nonmetals),
            nonmetal2: randomElement(nonmetals),
          })
        }
      >
        <h1 className="text-center text-3xl mb-16">
          {Name(ions.nonmetal1, ions.nonmetal2)}
        </h1>
      </PracticeUI>
    </DefaultLayout>
  );
};
