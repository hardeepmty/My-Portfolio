import React from 'react'
import HeroPage from './pages/HeroPage'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <TechStack/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
