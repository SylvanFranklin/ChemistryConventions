import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AcidsNaming } from "../Components/Practice/SpecificPractice/AcidsNaming";
import { CovalentNaming } from "../Components/Practice/SpecificPractice/CovalentNaming";
import { HydroCarbonNaming } from "../Components/Practice/SpecificPractice/HydroCarbonsNaming";
import { IonicNaming } from "../Components/Practice/SpecificPractice/IonicNaming";
import { PolyAtomicNaming } from "../Components/Practice/SpecificPractice/PolyAtomicNaming";
import ShellConfiguration from "../Components/Practice/SpecificPractice/ShellConfiguration";
import PeriodicTable from "../Components/Table/PeriodicTable";
import QuizzesLayout from "../Page Layouts/QuizSelection";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PeriodicTable />} />

        <Route path="practice" element={<QuizzesLayout />} />
        <Route path="shellconfiguration" element={<ShellConfiguration />} />
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
        <Route path="practice/naming/acids" element={<AcidsNaming />} />
      </Routes>
    </BrowserRouter>
  );
};
