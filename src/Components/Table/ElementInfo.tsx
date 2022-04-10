import React from "react";
import { ElementProps } from "./Element";
import { BigElement } from "./BigElement";
import { charge } from "../Practice/General/helperFunctions";

interface ElementInspectorProps {
  currentElement?: ElementProps;
}

export const ElementInspector: React.FC<ElementInspectorProps> = (props) => {
  return (
    <div className="flex bg-standard w-60">
      <div className="mx-auto mt-4">
        <BigElement {...props.currentElement}></BigElement>
        <div className='mt-4 mx-auto'>
          <InfoPair
            title={"Oxidation States"}
            value={
              props.currentElement
                ? String(charge({ ...props.currentElement }))
                : ""
            }
          />
          <InfoPair
            title={"Atomic Mass"}
            value={
              props.currentElement
                ? `${String(props.currentElement.atomic_mass.toFixed(4))} amu`
                : ""
            }
          />
          <InfoPair
            title={"Category"}
            value={
              props.currentElement
                ? String(props.currentElement.category)
                : ""
            }
          />
        </div>
      </div>
    </div>
  );
};

interface InfoPairProps {
  title: string;
  value: string;
}

const InfoPair: React.FC<InfoPairProps> = (props) => {
  return (
    <>
      <h1 className="text-center font-bold mt-1 text-lg">{props.title}</h1>
      <p className=" bg-standard p-1 overflow-x-auto h-8 rounded-sm">{props.value}</p>
    </>
  );
};
