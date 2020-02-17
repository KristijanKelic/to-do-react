import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Tasks from "./components/tasks/tasks.component";
import FinishedTasks from "./components/finished-tasks/finished-tasks.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Tasks} />
        <Route path="/finished" component={FinishedTasks} />
      </Switch>
    </div>
  );
}

export default App;
