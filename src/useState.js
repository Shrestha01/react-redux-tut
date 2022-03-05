import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("Adarsha");
  return (
    <div className="App">
      <h1>Hello {data}</h1>
      <button onClick={() => setData("Shrestha")}> Update Data</button>
    </div>
  );
}

export default App;
