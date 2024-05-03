import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroPage from './pages/HeroPage'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'
import Footer from './pages/Footer'
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <TechStack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
