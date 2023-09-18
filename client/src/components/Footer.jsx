import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


export const Footer = () => {
    return (
        <Box sx={{ maxWidth: '100vw' }} bgcolor={"black"} color={"white"}>
            <Box sx={{ maxWidth: '80vw', margin: ' auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: '17vh' }} container>
                <Box>
                    <Link href="#" color={'inherit'}>
                        <Typography variant='h4'>Logo</Typography>
                    </Link>
                </Box>
                <Box item sx={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Link href="#" underline="hover" color={'inherit'} marginX={4}>
                        <Typography fontSize={17}>Link1</Typography>
                    </Link>
                </Box>
                <Box item sx={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Link href="#" underline="hover" color={'inherit'} marginX={4}>
                        <Typography fontSize={17}>Link1</Typography>
                    </Link>
                </Box>
                <Box item sx={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontSize={18} marginBottom={1}>FOLLOW US ON</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Link href="#" marginX={1}>
                            <InstagramIcon sx={{ color: 'white', fontSize: '1.8rem' }} />
                        </Link>
                        <Link href="#" marginX={1}>
                            <FacebookIcon sx={{ color: 'white', fontSize: '1.8rem' }} />
                        </Link>
                        <Link href="#" marginX={1}>
                            <YouTubeIcon sx={{ color: 'white', fontSize: '1.8rem' }} />
                        </Link>
                        <Link href="#" marginX={1}>
                            <LinkedInIcon sx={{ color: 'white', fontSize: '1.8rem' }} />
                        </Link>
                        <Link href="#" marginX={1}>
                            <TwitterIcon sx={{ color: 'white', fontSize: '1.8rem' }} />
                        </Link>
                    </Box>
                </Box>
                <Box item sx={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontSize={18} marginBottom={1}>CONTACT US</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Link href="#" marginX={1} sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <PhoneIcon sx={{ color: 'white', fontSize: '1.8rem', paddingRight:'5px' }} />
                            <Typography sx={{color: 'white'}}>+91 7978365412</Typography>
                        </Link>
                        <Link href="#" marginX={1} sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <EmailIcon sx={{ color: 'white', fontSize: '1.8rem', paddingRight:'5px' }} />
                            <Typography sx={{color: 'white'}}>sih@gmail.com</Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: ' row', justifyContent: 'center', alignItems: 'center', maxWidth: '80vw', marginX: 'auto' }}>
                
            </Box>
        </Box>
    )
}