import { FC } from "react";
import { BsCommand } from "react-icons/bs";

export const Search: FC = () => {
  return (
    <div className="flex w-10 h-16 transition-all duration-500">
      <div className='flex flex-row border-2 border-black rounded-md  h-16 my-auto'>
        <BsCommand className="my-auto"></BsCommand>
      </div>
    </div>
  );
};
