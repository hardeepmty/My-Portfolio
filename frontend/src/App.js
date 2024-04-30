import React from 'react'
import HeroPage from './pages/HeroPage'
import Navbar from './components/Navbar'
import Body from './pages/Body'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <HeroPage/> */}
      <Body/>
    </div>
  )
}

export default App
