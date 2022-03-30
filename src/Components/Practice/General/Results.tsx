import { JsxElement } from "typescript";

interface ResultsProps {
  correct: boolean;
  correctAnswer: JsxElement;
  userAnswer: JsxElement;
}

export const Results: React.FC<ResultsProps> = (props) => {
  return (
    <div className="mt-4 flex flex-col justify-center">
      <div className="text-white bg-30 w-80 h-40 rounded-xl mx-auto flex flex-col justify-center">
        {props.correctAnswer}
        {props.userAnswer}

        <button
          className="w-16 h-8 bg-10 mt-auto mb-2 hover:bg-opacity-60 mx-auto"
          onClick={() => console.log()}
        >
          Okay
        </button>
      </div>
    </div>
  );
};
