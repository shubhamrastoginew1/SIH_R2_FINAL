import React from 'react'
import { Box, FormControl, Typography, Button, FormLabel, FormControlLabel, RadioGroup, Radio, backdropClasses } from '@mui/material';
import ResponsiveAppBar from './NavBar';
import { Footer } from './Footer';

const PersonalityTest = () => {

    const [ value, setValue ] = React.useState(new Array(10).fill('-1'));

    const onClickHandler = () => {
        for (let i = 0; i < 10; i++) {
            if (value[ i ] === '-1') {
                alert('Please answer all the questions');
                return;
            }
        }
    }


    const handleChange = (e, ind) => {
        value[ ind ] = e.target.value;
        setValue(value);
    };

    return (
        <>
            <ResponsiveAppBar theme='dark' />
            <Box sx={{ width: '100%', marginY: '4rem', textAlign: 'center' }}>
                <Typography variant='h3'>
                    Personality Test
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore?
                </Typography>
            </Box>
            <FormControl sx={{ minWidth: '98vw' }}>
                <Box container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80%',
                    marginX: 'auto'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-1</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}> How do you prefer to recharge?</Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 0)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="By spending time alone" />
                                <FormControlLabel value="false" control={<Radio />} label="By socializing with friends" />
                            </RadioGroup>
                        </Box>
                    </Box>


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-2</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}> How do you make decisions?</Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 1)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Based on logic and facts" />
                                <FormControlLabel value="false" control={<Radio />} label="Based on personal values and feelings" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-3</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}> How do you approach new situations?</Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 2)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="With careful planning and analysis" />
                                <FormControlLabel value="false" control={<Radio />} label="With spontaneity and adaptability" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-4</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}> How do you handle conflict?</Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 3)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="By discussing issues calmly and rationally" />
                                <FormControlLabel value="false" control={<Radio />} label="By addressing emotional needs and concerns" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-5</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}> How would you describe your work style?</Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 4)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Methodical and organized" />
                                <FormControlLabel value="false" control={<Radio />} label="Flexible and creative" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-6</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}> How do you prefer to communicate?</Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 5)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Directly and to the point" />
                                <FormControlLabel value="false" control={<Radio />} label="Emotionally and with empathy" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-7</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}> How do you feel about routine and structure?</Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 6)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Comfortable and necessary" />
                                <FormControlLabel value="false" control={<Radio />} label="Restrictive and stifling" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-8</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}> How do you react to stress?</Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 7)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="By seeking practical solutions" />
                                <FormControlLabel value="false" control={<Radio />} label="By seeking emotional support" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-9</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}> How do you make new friends?</Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 8)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Slowly, by getting to know them over time" />
                                <FormControlLabel value="false" control={<Radio />} label="Easily, by being open and approachable" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '2rem',
                        minWidth: '100%',
                        paddingY: '2rem',
                        border: '2px solid black'
                    }}>
                        <Box sx={{
                            width: '10%',
                            textAlign: 'center'
                        }}>
                            <Typography>Ques-10</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '90%',
                            maxWidth: '90%'
                        }}>
                            <Box sx={{ paddingX: '2rem', paddingBottom: '1rem' }}>
                                <Typography fontSize={25}>  How do you spend your free time? </Typography>
                            </Box>
                            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }}
                                onChange={(e) => handleChange(e, 9)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Engaging in hobbies and activities you're passionate about" />
                                <FormControlLabel value="false" control={<Radio />} label="Spending time with loved ones and connecting emotionally" />
                            </RadioGroup>
                        </Box>
                    </Box>

                    <Button
                        variant="text"
                        onClick={onClickHandler}
                        sx={{
                            ":hover": {
                                color: "white",
                                backgroundColor: "rgb(124, 60, 240)",
                            },
                            display: "block",
                            backgroundColor: "rgb(140, 86, 248)",
                            color: "white",
                            paddingX: "2rem",
                            marginBottom: '4rem'
                        }}
                    >
                        SUBMIT NOW
                    </Button>
                </Box>
            </FormControl>
            <Footer />
        </>
    )
}

export default PersonalityTest;