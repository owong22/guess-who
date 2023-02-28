import { useState, createContext } from "react";
import "./App.css";
import Introduction from "./Introduction";

import { ReactQuery } from "./ReactQuery";

function App() {
  const [introduction, setIntroduction] = useState(true);
  return (
    <div className="flex justify-center m-10 font-mono">
      {introduction ? (
        <Introduction setIntroduction={setIntroduction}></Introduction>
      ) : (
        <ReactQuery />
      )}
    </div>
  );
}

export default App;
