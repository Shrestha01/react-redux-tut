import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import React, { useState, useEffect } from "react";
import Pagenotfound from "./Pagenotfound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

// style in React js
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [b, sb] = useState(false);

  function buttonclicked() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=380ebd52204831bfb130396f5cdf1228`;
    fetch(url).then((result) => {
      result.json().then((resp) => {
        setData({
          temp: resp?.main?.temp - 273.15,
          weath: resp?.weather[0]?.description,
        });
        sb(true);
      });
    });
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      <br />

      <button onClick={buttonclicked}>Check weather</button>
      <br />
      {b ? (
        <div>
          <h1>Weather Details</h1>
          <h2>
            {data.weath} <br />
            Temperature: {data.temp}
          </h2>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;

// <Router>
//         <Nav>
//           <Link to="/home">home</Link>
//           <Link to="/about">About us</Link>
//         </Nav>

//         <Routes>
//           <Route path="/home" element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//         </Routes>
//       </Router>
