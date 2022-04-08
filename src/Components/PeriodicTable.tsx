import elementJSON from "../Elemental Json/table.json";
import { ElementProps } from "./Element";
import Element from "./Element";
import DefaultLayout from "../Page Layouts/Default";

const newTable = () => {
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
          return <Element key={Math.random()} {...element} />;
        })}
      </div>
    );
  });

  return lms;
};

const PeriodicTable = () => {
  const lms = newTable();
  return (
    <DefaultLayout title="Table">
      <div className="flex flex-col bg-30 rounded-none w-min mx-auto bg-standard">
        <div className="flex p-3 ">{lms}</div>
      </div>
    </DefaultLayout>
  );
};

export default PeriodicTable;
