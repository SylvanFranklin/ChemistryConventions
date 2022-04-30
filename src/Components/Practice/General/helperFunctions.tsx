import React from "react";
import { ElementProps } from "../../Table/Element";

export function randInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const CheckAnswer = (input: string, answer: string) => {
  input = input.toLowerCase().replace(/\s/g, "").replace(/^/g, "");
  answer = answer.toLowerCase().replace(/\s/g, "").replace(/_/g, "");

  if (input === answer) {
    return true;
  } else {
    return false;
  }
};

export const romanize = (num: number) => {
  let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "";

  for (const [key, val] of Object.entries(lookup)) {
    while (num >= val) {
      roman += key;
      num -= val;
    }
  }
  return roman;
};

export const ide = (name: string) => {
  const endings: string[] = [
    "on",
    "ogen",
    "ygen",
    "ine",
    "orus",
    "ur",
    "ic",
    "ium",
  ];

  for (const ending of endings) {
    if (name.endsWith(ending)) {
      return name.substring(0, name.length - ending.length) + "ide";
    }
  }

  return "error";
};

export const charge = (element: ElementProps) => {
  if (element.category === "PolyAtomic Ions") {
    return element.charge ? element.charge : -1;
  } else {
    if (element.shells[element.shells.length - 1] <= 4) {
      return element.shells[element.shells.length - 1];
    } else if (element.shells[element.shells.length - 1] > 4) {
      return -1 * (8 - element.shells[element.shells.length - 1]);
    } else {
      return -1;
    }
  }
};

export const randomElement = (elements: object, exclude?: object) => {
  const lst = Object.values(elements);

  let t: ElementProps = lst[randInt(0, lst.length - 1)];

  while (t === exclude) {
    t = lst[randInt(0, lst.length - 1)];
  }

  return t;
};

export const lcm = (n1: number, n2: number) => {
  return (n1 * n2) / gcd(n1, n2);
};

//  !often throws errors when called with the wrong numbers
export const gcd = (num1: number, num2: number) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  }
  return num2;
};
export const addScripts = (text: string, styles?: string) => {
  let ret: string = text.replace(/(_\d+)/g, "<sub>$&</sub>").replace(/_/g, "");
  ret = ret.replace(/(\^\d+)/g, "<sup>$&</sup>").replace(/\^/g, "");

  return <h1 dangerouslySetInnerHTML={{ __html: ret }}></h1>;
};
