import { createContext, FunctionComponent, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeriodicTable from "./Components/Table/PeriodicTable";
import ShellConfiguration from "./Components/Practice/Specific Practice/ShellConfiguration";
import { AppRoutes } from "./Navigation/Routes";
import DefaultLayout from "./Page Layouts/Default";
import QuizzesLayout from "./Page Layouts/QuizSelection";

export const darkModeContext = createContext(null);

const App: FunctionComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

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
