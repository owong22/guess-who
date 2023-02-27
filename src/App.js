import { useState, createContext } from "react";
import "./App.css";

import { useQuery, useMutation } from "@tanstack/react-query";
import { ReactQuery } from "./ReactQuery";

const POSTS = [{ id: 1, title: "Post 1", id: 2, title: "Post 2" }];

export const personQuotedContext = createContext();

function App() {
  const [personQuoted, setPersonQuoted] = useState("");

  return (
    <personQuotedContext.Provider value={{}}>
      <ReactQuery />
    </personQuotedContext.Provider>
  );
}

export default App;
