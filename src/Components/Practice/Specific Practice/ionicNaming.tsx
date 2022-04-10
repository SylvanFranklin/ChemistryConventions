import { useState } from "react";
import metals from "../../../Elemental Json/metals.json";
import nonmetals from "../../../Elemental Json/nonmetals.json";
import DefaultLayout from "../../../Page Layouts/Default";
import { ElementProps } from "../../Table/Element";
import {
  charge,
  CheckAnswer,
  gcd,
  ide,
  randomElement,
  romanize,
} from "../General/helperFunctions";
import { PracticeUI } from "../General/Results";

export const IonicNaming: React.FC = () => {
  interface IonicCompound {
    metal: ElementProps;
    nonmetal: ElementProps;
  }

  const Name = (ions: IonicCompound) => {
    let metalcharge: string = " ";

    if (Math.abs(charge(ions.metal)) !== 1) {
      metalcharge = `(${romanize(Math.abs(charge(ions.metal)))}) `;
    }

    return `${ions.metal.name} ${metalcharge} ${ide(ions.nonmetal.name)}`;
  };

  const Formula = (ions: IonicCompound) => {
    let metalCharge: number = Math.abs(charge(ions.nonmetal));
    let nonmetalCharge: number = Math.abs(charge(ions.metal));

    metalCharge /= gcd(metalCharge, nonmetalCharge);
    nonmetalCharge /= gcd(metalCharge, nonmetalCharge);

    const subMetalCharge = metalCharge !== 1 ? metalCharge : "";
    const subNonmetalCharge = nonmetalCharge !== 1 ? nonmetalCharge : "";

    return `${ions.metal.symbol}_${subMetalCharge}${ions.nonmetal.symbol}_${subNonmetalCharge}`;
  };

  const [Ions, setIons] = useState({
    metal: randomElement(metals),
    nonmetal: randomElement(nonmetals),
  });

  return (
    <DefaultLayout>
      <PracticeUI
        correctAnswer={Formula(Ions)}
        checkAnswer={(text: string) => CheckAnswer(text, Formula(Ions))}
        newQuestion={() =>
          setIons({
            metal: randomElement(metals),
            nonmetal: randomElement(nonmetals),
          })
        }
        settings={undefined}
      >
        <h1 className="mb-16 text-3xl text-center">{Name(Ions)}</h1>
      </PracticeUI>
    </DefaultLayout>
  );
};
