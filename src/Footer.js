import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <p className="coder-sources">
        This project was coded by{" "}
        <a href="https://github.com/lindijor">Lindis Jørgensen</a> and is{" "}
        <a href="https://github.com/lindijor/weather-application-project">
          on GitHub
        </a>{" "}
        and{" "}
        <a href="https://fluffy-pixie-20fd82.netlify.app/">hosted on Netlify</a>
        .
      </p>
    </div>
  );
}
