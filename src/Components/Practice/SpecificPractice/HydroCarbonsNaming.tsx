import { randInt } from "../General/helperFunctions";
import { Naming } from "../General/Naming";

export const HydroCarbonNaming: React.FC = () => {
  interface HydroCarbonNaming {
    numCarbon: number;
    numHydrogen: number;
  }

  const Formula = (ions: HydroCarbonNaming) => {
    let hydrogens: number;

    //     ane
    if (ions.numHydrogen === 1) {
      hydrogens = ions.numCarbon * 2 + 2;

      //     ene
    } else if (ions.numHydrogen === 2) {
      hydrogens = ions.numCarbon * 2;

      //     yne
    } else {
      hydrogens = ions.numCarbon * 2 - 2;
    }

    return `C_${ions.numCarbon}H_${hydrogens}`;
  };
  const Name = (ions: HydroCarbonNaming) => {
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

    if (ions.numHydrogen === 1) {
      ending = "ane";
    } else if (ions.numHydrogen === 2) {
      ending = "ene";
    } else {
      ending = "yne";
    }

    return prefixes[ions.numCarbon - 1] + ending;
  };

  const NewHydroCarbon = () => {
    return {
      numCarbon: randInt(1, 10),
      numHydrogen: randInt(1, 3),
    };
  };

  return (
    <Naming
      Formula={Formula}
      Name={Name}
      newIons={() => NewHydroCarbon()}
      QuizName={"Hydro Carbons"}
    />
  );
};
