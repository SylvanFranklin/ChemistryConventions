import elementJSON from "../Json/table.json";
import { ElementProps } from "./Element";
import Element from "./Element";

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
    <div className="flex flex-col bg-30 dark:bg-dark30 rounded-md w-min mx-auto">
      <div className="flex p-3 ">{lms}</div>
    </div>
  );
};

export default PeriodicTable;
