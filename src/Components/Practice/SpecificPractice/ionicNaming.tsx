import metals from "../../../ElementalJson/metals.json";
import nonmetals from "../../../ElementalJson/nonmetals.json";
import polyAtomics from "../../../ElementalJson/polyatomicIons.json";
import { ElementProps } from "../../Table/Element";
import {
  charge,
  gcd,
  ide,
  randInt,
  randomElement,
  romanize,
} from "../General/helperFunctions";
import { Naming } from "../General/Naming";

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

    return `${ions.metal.name} ${metalcharge} ${
      ions.nonmetal.category === "PolyAtomic Ions"
        ? ions.nonmetal.name
        : ide(ions.nonmetal.name)
    }`;
  };

  const Formula = (ions: IonicCompound) => {
    let metalCharge: number = Math.abs(charge(ions.nonmetal));
    let nonmetalCharge: number = Math.abs(charge(ions.metal));

    metalCharge /= gcd(metalCharge, nonmetalCharge);
    nonmetalCharge /= gcd(metalCharge, nonmetalCharge);

    const subMetalCharge = metalCharge !== 1 ? metalCharge : "";
    const subNonmetalCharge = nonmetalCharge !== 1 ? nonmetalCharge : "";

    let nonmetal = "";

    if (ions.nonmetal.category === "PolyAtomic Ions") {
      nonmetal = `(${ions.nonmetal.symbol})`;
    } else {
      nonmetal = `${ions.nonmetal.symbol}`;
    }

    return `${ions.metal.symbol}_${subMetalCharge}${nonmetal}_${subNonmetalCharge}`;
  };

  const NewIons = () => {
    return {
      metal: randomElement(metals),
      nonmetal:
        randInt(0, 1) === 1
          ? randomElement(nonmetals)
          : randomElement(polyAtomics),
    };
  };

  return (
    <Naming
      Formula={Formula}
      Name={Name}
      newIons={() => NewIons()}
      QuizName={"Ionic Compounds"}
    />
  );
};
