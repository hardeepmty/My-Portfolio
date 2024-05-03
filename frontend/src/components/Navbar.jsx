import React from 'react';
import { Button, Stack, useMediaQuery } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import DnsIcon from '@mui/icons-material/Dns';

const Navbar = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    const buttonSize = isSmallScreen ? 'medium' : 'medium';

    // Define the URL of your CV PDF file
    const cvPdfUrl = 'images/cv.pdf';

    return (
        <Stack
            sx={{
                position: 'fixed',
                top: isSmallScreen ? 20 : 20,
                left: '50%', 
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: isSmallScreen ? '350px' : '400px', 
                alignItems: 'center',
                bgcolor: '#191919', 
                padding: '10px 0',
                borderRadius: '10px',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)', 
                zIndex: 1000, 
            }}
        >
            <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: 0, padding: 0 }}>
                <li style={{ listStyle: 'none' }}>
                    <Button 
                        variant="contained"
                        sx={{
                            color: 'black',
                            bgcolor: '#BBAFFE',
                            '&:hover': {
                                bgcolor: 'silver',
                            },
                            fontWeight: "500"
                        }}
                        size={buttonSize}
                    >
                        <PersonIcon />
                        About
                    </Button>
                </li>
                <li style={{ listStyle: 'none' }}>
                    <Button 
                        variant="contained"
                        sx={{
                            color: 'black',
                            bgcolor: 'white',
                            '&:hover': {
                                bgcolor: '#EAE6FE',
                            },
                            fontWeight: "500"
                        }}
                        size={buttonSize}
                    >
                        <SettingsEthernetIcon />
                        Works
                    </Button>
                </li>
                <li style={{ listStyle: 'none' }}>
                    {/* Wrap the button in an anchor element to link it to your CV PDF file */}
                    <a href={cvPdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button 
                            variant="contained"
                            sx={{
                                color: 'black',
                                bgcolor: 'white',
                                '&:hover': {
                                    bgcolor: '#EAE6FE',
                                },
                                fontWeight: "500"
                            }}
                            size={buttonSize}
                        >
                            <DnsIcon />
                            CV
                        </Button>
                    </a>
                </li>
            </ul>
        </Stack>
    );
};

export default Navbar;
