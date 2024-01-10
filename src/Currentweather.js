import React from "react";
import "./Currentweather.css";

export default function Currentweather() {
  return (
    <div className="weather-grid">
      <h1 id="current-city">Oslo</h1>
      <br />
      <h1>
        <span id="current-temperature-value">9°C</span>
        <img src="../images/cloudy.png" alt="" />
      </h1>
      <h2 id="current-date">
        Saturday, 2pm <br />
        Currently: Sunny
      </h2>
    </div>
  );
}
