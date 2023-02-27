import { useState, useContext } from "react";
import { renderContext } from "./ReactQuery";

const GuessBox = () => {
  const { quoteRefetch, personQuoted, setShowAlert, setAlertValue } =
    useContext(renderContext);
  const [guess, setGuess] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guess);
    console.log(personQuoted);
    if (guess.toUpperCase() == personQuoted.toUpperCase()) {
      quoteRefetch();
      setAlertValue("Correct");
    } else {
      setAlertValue("Incorrect");
    }
    setShowAlert(true);
  };

  return (
    <form action="input" onSubmit={handleSubmit}>
      <label htmlFor="">Guess:</label>
      <input
        type="text"
        onChange={(e) => {
          setGuess(e.target.value);
        }}
      />
    </form>
  );
};

export default GuessBox;
