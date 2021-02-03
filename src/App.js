import React, { Component } from 'react';
import './App.css';

import Cover from './components/cover';
import About from './components/about';
import Work from './components/work';
import Experience from './components/experience';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover/>
        <About/>
        {/* <Work/>
        <Experience/>
        <Contact/> */}
      </div>
    );
  }
}
export default App;
