import React, { FC } from "react";

export interface ElementProps {
  charge?: number;
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
      className={`flex h-[45px] w-[45px] select-none flex-col justify-center border dark:border-dark-gray dark:brightness-110`}
      onClick={() => {
        if (props.cpk_hex) {
          props.setActive({ ...rest });
        }
      }}
    >
      <div
        className={`mx-auto h-[40px] w-[40px] text-center bg-[#${props.cpk_hex}] hover:w-[38 }px] rounded-sm hover:h-[38px]
        hover:brightness-125`}
      >
        <h1 className={`text-lg font-bold`}>
          {props.cpk_hex ? props.symbol : ""}
        </h1>
      </div>
    </div>
  );
};

export default Element;
