import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroPage from './pages/HeroPage';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Works from './pages/Works'; // Import the Works page

const App = () => {
    return (
        <Router>
            <Navbar />
            
            <Routes>
                <Route path="/" element={(
                    <>
                        <HeroPage />
                        <TechStack />
                        <Projects />
                        <Contact />
                        <Footer />
                    </>
                )} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </Router>
    );
};

export default App;
