import React, { Component } from 'react';
import './App.css';

import NavigationBar from './components/navbar';
import Cover from './components/cover';
// import About from './components/about';
// import Work from './components/work';
// import Experience from './components/experience';
// import Contact from './components/contact';
// import Icon from './assets/Icon.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <a href="/"><img className="icon" src={Icon} alt="Logo"/></a> */}
        <NavigationBar/>
        <Cover/>
        {/* <About/> */}
        {/* <Work/>
        <Experience/>
        <Contact/> */}
      </div>
    );
  }
}
export default App;
