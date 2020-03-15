import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/main.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path="/" component={Home}/>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
