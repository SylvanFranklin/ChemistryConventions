import React, { FC } from "react";
import { ElementProps } from "./Element";

export const BigElement: FC<ElementProps> = (props) => {
  return (
    <div className="h-[138px] w-[138px] hover:p-1">
      <div
        className={`aspect-square text-center text-black shadow-lg bg-[#${props.cpk_hex}] group rounded-lg hover:brightness-125`}
      >
        <h3 className="mr-24 pt-1">{props.number}</h3>
        <h1 className={`m-0 text-4xl font-bold`}>
          {props.cpk_hex ? props.symbol : ""}
        </h1>
        <p className="">{props.name}</p>
      </div>
    </div>
  );
};
