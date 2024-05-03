import React from 'react'
import HeroPage from './pages/HeroPage'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <TechStack/>
      <Projects/>
    </div>
  )
}

export default App
