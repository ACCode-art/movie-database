import React from "react";
import "./PopUp.css";

function PopUp({ title, name, desc, show, setShow }) {
  return (
    <div
      className="popUp"
      style={{
        display: show ? "block" : "none",
      }}
    >
      <div className="popUp__button">
        <button onClick={() => setShow(false)}>x</button>
      </div>

      <h1>
        {title}
        {name}
      </h1>

      <p>{desc}</p>
    </div>
  );
}

export default PopUp;
