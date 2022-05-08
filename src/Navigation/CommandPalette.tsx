import { Combobox, Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { elements } from "./ElementValues";

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: Function;
}

export const CommandPalette: React.FC<CommandPaletteProps> = (props) => {
  return (
    <>
      {props.isOpen && (
        <div
          className="fixed top-0 right-0 z-20 h-full w-full bg-black bg-opacity-40"
          onClick={() => props.setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-standard fixed top-0 right-0 left-0 z-50 mx-auto mt-32 h-1/2 w-1/2 rounded-lg"
          >
            <form className="">
              <input
                type="text"
                className="text-standard bg-standard block w-full rounded-t-lg p-4 text-lg focus:outline-none"
                placeholder="Search for element, compounds, or quizzes..."
                autoFocus
                autoComplete="false"
              ></input>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
