import { createContext, FunctionComponent, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeriodicTable from "./Components/PeriodicTable";
import ShellConfiguration from "./Components/Practice/ShellConfiguration";
import DefaultLayout from "./Page Layouts/Default";
import QuizzesLayout from "./Page Layouts/QuizSelection";

export const darkModeContext = createContext(null);

const App: FunctionComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-60 h-[100vh] dark:bg-dark60">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <DefaultLayout title={"Table"}>
                    <PeriodicTable />
                  </DefaultLayout>
                }
              />
              <Route path="/practice" element={<QuizzesLayout />}></Route>
              <Route
                path="practice/shellconfiguration"
                element={<ShellConfiguration> </ShellConfiguration>}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </darkModeContext.Provider>
  );
};

export default App;
