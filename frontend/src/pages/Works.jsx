import React from 'react';
import { Typography } from '@mui/material';

const Works = () => {
    const links = {
        cortex:"https://cortex-sable.vercel.app/",
        workday: "https://workdayy.netlify.app/",
        iceCream: 'https://ice-cream-alpha.vercel.app/',
        tastify: 'https://tastify-4.netlify.app/',
        illumina: 'https://illumina-2k24.vercel.app/',
        portfolio: 'https://example.com/portfolio',
        pokemon: 'https://pokemon-webcentric.netlify.app/',
        certify: 'https://certify-csv.netlify.app/',
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
                    border: '1px solid silver', 
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
            {renderProject(links.cortex, '/images/cortex.png', 'CORTEX', 'Cortex is an AI platform offering a variety of predefined AI agents and models. Users can create custom models and engage in single or group chats with multiple AI agents.', 'React, Flask, Python')}
            {renderProject(links.workday, '/images/workday.png', 'WORKDAY', 'A hiring platform for Employers and Job Seekers with CV uploads for job seekers, job listing creation for employers, and AI-driven career suggestions for personalized job matching.', 'MERN, Cloudinary, Gemini API')}
            {renderProject(links.tastify, '/images/tastify.png', 'TASTIFY', 'Tastify simplifies food ordering with a variety of delicious dishes and seamless delivery, bringing culinary delights directly to your door.', 'MongoDB, ExpressJS, ReactJS, NodeJS')}
            {renderProject(links.certify, '/images/certify.png', 'CERTIFY', 'Certify is an online platform for creating certificates, with a bulk generation feature that lets you upload a CSV file to quickly produce certificates for multiple candidates.', 'MERN, pdf-lib, csv-parser, multer, adm-zip')}
            {renderProject(links.iceCream, '/images/icecream.png', 'ICE CREAM', 'Explore Chill Delights, an ice cream website with stunning Spline visuals for captivating shopping experience.', 'React, Spline, Material UI')}
            {renderProject(links.illumina, '/images/illumina.png', 'ILLUMINA 2024', 'Illumina: VSSUT College Sports Fest Website', 'Vite, NextJS, Typescript, Material UI')}
            {renderProject(links.portfolio, '/images/portfolio.png', 'PORTFOLIO', 'Explore my portfolio website, where I blend creativity with technology to deliver exceptional digital experiences.', 'React, Material UI')}
            {renderProject(links.pokemon, '/images/pokemon.png', 'POKEMON', 'Discover a Pokémon API-powered website with stunning design, offering comprehensive Pokédex information and engaging games for all Pokémon enthusiasts.', 'HTML, CSS, JS, API')}
        </div>
    );
};

export default Works;
