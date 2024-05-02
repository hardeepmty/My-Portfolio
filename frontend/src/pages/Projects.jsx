import { Typography } from '@mui/material';
import React from 'react';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './Projects.css';

const Projects = () => {
  return (
    <div>
    <div className='projects'
      style={{
        maxWidth: '600px', 
        margin: '30px 10px',
        top:"20px",
        padding: '15px',
        gap: '10px',
        display: 'flex',
        borderRadius: '20px',
        backgroundColor: '#101010',
        textAlign:"center",
        justifyContent:"center"
      }}
    >
      <Typography variant='h5' sx={{color:"#404040",fontWeight:"500", fontFamily:"Montserrat"}}><AccountTreeIcon sx={{fontSize:"large", color:"#A291FD"}}></AccountTreeIcon> Projects</Typography>
    </div>
 
    </div>
  );
};

export default Projects;
