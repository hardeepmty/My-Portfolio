import React from 'react';
import { Button, Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './Projects.css';
import { imageUrls } from "../lib/data/works"

const Projects = () => {
  
  const continuousImageUrls = [...imageUrls, ...imageUrls];

  return (
    <div className='pro'>

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
        <Typography variant='h5' sx={{ color: '#E6E6E6', fontWeight: '500', fontFamily: 'Montserrat' }}>Works Gallery</Typography>

        <div className="marquee-container">
          <div className="marquee">
            {continuousImageUrls.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index + 1}`} style={{borderRadius:"10px", height:"200px"}}/>
            ))}
          </div>
        </div>

        <Button variant="contained" sx={{ bgcolor: '#A291FD',  color: 'black',mt:"-25px", size:"medium",fontFamily:"Montserrat",fontWeight:"500", border:"2px solid #191919" }}>
            View Works
          </Button>

      </div>
    </div>
  );
};

export default Projects;
