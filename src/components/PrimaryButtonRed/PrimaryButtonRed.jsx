/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const PrimaryButtonRed = ({ className }) => {
  return (
    <div className={`primary-button-red ${className}`}>
      <div className="div">Add Students</div>
      <img className="path" alt="Path" src="/img/path.svg" />
    </div>
  );
};
