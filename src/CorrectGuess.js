import { useEffect } from "react";

const CorrectGuess = ({ setShowAlert, alertValue }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (alertValue == "Correct") {
    return (
      <h1 className="p-3 text-2xl bg-green-400 rounded-md">{alertValue}</h1>
    );
  } else {
    return <h1 className="p-3 text-2xl bg-red-400 rounded-md">{alertValue}</h1>;
  }
};

export default CorrectGuess;
