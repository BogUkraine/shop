import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/main.scss';

import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path="/" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
