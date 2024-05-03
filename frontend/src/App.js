import React from 'react'
import HeroPage from './pages/HeroPage'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <Projects/>
    </div>
  )
}

export default App
