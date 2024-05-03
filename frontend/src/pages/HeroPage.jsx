import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import PlaceIcon from '@mui/icons-material/Place';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AbcIcon from '@mui/icons-material/Abc';
import ComputerIcon from '@mui/icons-material/Computer';
import TypingAnimation from './TypingAnimation';
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

    const isScrolled = scrollPosition > 50;

    return (
        <div className="container" style={{ fontFamily: "Montserrat" }}>
            <div className='pic' style={{ maxWidth: "120px" }}>
                <img src='/images/raj.png' alt='Hardeep Mohanty' style={{ width: "120px", borderRadius: "10px", border: "2px solid #757575", backgroundColor: "#A291FD" }} />

                <div style={{ borderRadius: "10px", marginTop: "0px", lineHeight: "20px", padding: "5px 3px", border: "0.2px solid  #757575" }}>
                    <p style={{ backgroundColor: "#191919", width: "80%", padding: "2px", borderRadius: "5px", border: "1px solid #757575", marginLeft: "10px", color: "#757575" }}>
                        <AdjustIcon sx={{ fontSize: "small", color: "green" }} />Available
                    </p>
                    <p style={{ backgroundColor: "#191919", width: "70%", padding: "2px", borderRadius: "5px", border: "1px solid #757575", marginLeft: "10px", color: "#757575" }}>
                        <PlaceIcon sx={{ fontSize: "small", color: "#A291FD" }} />Odisha
                    </p>
                    <p style={{ backgroundColor: "#191919", width: "80%", padding: "2px", borderRadius: "5px", border: "1px solid #757575", marginLeft: "10px", color: "#757575" }}>
                        <AssuredWorkloadIcon sx={{ fontSize: "small", color: "#A291FD" }} />VSSUT
                    </p>
                    <p style={{ backgroundColor: "#191919", width: "80%", padding: "2px", borderRadius: "5px", border: "1px solid #757575", marginLeft: "10px", color: "#757575" }}>
                        <ComputerIcon sx={{ fontSize: "small", color: "#A291FD" }} />CSE
                    </p>
                    <p style={{ backgroundColor: "#191919", width: "80%", padding: "2px", borderRadius: "5px", border: "1px solid #757575", marginLeft: "10px", color: "#757575" }}>
                        <AbcIcon sx={{ fontSize: "small", color: "#A291FD" }} />Developer
                    </p>
                </div>
                <img src='/images/PNG.gif' alt='GIF' style={{ width: "115px", borderRadius: "10px", height: "70px", marginLeft: "2px", marginTop: "5px", border: "2px solid #757575" }} />
            </div>
            <div className='about' style={{ borderRadius: "10px" }}>
                <Typography variant="h5" sx={{ margin: "5px", fontFamily: "Montserrat", fontWeight: "700", color: "#e6e6e6" }}>
                    Hardeep Mohanty
                </Typography>
                <div style={{height:"45px"}}>
                <Typography sx={{ display: 'flex', alignItems: 'center', margin: '5px', fontFamily: 'Montserrat', color: 'silver', fontWeight:"400" }}>
                    I'm a&nbsp;
                    <TypingAnimation
                        words={['DEVELOPER', 'DESIGNER']}
                        sx={{ fontFamily: 'Montserrat', color: '#bbaffe'}}
                    />
                </Typography>
                </div>
                <Typography sx={{ margin: '5px', fontFamily: 'Montserrat', color: '#757575' }}>
                    My name is Hardeep, and I am a Web Developer. I am currently working with ReactJS, NodeJS, and NextJS. I also know C++ and Python. I like Photography and Football. I am currently available for work and looking out for internships, so please feel free to contact me.
                </Typography>
            </div>
        </div>
    );
}

export default HeroPage;
