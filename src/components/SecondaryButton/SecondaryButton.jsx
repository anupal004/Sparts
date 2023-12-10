/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const SecondaryButton = ({ className }) => {
  return (
    <div className={`secondary-button ${className}`}>
      <div className="text-wrapper">Last 30 days</div>
      <img className="line" alt="Line" src="/img/line-6-1.svg" />
      <img className="icon-navigation" alt="Icon navigation" src="/img/icon-navigation-arrow-drop-down-24px-1.svg" />
    </div>
  );
};
