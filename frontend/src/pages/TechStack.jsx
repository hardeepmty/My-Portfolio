import React from 'react';
import { Typography } from '@mui/material';
import TableRowsSharpIcon from '@mui/icons-material/TableRowsSharp';
import { tech } from '../lib/data/tech'; 
import './TechStack.css';                    

const TechStack = () => {
  return (
    <div className='tech'>
    <div
    className='techstack'
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
      }}>
      <Typography variant='h5' sx={{ color: '#404040', fontWeight: '500', fontFamily: 'Montserrat' }}>
        <TableRowsSharpIcon sx={{ fontSize: 'large', color: '#A291FD' }} />
        Tech Stack
      </Typography>
      

      
      <div className='tech-gallery' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
        {tech.map((techItem, index) => (
          <div key={index} className='tech-item' style={{ display: 'flex', alignItems: 'center',backgroundColor:"#191919", borderRadius:"10px"}}>
            
            <img src={techItem.image} alt={`${techItem.name} logo`} style={{ borderRadius: '10px', height: '30px', width: '30px', margin: '5px' }} />

            
            <Typography variant='h9' sx={{ color: '#E6E6E6', fontWeight: '500', fontFamily: 'Montserrat',padding:"3px" }}>
              {techItem.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TechStack;
