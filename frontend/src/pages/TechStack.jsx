import { Typography } from '@mui/material'
import React from 'react'
import TableRowsSharpIcon from '@mui/icons-material/TableRowsSharp';

const TechStack = () => {
  return (
    <div
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
      <TableRowsSharpIcon sx={{ fontSize: 'large', color: '#A291FD' }}></TableRowsSharpIcon>
         Tech Stack
      </Typography>
    </div>
  )
}

export default TechStack
