import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navigation/NavBar";
import DefaultLayout from "./Default";

interface QuizzesLayoutProps {}

const QuizzesLayout: FunctionComponent<QuizzesLayoutProps> = () => {
  return (
    <DefaultLayout title={"Practice"}>
      <Quiz name="shell configuration" path="shellconfiguration" />
      <Quiz
        name="shell configuration semantic"
        path="shellconfiguration/semantic"
      />
      <Quiz name="Naming Ionic Compounds" path="naming/ionic" />
      <Quiz name="Naming Covalent Compounds" path="naming/covalent" />
    </DefaultLayout>
  );
};

interface QuizProps {
  name: string;
  path: string;
}

const Quiz: FunctionComponent<QuizProps> = (props) => {
  let navigator = useNavigate();

  return (
    <div
      onClick={() => navigator(props.path)}
      className="flex m-2 rounded-md bg-30 select-none items-center hover:bg-10 w-1/3 mx-auto"
    >
      <h1 className="text-xl text-center text-white  bg-opacity-5 p-5">
        {props.name}
      </h1>
    </div>
  );
};

export default QuizzesLayout;
