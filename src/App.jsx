
import { Router, Routes, Route } from "react-router-dom"
import AboutSection from "./Components/AboutSection"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Contact from "./Components/Contact"
import About from "./Components/About"
import { useState } from "react"
import "./App.css";


function App() {
  const [language, setLanguage] = useState("EN");
  return (
    <><Navbar language={language} setLanguage={setLanguage} /> <Hero /> <Cards /> <About language={language}/> <Contact language={language}/> <Footer />

    </>
  );
}

export default App
