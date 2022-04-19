import metals from "../../../ElementalJson/metals.json";
import nonmetals from "../../../ElementalJson/nonmetals.json";
import polyAtomics from "../../../ElementalJson/polyatomicIons.json";
import { ElementProps } from "../../Table/Element";
import {
  charge,
  gcd,
  randInt,
  randomElement,
} from "../General/helperFunctions";
import { Naming } from "../General/Naming";

export const AcidsNaming: React.FC = () => {
  interface acid {
    hydrogen: ElementProps;
    nonmetal: ElementProps;
  }

  const Name = (ions: acid) => {
    return "1";
  };

  const Formula = (ions: acid) => {
    let hyrdogenCharge: number = Math.abs(charge(ions.hydrogen));
    let nonmetalCharge: number = Math.abs(charge(ions.nonmetal));

    const subHydrogenCharge = hyrdogenCharge !== 1 ? nonmetalCharge : "";
    const subNonmetalCharge = nonmetalCharge !== 1 ? hyrdogenCharge : "";

    let nonmetal = "";

    if (ions.nonmetal.category === "PolyAtomic Ions") {
      nonmetal = `(${ions.nonmetal.symbol})`;
    } else {
      nonmetal = `${ions.nonmetal.symbol}`;
    }

    return `${ions.hydrogen.symbol}_${subHydrogenCharge}${nonmetal}_${subNonmetalCharge}`;
  };

  const NewIons = () => {
    return {
      hydrogen: metals.hydrogen,
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
      QuizName={"Acids"}
    />
  );
};
