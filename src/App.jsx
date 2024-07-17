import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import './App.css';
import ProductDetails from './Components/ProductDetails';
import RobotPalletizers from './Components/RobotPalletizers';
import PackingMachines from './Components/PackingMachines';
import RobotPacking from './Components/RobotPacking';
import TopLoadCasePacker from './Components/TopLoadCasePacker';

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'EN');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home language={language} setLanguage={setLanguage} />} />
        <Route path="/about" element={<About language={language} setLanguage={setLanguage} />} />
        <Route path="/contact" element={<Contact language={language} setLanguage={setLanguage} />} />
        <Route path='/robot-palletizers' element={<RobotPalletizers language={language} setLanguage={setLanguage} />} />
        <Route path='/packing-machines' element={<PackingMachines language={language} setLanguage={setLanguage} />} />
        <Route path='/robot-packing' element={<RobotPacking language={language} setLanguage={setLanguage} />} />
        <Route path='/products-details' element={<ProductDetails language={language} setLanguage={setLanguage} />} />
        <Route path='/case-packer' element={<TopLoadCasePacker language={language} setLanguage={setLanguage} />} />

      </Routes>
    </Router>
  );
}

export default App;
