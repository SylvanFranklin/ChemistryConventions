import metals from "../../../ElementalJson/metals.json";
import nonmetals from "../../../ElementalJson/nonmetals.json";
import polyAtomics from "../../../ElementalJson/polyatomicIons.json";
import { ElementProps } from "../../Table/Element";
import {
  charge,
  ide,
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
    // Naming acids

    let newEnding: string = ions.nonmetal.name;

    if (ions.nonmetal.category !== "PolyAtomic Ions") {
      newEnding = ide(newEnding);
    }

    // ide - hydro ic
    if (newEnding.endsWith("ide") || newEnding.endsWith("ine")) {
      newEnding = newEnding.replace("ide", "ic");
      newEnding = `hydro${newEnding}`;
      // ate - ic
    } else if (newEnding.endsWith("ate")) {
      newEnding = newEnding.replace("ate", "ic");

      // ite - ous
    } else if (newEnding.endsWith("ite")) {
      newEnding = newEnding.replace("ite", "ous");
    } else {
      newEnding = "fail";
    }

    return (
      newEnding[0].toUpperCase() +
      newEnding.substring(1).toLowerCase() +
      " acid"
    );
  };

  const Formula = (ions: acid) => {
    let hydrogenCharge: number = Math.abs(charge(ions.hydrogen));
    let nonmetalCharge: number = Math.abs(charge(ions.nonmetal));

    const subHydrogenCharge = nonmetalCharge !== 1 ? nonmetalCharge : "";
    const subNonmetalCharge = hydrogenCharge !== 1 ? hydrogenCharge : "";

    let nonmetal = "";

    if (ions.nonmetal.category === "PolyAtomic Ions") {
      nonmetal = `(${ions.nonmetal.symbol})`;
    } else {
      nonmetal = `${ions.nonmetal.symbol}`;
    }

    return `${ions.hydrogen.symbol}_${subHydrogenCharge}${nonmetal}_${subNonmetalCharge}`;
  };

  const NewIons = () => {
    let nonmetal =
      randInt(0, 15) > 9
        ? randomElement(nonmetals, nonmetals.hydrogen)
        : randomElement(polyAtomics, polyAtomics.Hydroxide);

    return {
      hydrogen: metals.hydrogen,
      nonmetal: nonmetal,
    };
  };

  return (
    <Naming
      Formula={Formula}
      Name={Name}
      newIons={NewIons}
      QuizName={"Acids"}
    />
  );
};
