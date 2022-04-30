import { Combobox, Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { elements } from "./ElementValues";

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: Function;
}

export const CommandPalette: React.FC<CommandPaletteProps> = (props) => {
  const titles = elements.map((element) => element.name);
  const [query, setQuery] = useState("");
  const filteredResults = query
    ? titles.filter((title) =>
        title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey))
        props.setIsOpen((value: Boolean) => !value);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.setIsOpen(!props.isOpen)}
      className="fixed inset-0 overflow-y-auto p-4 pt-[25vh]"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />

      <Combobox
        onChange={(element) => {
          console.log("navigate or something");
        }}
        value=""
        as="div"
        className="relative mx-auto max-w-xl divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
      >
        <div className="flex items-center px-4">
          <Combobox.Input
            className="h-12 w-full bg-transparent p-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
            placeholder="search..."
            autoComplete="off"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        {filteredResults.length > 0 && (
          <Combobox.Options
            static
            className="max-h-96 overflow-y-auto py-4 text-sm"
          >
            {filteredResults.map((title, index) => {
              return (
                <Combobox.Option key={index} value={title}>
                  {({ active }) => (
                    <div
                      className={`px-4 py-2 ${
                        active ? "bg-gray-200" : "bg-white"
                      }`}
                    >
                      {title}
                    </div>
                  )}
                </Combobox.Option>
              );
            })}
          </Combobox.Options>
        )}
        {query && filteredResults.length === 0 && (
          <p className="p-4 text-sm text-gray-500">No results found</p>
        )}
      </Combobox>
    </Dialog>
  );
};
