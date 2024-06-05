import React from 'react';

import { Footer, Blog, Features, Whatis, Header } from './containers';
import { Details, Navbar } from './components';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Whatis />
      <Features />
      <Details />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
