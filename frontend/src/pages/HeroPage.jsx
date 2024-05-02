import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Button } from '@mui/material';

function HeroPage() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isScrolled = scrollPosition > 50;

    return (
        <div className="container"> 
            
        </div>
    );
}

export default HeroPage;
