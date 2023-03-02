import GuessBox from "./GuessBox";
import { useState } from "react";

const Quote = ({ quote, person, imageRefetch }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="max-w-xl p-1 bg-gray-200 rounded-sm">
      <div className="m-3">
        "{quote}" -
        {showAnswer ? (
          person
        ) : (
          <button onClick={() => setShowAnswer(true)} className="text-blue-400">
            show answer
          </button>
        )}
      </div>
      <div className="flex justify-center my-4 ">
        <GuessBox></GuessBox>
      </div>
    </div>
  );
};

export default Quote;
