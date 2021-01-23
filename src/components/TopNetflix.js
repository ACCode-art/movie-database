import React from "react";
import "./TopNetflix.css";
import requests from "../requests";
import Hero from "./Hero";
import Trending from "./Trending";

function TopNetflix({ setShow, setMovieInfo }) {
  return (
    <div className="topNetflix">
      <Hero
        src="https://i.redd.it/7i0cjvn3kd8z.jpg"
        title="Castlevania"
        desc="When Lisa Tepes, beloved wife of Vlad Tepes AKA Dracula is acused of witchcraft and burned at the stake by an overzealous bishop, Dracula declares war on the people of Wallachia and unleashes an army of murderous demonic creatures from hell. Luckily, Trevor Belmont, last survivor of the Belmont clan, a disgraced family known for hunting all kinds of monsters, is still in town and agrees to take the fight to the lord of vampires"
      />
      <Trending
        category="Top Netflix"
        fetchURL={requests.fetchNetflixOriginals}
        setShow={setShow}
        setMovieInfo={setMovieInfo}
      />
    </div>
  );
}

export default TopNetflix;
