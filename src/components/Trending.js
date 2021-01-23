import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Trending.css";
import Movie from "./Movie";
import Aos from "aos";
import "aos/dist/aos.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Trending({ fetchURL, category, setMovieInfo, setShow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div className="trending" data-aos="fade-in">
      <h1>{category}</h1>
      <div className="trending__movies" data-aos="fade-in">
        {movies.map((movie) => (
          <Movie
            src={`${base_url}${movie.poster_path}`}
            title={movie.title}
            name={movie.name}
            rating={movie.vote_average}
            desc={movie.overview}
            key={movie.id}
            setMovieInfo={setMovieInfo}
            setShow={setShow}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;
