import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Tasks from "./components/tasks/tasks.component";
import FinishedTasks from "./components/finished-tasks/finished-tasks.component";
import PageNotFound from "./components/not-found/not-found.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Tasks} />
        <Route path="/finished" exact component={FinishedTasks} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
