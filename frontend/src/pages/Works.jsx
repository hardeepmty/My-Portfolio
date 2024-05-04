import React from 'react';
import { Typography } from '@mui/material';

const Works = () => {
    const links = {
        iceCream: 'https://example.com/icecream',
        tastify: 'https://example.com/tastify',
        illumina: 'https://example.com/illumina',
        portfolio: 'https://example.com/portfolio',
        pokemon: 'https://example.com/pokemon' 
    };

    const renderProject = (link, imgSrc, title, description) => (
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
            <Typography sx={{ color: 'white', marginTop: '2px' }}>
                {title}
            </Typography>
            <Typography sx={{ color: 'white', marginTop: '2px' }}>
                {description}
            </Typography>
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
            {renderProject(links.iceCream, '/images/icecream.png', 'ICE CREAM', 'dbfjksbvvjvfjdf')}
            {renderProject(links.tastify, '/images/tastify.png', 'TASTIFY', 'dbfjksbvvjvfjdf')}
            {renderProject(links.illumina, '/images/illumina.png', 'ILLUMINA', 'dbfjksbvvjvfjdf')}
            {renderProject(links.portfolio, '/images/portfolio.png', 'PORTFOLIO', 'dbfjksbvvjvfjdf')}
            {renderProject(links.pokemon, '/images/pokemon.JPG', 'POKEMON', 'dbfjksbvvjvfjdf')}
        </div>
    );
};

export default Works;
