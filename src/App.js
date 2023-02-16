import { useEffect, useState, useContext, createContext, useRef } from "react";
import "./App.css";
import PersonImage from "./PersonImage";
import PersonQuote from "./PersonQuote";

export const personQuotedContext = createContext();

function App() {
  const [personQuoted, setPersonQuoted] = useState("");
  const [personFetched, setPersonFetched] = useState(false);
  return (
    <personQuotedContext.Provider
      value={{ setPersonQuoted, personQuoted, personFetched, setPersonFetched }}
    >
      <div className="bg-blue-200">
        <PersonQuote></PersonQuote>
        <PersonImage></PersonImage>
      </div>
    </personQuotedContext.Provider>
  );
}

export default App;
