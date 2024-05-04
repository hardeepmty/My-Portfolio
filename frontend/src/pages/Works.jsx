import React from 'react';
import { Typography } from '@mui/material';

const Works = () => {
    const links = {
        iceCream: 'https://ice-cream-alpha.vercel.app/',
        tastify: 'https://tastify-4.netlify.app/',
        illumina: 'https://illumina-2k24.vercel.app/',
        portfolio: 'https://example.com/portfolio',
        pokemon: 'https://github.com/hardeepmty/pokemon'
    };

    const renderProject = (link, imgSrc, title, description, techStack) => (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                textAlign: 'center',
                marginBottom: '20px',
                textDecoration: 'none',
                width: '100%',
                maxWidth: '350px',
            }}
        >
            <img
                src={imgSrc}
                alt={title}
                style={{
                    width: '100%',
                    borderRadius: '20px',
                }}
            />
            <Typography sx={{ color: 'silver', marginTop: '2px', fontFamily: "Montserrat" }}>
                {title}
            </Typography>
            <Typography variant='caption' sx={{ color: '#757575', marginTop: '2px', fontFamily: "Montserrat"}}>
                {description}
            </Typography>
            <br></br>
            <Typography variant='caption' sx={{ color: 'white', marginTop: '2px', fontFamily: "Montserrat", fontWeight:"700" }}>
                TECH STACK: {techStack}
            </Typography>
            <hr
                style={{
                    marginTop: '10px', 
                    border: '1px solid white', 
                    width: '80%', 
                }}
            />
        </a>
    );

    return (
        <div
            style={{
                backgroundColor: 'black',
                paddingTop: '100px',
                paddingLeft: '10px',
                paddingRight: '10px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {renderProject(links.iceCream, '/images/icecream.png', 'ICE CREAM', 'Explore Chill Delights, an ice cream website with stunning Spline visuals for captivating shopping experience.', 'React, Spline, Material UI')}
            {renderProject(links.tastify, '/images/tastify.png', 'TASTIFY', 'Tastify simplifies food ordering with a variety of delicious dishes and seamless delivery, bringing culinary delights directly to your door.', 'MongoDB, ExpressJS, ReactJS, NodeJS')}
            {renderProject(links.illumina, '/images/illumina.png', 'ILLUMINA 2024', 'Illumina: VSSUT College Sports Fest Website', 'Vite, NextJS, Typescript, Material UI')}
            {renderProject(links.portfolio, '/images/portfolio.png', 'PORTFOLIO', 'Explore my portfolio website, where I blend creativity with technology to deliver exceptional digital experiences.', 'React, Material UI')}
            {renderProject(links.pokemon, '/images/pokemon.JPG', 'POKEMON', 'Discover a Pokémon API-powered website with stunning design, offering comprehensive Pokédex information and engaging games for all Pokémon enthusiasts.', 'HTML, CSS, JS, API')}
        </div>
    );
};

export default Works;
