import metals from "../../../ElementalJson/metals.json";
import nonmetals from "../../../ElementalJson/nonmetals.json";
import polyAtomics from "../../../ElementalJson/polyatomicIons.json";
import { ElementProps } from "../../Table/Element";
import { charge, randInt, randomElement } from "../General/helperFunctions";
import { Naming } from "../General/Naming";

export const AcidsNaming: React.FC = () => {
  interface acid {
    hydrogen: ElementProps;
    nonmetal: ElementProps;
  }

  const Name = (ions: acid) => {
    // Naming acids

    let newEnding: string = ions.nonmetal.name;

    // ide - hydro ic
    if (
      ions.nonmetal.name.endsWith("ide") ||
      ions.nonmetal.name.endsWith("ine")
    ) {
      newEnding = newEnding.replace("ide", "ic");
      newEnding = `hydro${newEnding}`;
      // ate - ic
    } else if (ions.nonmetal.name.endsWith("ate")) {
      newEnding = newEnding.replace("ate", "ic");

      // ite - ous
    } else if (ions.nonmetal.name.endsWith("ite")) {
      newEnding = newEnding.replace("ite", "ous");
    } else {
      newEnding = "fail";
    }

    return newEnding;
  };

  const Formula = (ions: acid) => {
    let hydrogenCharge: number = Math.abs(charge(ions.hydrogen));
    let nonmetalCharge: number = Math.abs(charge(ions.nonmetal));

    const subHydrogenCharge = hydrogenCharge !== 1 ? nonmetalCharge : "";
    const subNonmetalCharge = nonmetalCharge !== 1 ? hydrogenCharge : "";

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
