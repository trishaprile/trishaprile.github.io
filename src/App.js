import React from 'react';
import './App.css';

import NavigationBar from "./components/Navbar";
import Cover from "./components/Cover";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => { 
  return (
    <div className="App">
      <NavigationBar />
      <Cover />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;