import React from "react";
import "./Days.css";

export default function Days() {
  return (
    <div className="days-grid">
      <p className="weather-forecast">
        Sunday
        <br />
        <img src="../images/rainy.png" alt="" />
      </p>
      <p className="weather-forecast">
        Monday
        <br />
        <img src="../images/cloudy.png" alt="" />
      </p>
      <p className="weather-forecast">
        Tuesday
        <br />
        <img src="../images/cloudy.png" alt="" />
      </p>
      <p className="weather-forecast">
        Wednesday
        <br />
        <img src="../images/rainy.png" alt="" />
      </p>
      <p className="weather-forecast">
        Thursday
        <br />
        <img src="../images/rainy.png" alt="" />
      </p>
    </div>
  );
}
