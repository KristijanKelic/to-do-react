import React from 'react';

import Header from './components/header/header.component';
import AddTask from './components/add-task/add-task.component';
import Tasks from './components/tasks/tasks.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
