import React from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Me-API Playground</h1>
          <p>Personal Profile & Projects Showcase</p>
        </header>
        
        <Profile />
        <Projects />
      </div>
    </div>
  );
}

export default App;
