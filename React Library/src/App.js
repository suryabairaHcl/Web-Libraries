import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/navigation.js';
import Footer from './components/footer.js';
import Section from './components/section.js';
import Sidebar from './components/sidebar.js';
import Sidemenu from './components/sidemenu.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Sidebar/>
        <Section/>
         <Sidemenu/>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
