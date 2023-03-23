import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Pomodoro"></Header>
      <Pomodoro initialTime={1}></Pomodoro>
      <Footer description="Github: https://github.com/CSamu7/pomodoro-with-modal"></Footer>
    </div>
  );
}

export default App;
