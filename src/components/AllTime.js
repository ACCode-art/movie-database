import React from "react";
import "./AllTime.css";
import requests from "../requests";
import Hero from "./Hero";
import Trending from "./Trending";

function AllTime({ setShow, setMovieInfo }) {
  return (
    <div className="allTime">
      <Hero
        src="https://i.pinimg.com/originals/be/e0/b4/bee0b41561164c5cf6318c0be184b195.jpg"
        title="The Lord of the Rings"
        desc="An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf..."
      />
      <Trending
        category="All Time"
        fetchURL={requests.fetchTopRated}
        setShow={setShow}
        setMovieInfo={setMovieInfo}
      />
    </div>
  );
}

export default AllTime;
