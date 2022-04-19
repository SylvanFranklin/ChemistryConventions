import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeriodicTable from "../Components/Table/PeriodicTable";
import { CovalentNaming } from "../Components/Practice/SpecificPractice/CovalentNaming";
import { HydroCarbonNaming } from "../Components/Practice/SpecificPractice/HydroCarbonsNaming";
import { IonicNaming } from "../Components/Practice/SpecificPractice/IonicNaming";
import ShellConfiguration from "../Components/Practice/SpecificPractice/ShellConfiguration";
import DefaultLayout from "../Page Layouts/Default";
import QuizzesLayout from "../Page Layouts/QuizSelection";
import { PolyAtomicNaming } from "../Components/Practice/SpecificPractice/PolyAtomicNaming";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PeriodicTable />} />

        <Route path="/practice" element={<QuizzesLayout />}></Route>
        <Route
          path="practice/shellconfiguration"
          element={<ShellConfiguration semantic={false} />}
        />
        <Route
          path="practice/shellconfiguration/semantic"
          element={<ShellConfiguration semantic={true} />}
        />
        <Route path="practice/naming/ionic" element={<IonicNaming />} />
        <Route path="practice/naming/covalent" element={<CovalentNaming />} />
        <Route
          path="practice/naming/polyatomicions"
          element={<PolyAtomicNaming />}
        />
        <Route
          path="practice/naming/hydrocarbons"
          element={<HydroCarbonNaming />}
        />
      </Routes>
    </BrowserRouter>
  );
};
