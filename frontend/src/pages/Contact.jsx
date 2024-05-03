import { Typography } from '@mui/material';
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='con'>
      <div className='contact'
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <img src='/images/coder.png' alt='Explore icon' style={{ height: '30px', width: '30px' }} />
          <Typography variant='h5' style={{ color: '#404040', fontFamily: 'Montserrat', marginRight: '10px' }}>
            Contact Me
          </Typography>
          <Typography variant='body3' style={{ color: 'silver', fontFamily: 'Montserrat', marginRight: '10px', marginTop: '10px' }}>
            Let's Work Together
          </Typography>

          {/* "Mail Me" section */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px', backgroundColor: '#191919', padding: '5px', width: '300px', borderRadius: '10px', marginTop: '20px' }}>
            <img src='/images/mail.png' alt='Mail icon' style={{ borderRadius: '10px', height: '30px', width: '30px', marginRight: '10px' }} />
            <a href="mailto:mohanty4raj@gmail.com" style={{ textDecoration: 'none', color: 'silver', fontFamily: 'Montserrat', cursor: 'pointer' }}>
              Send a mail
            </a>
          </div>

          {/* "Call Me" section */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px', backgroundColor: '#191919', padding: '5px', width: '300px', borderRadius: '10px', marginTop: '10px' }}>
            <img src='/images/call.png' alt='Call icon' style={{ borderRadius: '10px', height: '30px', width: '30px', marginRight: '10px' }} />
            <Typography style={{ color: 'silver', fontFamily: 'Montserrat', cursor: 'pointer' }}>
              Schedule a call
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
