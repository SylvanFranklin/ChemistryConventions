import polyAtomics from "../../../ElementalJson/polyatomicIons.json";
import { ElementProps } from "../../Table/Element";
import { randomElement } from "../General/helperFunctions";
import { Naming } from "../General/Naming";

export const PolyAtomicNaming: React.FC = () => {
  const Name = (poly: ElementProps) => {
    return poly.name;
  };

  const Formula = (poly: ElementProps) => {
    return poly.symbol;
  };

  const NewIons = () => {
    return randomElement(polyAtomics);
  };

  return (
    <Naming
      Formula={Formula}
      Name={Name}
      newIons={() => NewIons()}
      QuizName={"PolyAtomic Ions"}
    ></Naming>
  );
};
