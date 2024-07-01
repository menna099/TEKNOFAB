
import { Router, Routes,Route } from "react-router-dom"
import AboutSection from "./Components/AboutSection"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Contact from "./Components/Contact"


function App() {

  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Hero /><Cards /><AboutSection /><Footer /></>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App
