import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <a href='https://github.com/hardeepmty'>
          <img src='/images/github.png' alt='Github icon' style={{ width: '25px', height: '25px' }} />
        </a>
        <a href='https://www.instagram.com/hardeep.04/'>
          <img src='/images/insta.png' alt='Instagram icon' style={{ width: '25px', height: '25px' }} />
        </a>
        <a href='https://www.linkedin.com/in/hardeep-mohanty-9a0a33253/'>
          <img src='/images/linkedin.png' alt='LinkedIn icon' style={{ width: '25px', height: '25px' }} />
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:"15px" }}>
        <Typography variant='h5' style={{ color: '#404040', fontFamily: 'Montserrat', marginRight: '10px' }}>
          Exploring
        </Typography>
        <img src='/images/explore.png' alt='Explore icon' style={{ height: '30px', width: '30px' }} />
      </div>
      <div style={{textAlign:"center", marginTop:"10px", marginBottom:"12px"}}>
        <Typography variant='caption' sx={{color:"#404040", fontFamily:"Montserrat", fontWeight:"500"}}>© 2024 Hardeep Mohanty. All Rights Reserved.</Typography>
      </div>
    </div>
  );
};

export default Footer;
