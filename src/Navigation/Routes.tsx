import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AcidsNaming } from "../Components/Practice/SpecificPractice/AcidsNaming";
import { CovalentNaming } from "../Components/Practice/SpecificPractice/CovalentNaming";
import { HydroCarbonNaming } from "../Components/Practice/SpecificPractice/HydroCarbonsNaming";
import { IonicNaming } from "../Components/Practice/SpecificPractice/ionicNaming";
import { PolyAtomicNaming } from "../Components/Practice/SpecificPractice/PolyAtomicNaming";
import ShellConfiguration from "../Components/Practice/SpecificPractice/ShellConfiguration";
import PeriodicTable from "../Components/Table/PeriodicTable";
import QuizzesLayout from "../Page Layouts/QuizSelection";
import { ElementPage } from "./ElementPage";
import { elements } from "./ElementValues";
import Landing from "./LandingPage";
import { LoggedIn } from "../auth/profile";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="table" element={<PeriodicTable />} />
        <Route path="/profile" element={<LoggedIn />} />

        <Route path="practice" element={<QuizzesLayout />} />
        <Route
          path="practice/shellconfiguration"
          element={<ShellConfiguration />}
        />
        <Route path="practice/naming/ionic" element={<IonicNaming />} />
        <Route path="practice/naming/covalent" element={<CovalentNaming />} />
        <Route
          path="practice/naming/polyatomic"
          element={<PolyAtomicNaming />}
        />
        <Route
          path="practice/naming/hydrocarbons"
          element={<HydroCarbonNaming />}
        />
        <Route path="practice/naming/acids" element={<AcidsNaming />} />

        {Object.values(elements).map((element) => {
          return (
            <Route
              element={<ElementPage {...element}></ElementPage>}
              path={`element/${element.name.toLowerCase()}`}
              key={element.name}
            />
          );
        })}

        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};
