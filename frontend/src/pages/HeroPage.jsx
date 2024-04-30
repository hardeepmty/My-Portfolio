import React, { useState, useEffect } from 'react';
import './Hero.css';

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

    // Determine if scrolled based on scroll position
    const isScrolled = scrollPosition > 50;

    return (
        <div>
            <div className="hero">
                <div
                    id="hero-text"
                    style={{
                        position: isScrolled ? 'absolute' : 'static',
                        bottom: isScrolled ? '5%' : 'auto',
                        left: isScrolled ? '0%' : '0%',
                        transform: isScrolled ? 'none' : '',
                        textAlign: 'left',
                        marginLeft: isScrolled ? '' : '5%',
                    }}
                >
                    <h1 id="line1" style={{ fontSize: isScrolled ? '3vw' : '10vw' }}>HARDEEP</h1>
                    <h1 id="line2" style={{ fontSize: isScrolled ? '3vw' : '10vw' }}>M.</h1>
                </div>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vel ligula vehicula egestas...</p>
            </div>
        </div>
    );
}

export default HeroPage;
