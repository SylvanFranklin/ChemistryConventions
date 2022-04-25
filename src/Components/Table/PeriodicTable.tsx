import React, { useState } from "react";
import elementJSON from "../../ElementalJson/table.json";
import DefaultLayout from "../../Page Layouts/Default";
import Element, { ElementProps } from "./Element";
import { ElementInspector } from "./ElementInfo";

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
      <div className="mx-auto  flex w-min flex-row">
        <div className="bg-standard mx-4 flex p-4">{lms}</div>

        <ElementInspector currentElement={currentElement} />
      </div>
    </DefaultLayout>
  );
};

export default PeriodicTable;
