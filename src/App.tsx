import { createContext, FunctionComponent, useState } from "react";
import React from "react";
import { AppRoutes } from "./Navigation/Routes";

export const darkModeContext = createContext(null);

const App: FunctionComponent = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-light-60 h-[100vh] dark:bg-dark-60">
          <AppRoutes />
        </div>
      </div>
    </darkModeContext.Provider>
  );
};

export default App;
