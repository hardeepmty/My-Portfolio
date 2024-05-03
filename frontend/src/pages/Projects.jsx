import React from 'react';
import { Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './Projects.css';
import { imageUrls } from "../lib/data/works"

const Projects = () => {
  return (
    <div>
      <div className='projects'
        style={{
          maxWidth: '600px',
          margin: '30px 10px',
          padding: '15px',
          gap: '10px',
          display: 'flex',
          flexDirection: 'column', 
          borderRadius: '20px',
          backgroundColor: '#101010',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        
        <Typography variant='h5' sx={{ color: '#404040', fontWeight: '500', fontFamily: 'Montserrat' }}>
          <AccountTreeIcon sx={{ fontSize: 'large', color: '#A291FD' }} />
          Projects
        </Typography>

        
        <div className="marquee-container">
          <div className="marquee">
            {imageUrls.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
