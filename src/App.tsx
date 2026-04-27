import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ShowSert from './components/ShowSert/ShowSert';
import Footer from './components/footer/Footer';
import ButtonTop from './components/button-top/Button_top';

function App() {
  return (
    <div className="App">
      <Header/>
      <ShowSert/>
      <Main/>
      <Footer/>
      <ButtonTop/>
    </div>
  );
}

export default App;
