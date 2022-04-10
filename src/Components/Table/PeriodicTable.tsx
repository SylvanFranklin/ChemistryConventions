import elementJSON from "../../Elemental Json/table.json";
import { ElementProps } from "./Element";
import Element from "./Element";
import DefaultLayout from "../../Page Layouts/Default";
import React, { useState } from "react";
import { ElementInspector } from "./ElementInfo";
import { randomElement } from "../Practice/General/helperFunctions";

const newTable = (setCurrentElement: Function) => {
  const rws: ElementProps[][] = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ];

  for (const [key, val] of Object.entries(elementJSON)) {
    rws[val.xpos - 1][val.ypos - 1] = val;
  }

  const lms = rws.map((clm) => {
    return (
      <div key={Math.random()}>
        {clm.map((element) => {
          return (
            <Element
              key={Math.random()}
              setActive={setCurrentElement}
              {...element}
            />
          );
        })}
      </div>
    );
  });

  return lms;
};

const PeriodicTable = () => {
  const [currentElement, setCurrentElement] = useState(null);
  const lms = newTable(setCurrentElement);

  return (
    <DefaultLayout title="Table">
      <div className="flex flex-row bg-30 w-min mx-auto">
        <div className="flex mx-4 p-4 bg-standard">{lms}</div>

        <ElementInspector currentElement={currentElement} />
      </div>
    </DefaultLayout>
  );
};

export default PeriodicTable;
