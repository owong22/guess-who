import { useEffect, useState, useContext, createContext, useRef } from "react";
import "./App.css";
import PersonImage from "./PersonImage";

function App() {
  return (
    <div className="bg-blue-200">
      <PersonImage newPerson="jackson" />
    </div>
  );
}

export default App;
