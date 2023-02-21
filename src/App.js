import { useEffect, useState, useContext, createContext, useRef } from "react";
import "./App.css";
import PersonImage from "./PersonImage";
import PersonQuoteAndImage from "./PersonQuote";

export const personQuotedContext = createContext();

function App() {
  const [personQuoted, setPersonQuoted] = useState("");
  const [personFetched, setPersonFetched] = useState(false);
  const [displayPuzzle, setDisplayPuzzle] = useState(false);
  const [rerender, setRerender] = useState(false);

  return (
    <personQuotedContext.Provider
      value={{ setPersonQuoted, personQuoted, personFetched, setPersonFetched }}
    >
      <div className="bg-blue-200">
        <PersonQuoteAndImage
          setRerender={setRerender}
          rerender={rerender}
        ></PersonQuoteAndImage>
        <PersonImage
          setRerender={setRerender}
          rerender={rerender}
        ></PersonImage>

        <button
          onClick={() => {
            setRerender((current) => {
              return !rerender;
            });
          }}
        >
          SKIP
        </button>
      </div>
    </personQuotedContext.Provider>
  );
}

export default App;
