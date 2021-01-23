import React from "react";
import "./MainSection.css";
import Trending from "./Trending";
import requests from "../requests";
import Hero from "./Hero";

function MainSection({ setMovieInfo, setShow }) {
  return (
    <div className="mainSection">
      <Hero
        src="https://www.hdwallpapers.in/download/the_clone_wars_4k_hd_star_wars_the_clone_wars-1600x900.jpg"
        title="Star Wars: The Clone Wars"
        desc="Chronicling the events that took place between Star Wars: Episode II - Attack of the Clones (2002) and Star Wars: Episode III - Revenge of the Sith (2005), this show follows the wartime days of Anakin Skywalker (Matt Lanter), Obi-wan Kenobi (James Arnold Taylor), and Yoda (Tom Kane). This show also brings new characters to the forefront of Star Wars canon, including Anakins apprentice Ahsoka Tano (Ashley Eckstein), and Captain Rex (Dee Bradley Baker)."
      />
      <Trending
        category="Trending"
        fetchURL={requests.fetchTrending}
        setMovieInfo={setMovieInfo}
        setShow={setShow}
      />
    </div>
  );
}

export default MainSection;
