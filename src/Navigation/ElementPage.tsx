import { ReactNode } from "react";
import { BigElement } from "../Components/Table/BigElement";
import { ElementProps } from "../Components/Table/Element";
import DefaultLayout from "../Page Layouts/Default";

export const ElementPage: React.FC<ElementProps> = (props) => {
  return (
    <DefaultLayout>
      <div className="border-standard mx-auto flex h-60 w-2/3 flex-row rounded-lg p-6">
        <div className="my-auto flex flex-col">
          <BigElement {...props}></BigElement>
        </div>

        <ol className="text-standard ml-10 w-full">
          <InfoItem title="appearance" value={props.appearance}></InfoItem>
          <InfoItem
            title="atomic mass"
            value={String(props.atomic_mass)}
          ></InfoItem>
          <InfoItem title="charge" value={String(props.charge)}></InfoItem>
        </ol>
      </div>
    </DefaultLayout>
  );
};

interface infoItemProps {
  title: string;
  value: string;
}

const InfoItem: React.FC<infoItemProps> = (props) => {
  return (
    <li className=" bg-standard mt-3 flex w-full flex-row rounded-md p-2">
      <h2 className="text-lg font-bold">{props.title}</h2>
      <h2 className="mr-1 ml-auto text-lg font-bold">{props.value}</h2>
    </li>
  );
};
