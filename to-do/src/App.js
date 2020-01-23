import React from 'react';

import Header from './components/header/header.component';
import InfoText from './components/info/info.component';
import Tasks from './components/tasks/tasks.component';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <InfoText />
        <Tasks />
      </div>
    </>
  );
}

export default App;
