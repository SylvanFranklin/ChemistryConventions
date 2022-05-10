import { useState } from "react";
import { useNavigate } from "react-router-dom";
import elements from "../ElementalJson/table.json";

interface PaletteItemProps {
  title: string;
  action: Function;
  description: string;
}

const PaletteItem: React.FC<PaletteItemProps> = (props) => {
  return (
    <span
      onClick={() => props.action()}
      className="text-standard bg-standard flex flex-row p-4 text-lg hover:brightness-90"
    >
      {props.title}
      <h3 className="ml-auto mr-4 text-gray-400">{props.description}</h3>
    </span>
  );
};

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: Function;
}

export const CommandPalette: React.FC<CommandPaletteProps> = (props) => {
  let PaletteItems: PaletteItemProps[] = [];
  let navigate = useNavigate();

  for (const element of Object.values(elements)) {
    PaletteItems.push({
      title: element.name,
      action: () => {
        props.setIsOpen(false);
        navigate(`/element/${element.name}`);
      },
      description: "element",
    });
  }




  const [query, setQuery] = useState("");

  const filteredResults = query
    ? PaletteItems.filter((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
    : [];

  return (
    <>
      {props.isOpen && (
        <div
          className="fixed top-0 right-0 z-20 h-full w-full bg-black bg-opacity-40"
          onClick={() => props.setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-standard fixed top-0 right-0 left-0 z-50 mx-auto mt-32 h-1/2 w-1/2 overflow-scroll rounded-lg"
          >
            <form
              className=""
              onSubmit={(e) => {
                e.preventDefault();
                filteredResults[0].action();
              }}
            >
              <input
                type="text"
                className="text-standard bg-standard fixed block w-1/2 rounded-t-lg border-b-2 p-4 text-lg focus:outline-none dark:border-slate-600"
                placeholder="Search for elements, [compounds, or quizzes... coming soon]"
                autoFocus
                autoComplete="false"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              ></input>

              <div className="pt-14">
                {filteredResults.length !== 0 ? (
                  filteredResults.map((result) => {
                    return (
                      <PaletteItem
                        title={result.title}
                        action={() => {
                          result.action();
                        }}
                        description={result.description}
                        key={result.title}
                      />
                    );
                  })
                ) : (
                  <div className="text-standard p-4 text-lg">

                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
