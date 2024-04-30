import React from 'react';
import { Button, Stack, useMediaQuery } from '@mui/material';

const Navbar = () => {
 
    const isSmallScreen = useMediaQuery('(max-width: 600px)');


    const buttonSize = isSmallScreen ? 'small' : 'medium';

    return (
        <Stack
            sx={{
                position: 'fixed',
                top: isSmallScreen ? 10 : 20,
                left: '50%', 
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: isSmallScreen ? '300px' : '400px', 
                alignItems: 'center',
                bgcolor: 'rgba(128, 128, 128, 0.1)', 
                padding: '10px 0',
                borderRadius: '10px',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)', 
                zIndex: 1000, 
            }}
        >
            <ul style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: 0, padding: 0 }}>
                <li style={{ listStyle: 'none' }}>
                    <Button 
                        variant="contained"
                        sx={{
                            color: 'black', 
                            bgcolor: 'white', 
                            '&:hover': {
                                bgcolor: 'silver',
                            },
                            fontWeight:"700"
                        }}
                        size={buttonSize}
                    >
                        About Me
                    </Button>
                </li>
                <li style={{ listStyle: 'none' }}>
                    <Button 
                        variant="contained"
                        sx={{
                            color: 'black', 
                            bgcolor: 'white', 
                            '&:hover': {
                                bgcolor: 'silver', 
                            },
                            fontWeight:"700"
                        }}
                        size={buttonSize}
                    >
                        Projects
                    </Button>
                </li>
                <li style={{ listStyle: 'none' }}>
                    <Button 
                        variant="contained"
                        sx={{
                            color: 'black', 
                            bgcolor: 'white', 
                            '&:hover': {
                                bgcolor: 'silver',
                            },
                            fontWeight:"700"
                        }}
                        size={buttonSize}
                    >
                        Resume
                    </Button>
                </li>
            </ul>
        </Stack>
    );
};

export default Navbar;
