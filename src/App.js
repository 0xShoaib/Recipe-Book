import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./Component/Homepage/HomePage";
import Recipe from "./Component/Recipe/Recipe";
import VideoWatchPage from "./Component/WatchPage/VideoWatchPage";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/recipe/:recipeId" component={VideoWatchPage} />
          <Route path="not-found" component={NotFound} />
          <Route path="/recipe" component={Recipe} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
