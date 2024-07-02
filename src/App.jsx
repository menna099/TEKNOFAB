import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import './App.css';

function App() {
  const [language,setLanguage] = useState("EN")
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home language={language} setLanguage={setLanguage}/>} />
        <Route path="/about" element={<About language={language} setLanguage={setLanguage}/>} />
        <Route path="/contact" element={<Contact language={language} setLanguage={setLanguage}/>} />
        </Routes>
    </Router>
  );
}

export default App;
