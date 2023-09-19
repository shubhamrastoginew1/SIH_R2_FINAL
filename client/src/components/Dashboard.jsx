import ResponsiveAppBar from './NavBar'
import { Footer } from './Footer'
import React from 'react'
import { Box, FormControl, Typography, Button, FormLabel, FormControlLabel, RadioGroup, Radio, backdropClasses } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories) {
    return { name, calories };
}


const apti = [
    createData('Numerical Aptitude', '🔴'),
    createData('Technical Aptitude', 'sih@gmail.com'),
];

const rows = [
    createData('Email ID', 'sih@gmail.com'),
    createData('Personality Test Results', '🟡'),
];



const Dashboard = () => {
    return (
        <>
            <ResponsiveAppBar theme="dark"/>

            <Box sx={{ width: '100%', marginY: '1rem', textAlign: 'center' }}>
                <Typography variant='h5'>
                    User Profile
                </Typography>
            </Box >

            <TableContainer component={Paper} sx={{width: '35vw', marginX: 'auto', marginBottom: '1rem'}}>
                <Table sx={{ width: '35vw', marginX: 'auto' }} size="large" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Shubham Rastogi</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Box sx={{ width: '100%', marginY: '1rem', textAlign: 'center' }}>
                <Typography variant='h5'>
                    Aptitude Test Results
                </Typography>
            </Box >

            <TableContainer component={Paper} sx={{width: '35vw', marginX: 'auto', marginBottom: '1rem'}}>
                <Table sx={{ width: '35vw', marginX: 'auto' }} size="large" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Cognitive Abilities</TableCell>
                            <TableCell align="right"> 🟢 </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apti.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Footer />
        </>
    )
}

export default Dashboard