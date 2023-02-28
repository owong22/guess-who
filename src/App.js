import { useState, createContext } from "react";
import "./App.css";
import Introduction from "./Introduction";

import { ReactQuery } from "./ReactQuery";

function App() {
  const [introduction, setIntroduction] = useState(true);
  return (
    <div className="flex w-4/5 mx-auto font-mono ">
      {introduction ? (
        <Introduction setIntroduction={setIntroduction}></Introduction>
      ) : (
        <ReactQuery />
      )}
    </div>
  );
}

export default App;
