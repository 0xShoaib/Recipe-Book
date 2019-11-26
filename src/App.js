import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./Component/Homepage/HomePage";
import Recipe from "./Component/Recipe/Recipe";
import VideoWatchPage from "./Component/WatchPage/VideoWatchPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/recipe/:recipeId" component={VideoWatchPage} />
          <Route path="/recipe" component={Recipe} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
