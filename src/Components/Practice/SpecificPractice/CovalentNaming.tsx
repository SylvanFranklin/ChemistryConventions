import nonmetals from "../../../ElementalJson/nonmetals.json";
import { ElementProps } from "../../Table/Element";
import { charge, gcd, ide, randomElement } from "../General/helperFunctions";
import { Naming } from "../General/Naming";

export const CovalentNaming: React.FC = () => {
  interface CovalentCompound {
    nonmetal1: ElementProps;
    nonmetal2: ElementProps;
  }

  const Name = (ions: CovalentCompound) => {
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
    let pref1: number = Math.abs(charge(ions.nonmetal1));
    let pref2: number = Math.abs(charge(ions.nonmetal2));

    pref1 /= gcd(pref1, pref2);
    pref2 /= gcd(pref1, pref2);

    let modifiedpre1: string = prefixes[pref1];
    let modifiedpre2: string = prefixes[pref2];

    if (modifiedpre1 === modifiedpre2) {
      modifiedpre1 = "";
      modifiedpre2 = "";
    } else if (isVowel(ions.nonmetal1.name[0])) {
      modifiedpre1 = modifiedpre1.slice(0, -1);
    } else if (isVowel(ions.nonmetal2.name[0])) {
      modifiedpre2 = modifiedpre2.slice(0, -1);
    }

    return `${modifiedpre1}${ions.nonmetal1.name.toLowerCase()} ${modifiedpre2}${ide(
      ions.nonmetal2.name.toLowerCase()
    )}`;
  };

  const Formula = (ions: CovalentCompound) => {
    let metalCharge: number = Math.abs(charge(ions.nonmetal1));
    let nonmetalCharge: number = Math.abs(charge(ions.nonmetal2));

    metalCharge /= gcd(metalCharge, nonmetalCharge);
    nonmetalCharge /= gcd(metalCharge, nonmetalCharge);

    const subMetalCharge = metalCharge !== 1 ? metalCharge : "";
    const subNonmetalCharge = nonmetalCharge !== 1 ? nonmetalCharge : "";

    return `${ions.nonmetal1.symbol}_${subMetalCharge}${ions.nonmetal2.symbol}_${subNonmetalCharge}`;
  };

  const NewIons = () => {
    return {
      nonmetal1: randomElement(nonmetals),
      nonmetal2: randomElement(nonmetals),
    };
  };
  return (
    <Naming
      Formula={Formula}
      Name={Name}
      newIons={() => NewIons()}
      QuizName={"Covalent Compounds"}
    />
  );
};
