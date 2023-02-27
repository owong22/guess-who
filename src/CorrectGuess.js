import { useEffect } from "react";

const CorrectGuess = ({ setShowAlert, alertValue }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <h1>{alertValue}</h1>;
};

export default CorrectGuess;
