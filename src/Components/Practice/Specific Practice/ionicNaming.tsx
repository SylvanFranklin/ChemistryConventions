import { useState } from "react";
import { ElementProps } from "../../Element";
import {
  charge,
  romanize,
  ide,
  gcd,
  randomElement,
} from "../General/helperFunctions";
import metals from "../../../Elemental Json/metals.json";
import nonmetals from "../../../Elemental Json/nonmetals.json";
import DefaultLayout from "../../../Page Layouts/Default";
import { TextInput } from "../General/TextInput";
import { Results } from "../General/Results";

export const IonicNaming: React.FC = () => {
  interface IonicCompound {
    metal: ElementProps;
    nonmetal: ElementProps;
  }

  const IonicName = (ions: IonicCompound) => {
    let metalcharge: string = " ";

    if (Math.abs(charge(ions.metal)) !== 1) {
      metalcharge = `(${romanize(Math.abs(charge(ions.metal)))}) `;
    }

    return `${ions.metal.name} ${metalcharge} ${ide(ions.nonmetal.name)}`;
  };

  const IonicFormula = (ions: IonicCompound, returnJSX: boolean) => {
    let metalCharge: number = Math.abs(charge(ions.nonmetal));
    let nonmetalCharge: number = Math.abs(charge(ions.metal));

    metalCharge /= gcd(metalCharge, nonmetalCharge);
    nonmetalCharge /= gcd(metalCharge, nonmetalCharge);

    const subMetalCharge = metalCharge !== 1 ? metalCharge : "";
    const subNonmetalCharge = nonmetalCharge !== 1 ? nonmetalCharge : "";

    return `${ions.metal.symbol}
      ${subMetalCharge}
      ${ions.nonmetal.symbol}
      ${subNonmetalCharge}`;
  };

  const IonicFormulaJSX: React.FC = () => {
    const ions = CurrentIons;
    let metalCharge: number = Math.abs(charge(ions.nonmetal));
    let nonmetalCharge: number = Math.abs(charge(ions.metal));

    metalCharge /= gcd(metalCharge, nonmetalCharge);
    nonmetalCharge /= gcd(metalCharge, nonmetalCharge);

    const subMetalCharge = metalCharge !== 1 ? metalCharge : "";
    const subNonmetalCharge = nonmetalCharge !== 1 ? nonmetalCharge : "";

    return (
      <h1 className="text-center text-60">
        {ions.metal.symbol}
        <sub>{subMetalCharge}</sub>
        {ions.nonmetal.symbol}
        <sub>{subNonmetalCharge}</sub>
      </h1>
    );
  };

  const checkAnswer = (input: string, answer: string) => {
    input = input.toLowerCase().replace(/\s/g, "");
    answer = answer.toLowerCase().replace(/\s/g, "");

    if (input === answer) {
      return true;
    } else {
      return false;
    }
  };

  const [CurrentIons, setCurrentIons] = useState({
    metal: randomElement(metals),
    nonmetal: randomElement(nonmetals),
  });

  const [correct, setCorrect] = useState(null);

  const handleSubmit = (input: string) => {
    if (checkAnswer(input, IonicFormula(CurrentIons, false))) {
      setCorrect(false);
    }

    return;
  };

  return (
    <DefaultLayout title={IonicName(CurrentIons)}>
      <TextInput response={handleSubmit}></TextInput>
    </DefaultLayout>
  );
};
