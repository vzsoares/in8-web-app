import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profiler from "./components/Profiler";
import Form from "./components/Form";

function App() {
  return (
    <div className='App'>
      <Profiler />
      <Form />
    </div>
  );
}

export default App;
