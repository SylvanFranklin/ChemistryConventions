import React, { FC } from "react";
import { ElementProps } from "./Element";

export const BigElement: FC<ElementProps> = (props) => {
  return (
    <div className="hover:p-1 w-[138px] h-[138px]">
      <div
        className={`shadow-lg aspect-square text-center bg-[#${props.cpk_hex}] rounded-lg hover:brightness-125 group`}
      >
        <h3 className="mr-24 pt-1">{props.number}</h3>
        <h1 className={`text-4xl font-bold m-0`}>
          {props.cpk_hex ? props.symbol : ""}
        </h1>
        <p className="">{props.name}</p>
      </div>
    </div>
  );
};
