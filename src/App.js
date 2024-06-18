// src/App.js
import React from 'react';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <section id="home">Home Content</section>
        <section id="about">About Content</section>
        <section id="services">Services Content</section>
        <section id="contact">Contact Content</section>
      </div>
    </div>
  );
}

export default App;
