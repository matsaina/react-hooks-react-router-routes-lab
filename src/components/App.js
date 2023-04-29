import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route path="/" component={Home} />
        <Route path="/Actors" component={Actors} />
        <Route path="/Directors" component={Directors} />
        <Route path="/Movies" component={Movies} />
      </Router>
    </div>
  );
}

export default App;
