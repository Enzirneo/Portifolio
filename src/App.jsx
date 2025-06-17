import React from 'react';
import './App.css'

import Header from './components/Header/index.jsx';
import Hero from './components/Hero/index.jsx';
import Skills from './components/Skills/index.jsx';
import Projects from './components/Projects/index.jsx';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Skills/>
      <Projects/>
    </>
  );
}

export default App;