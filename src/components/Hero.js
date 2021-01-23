import React from "react";
import "./Hero.css";

function Hero({ src, title, desc }) {
  return (
    <div className="hero" data-aos="fade-left">
      <img className="hero__img" src={src} alt={title} />
      <div className="hero__overlay">
        <h1 className="hero__overlayTitle">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Hero;
