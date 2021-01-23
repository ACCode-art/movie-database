import React, { useEffect } from "react";
import "./Movie.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Movie({ src, title, desc, rating, name, setMovieInfo, setShow }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function infoState() {
    setMovieInfo([
      {
        title: title,
        name: name,
        desc: desc,
      },
    ]);
  }

  return (
    <div className="movie" data-aos="fade-left">
      <img className="movie__img" src={src} alt="not rendering" />
      <div className="movie__overlay movie__overlay__blur" onClick={infoState}>
        <h3 className="movie__overlayTitle">
          {truncate(title, 25)}
          {name}
        </h3>
        <hr />
        <p className="movie__overlayDesc">{truncate(desc, 150)}</p>
        <p
          className={
            rating > 6.9 ? "movie__overlayRatingOver" : "movie__overlayRating"
          }
        >
          {rating * 10}%
        </p>
        <p className="movie__more" onClick={() => setShow(true)}>
          More info...
        </p>
      </div>
      <div className="div"></div>
    </div>
  );
}

export default Movie;
