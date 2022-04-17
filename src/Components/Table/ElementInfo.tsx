import React from "react";
import { charge } from "../Practice/General/helperFunctions";
import { BigElement } from "./BigElement";
import { ElementProps } from "./Element";

interface ElementInspectorProps {
  currentElement?: ElementProps;
}

export const ElementInspector: React.FC<ElementInspectorProps> = (props) => {
  return (
    <div className="bg-standard flex w-60 flex-col">
      <div className="mx-auto mt-4">
        <BigElement {...props.currentElement}></BigElement>
      </div>
      <div className="mx-auto mt-4 text-light-text dark:text-dark-text">
        <InfoPair
          title={"Oxidation States"}
          value={
            props.currentElement
              ? String(charge({ ...props.currentElement }))
              : " "
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
            props.currentElement ? String(props.currentElement.category) : ""
          }
        />
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
      <h1 className="mt-1 w-40 text-center text-lg font-bold">{props.title}</h1>
      <p className="bg-standard h-8 rounded-sm p-1 px-2">{props.value}</p>
    </>
  );
};
