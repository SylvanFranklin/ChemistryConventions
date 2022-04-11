import React, { FC, useState } from "react";

export interface ElementProps {
  setActive?: Function;
  size?: number;
  name?: string;
  appearance?: string;
  atomic_mass?: number;
  boil?: number;
  category?: string;
  density?: number;
  discovered_by?: string;
  melt?: number;
  molar_heat?: number;
  named_by?: string;
  number?: number;
  period?: number;
  phase?: string;
  source?: string;
  spectral_img?: string;
  summary?: string;
  symbol?: string;
  xpos?: number;
  ypos?: number;
  shells?: number[];
  electron_configuration?: string;
  electron_configuration_semantic?: string;
  electron_affinity?: number;
  electronegativity_pauling?: number;
  ionization_energies?: number[];
  cpk_hex?: string;
}

const Element: FC<ElementProps> = (props) => {
  const { setActive, ...rest } = { ...props };



  return (
    <div
      className={`select-none w-[45px] h-[45px] flex flex-col justify-center border border-opacity-10 border-light-subtext`}
      onClick={() => {
        if (props.cpk_hex) {
          props.setActive({ ...rest });
        }
      }}
    >
      <div
        className={`mx-auto text-center w-[40px] h-[40px] bg-[#${props.cpk_hex}] rounded-sm hover:brightness-125 hover:h-[38px] hover:w-[38
        }px]`}
      >
        <h1 className={`text-lg font-bold`}>
          {props.cpk_hex ? props.symbol : ""}
        </h1>
      </div>
    </div>
  );
};

export default Element;