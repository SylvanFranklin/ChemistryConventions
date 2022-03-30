import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeriodicTable from "../Components/PeriodicTable";
import { IonicNaming } from "../Components/Practice/Specific Practice/ionicNaming";
import ShellConfiguration from "../Components/Practice/Specific Practice/ShellConfiguration";
import DefaultLayout from "../Page Layouts/Default";
import QuizzesLayout from "../Page Layouts/QuizSelection";

export const AppRoutes: React.FC = () => {
  return (
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
          element={<ShellConfiguration />}
        />
        <Route path="practice/naming/ionic" element={<IonicNaming />} />

        <Route path="practice/shellconfiguration/semantic" element={<DefaultLayout title={"Semantic SC"}/>} />
        <Route path="practice/naming/covalent" element={<DefaultLayout title={"Covalent Naming"}/>} />
      </Routes>
    </BrowserRouter>
  );
};
