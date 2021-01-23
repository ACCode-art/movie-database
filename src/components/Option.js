import { Whatshot } from "@material-ui/icons";
import React from "react";
import "./Option.css";

function Option({ title }) {
  return (
    <div className="option">
      <Whatshot />
      <h3>{title}</h3>
    </div>
  );
}

export default Option;
