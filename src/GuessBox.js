import { useState, useContext } from "react";
import { renderContext } from "./ReactQuery";

const GuessBox = () => {
  const { quoteRefetch, personQuoted, setShowAlert, setAlertValue } =
    useContext(renderContext);
  const [guess, setGuess] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    let correctGuess = false;
    let splitNames = personQuoted.split(" ");

    splitNames.forEach((current) => {
      if (current.toUpperCase() == guess.toUpperCase()) {
        correctGuess = true;
      }
    });

    if (guess.toUpperCase() == personQuoted.toUpperCase() || correctGuess) {
      quoteRefetch();
      setAlertValue("Correct");
    } else {
      setAlertValue("Incorrect");
    }
    setShowAlert(true);
  };

  return (
    <div className="flex items-center mr-7">
      <form action="input" onSubmit={handleSubmit}>
        <label htmlFor="">Guess:</label>
        <input
          type="text"
          onChange={(e) => {
            setGuess(e.target.value);
          }}
          className="mb-2 border-2 border-black rounded-md"
        />
      </form>
    </div>
  );
};

export default GuessBox;
