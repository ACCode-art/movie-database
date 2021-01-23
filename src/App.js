import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import TopNetflix from "./components/TopNetflix";
import AllTime from "./components/AllTime";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopUp from "./components/PopUp";

function App() {
  const [movieInfo, setMovieInfo] = useState([
    {
      title: "",
      name: "",
      desc: "",
    },
  ]);

  const [show, setShow] = useState(false);

  console.log(movieInfo);
  return (
    <Router>
      <div className="app">
        <Header setShow={setShow} />

        <Switch>
          <Route path="/" exact>
            <MainSection setMovieInfo={setMovieInfo} setShow={setShow} />
          </Route>
          <Route path="/trending" exact>
            <MainSection setMovieInfo={setMovieInfo} setShow={setShow} />
          </Route>

          <Route path="/netflix" exact>
            <TopNetflix setShow={setShow} setMovieInfo={setMovieInfo} />
          </Route>
          <Route path="/top" exact>
            <AllTime setShow={setShow} setMovieInfo={setMovieInfo} />
          </Route>
        </Switch>
        <PopUp
          title={movieInfo[0].title}
          name={movieInfo[0].name}
          desc={movieInfo[0].desc}
          show={show}
          setShow={setShow}
        />
      </div>
    </Router>
  );
}

export default App;
