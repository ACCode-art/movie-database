import { Avatar } from "@material-ui/core";
import { Movie, Star, Whatshot } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

function Header({ setShow }) {
  return (
    <div className="header">
      <div className="header__left" onClick={() => setShow(false)}>
        <Link to="/">
          <Movie />
        </Link>
      </div>
      <div className="header__center" onClick={() => setShow(false)}>
        <Link to="/trending">
          <Tippy content="Trending">
            <Whatshot className="icon" />
          </Tippy>
        </Link>
        <Link to="netflix">
          <Tippy content="Top Netflix">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F11%2FNetflix-Logo-png.png&f=1&nofb=1"
              alt=""
              className="icon"
            />
          </Tippy>
        </Link>
        <Link to="/top">
          <Tippy content="All Time Best">
            <Star className="icon" />
          </Tippy>
        </Link>
      </div>
      <div className="header__right" onClick={() => setShow(false)}>
        <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pastemagazine.com%2Fwww%2Farticles%2FPeter%2520Dinklage%2520thumbs%2520up_Emma%2520McIntyre%2520Getty_main.jpg&f=1&nofb=1" />
      </div>
    </div>
  );
}

export default Header;
