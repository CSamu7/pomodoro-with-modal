import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <div className="App">
      <Pomodoro initialTime={1} title="Pomodoro"></Pomodoro>
    </div>
  );
}

export default App;
