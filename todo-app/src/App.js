import React from 'react'
import Todos from "./Todos"
import Navbar from "./Navbar"
import Footer from "./Footer"
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar/>
      
      <Todos/>
      <Footer/>
      <div className="app__overlay"></div>
      
    </div>
  );
}

export default App;
