import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Tasks from './components/tasks/tasks.component';
import AddTask from './components/add-task/add-task.component';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Tasks} />
          <Route path="/add-task" component={AddTask} />
        </Switch>
      </div>
    </>
  );
}

export default App;
