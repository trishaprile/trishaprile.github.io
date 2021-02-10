import React, { Component } from 'react';
import './App.css';

import NavigationBar from './components/navbar';
import Cover from './components/cover';
import About from './components/about';
import Experience from './components/experience';
import Work from './components/work';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Cover />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    );
  }
}
export default App;
