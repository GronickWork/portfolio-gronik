import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ShowSert from './components/ShowSert/ShowSert';

function App() {
  return (
    <div className="App">
      <Header/>
      <ShowSert/>
      <Main/>
    </div>
  );
}

export default App;
