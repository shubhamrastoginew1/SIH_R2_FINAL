import React from "react";
import { Footer } from "./Footer";
import ResponsiveAppBar from "./NavBar";
import { Box, FormControl, Typography, Button, FormLabel, FormControlLabel, RadioGroup, Radio, backdropClasses } from '@mui/material';


const Blog = () => {
  return (
    <>
      <ResponsiveAppBar theme="dark" />

      <Box sx={{ width: '100%', marginY: '4rem', textAlign: 'center' }}>
        <Typography variant='h3'>
          Blogs
        </Typography>
      </Box >

      <Box sx={{
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
              <Typography variant="h4"> How do you prefer to recharge?</Typography>
            </Box>
            <Box sx={{ paddingX: '2rem', paddingBottom: '0.5rem' }}>
              <Typography fontSize={20} textAlign={"center"}> How do you prefer to recharge? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, perspiciatis voluptatibus? Doloremque ullam hic adipisci eos quaerat odit dolore possimus. Aspernatur repudiandae doloremque eum animi.</Typography>
            </Box>
            <Button variant="outlined">Read more</Button>

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
              <Typography variant="h4"> How do you prefer to recharge?</Typography>
            </Box>
            <Box sx={{ paddingX: '2rem', paddingBottom: '0.5rem' }}>
              <Typography fontSize={20} textAlign={"center"}> How do you prefer to recharge? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, perspiciatis voluptatibus? Doloremque ullam hic adipisci eos quaerat odit dolore possimus. Aspernatur repudiandae doloremque eum animi.</Typography>
            </Box>
            <Button variant="outlined">Read more</Button>

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
              <Typography variant="h4"> How do you prefer to recharge?</Typography>
            </Box>
            <Box sx={{ paddingX: '2rem', paddingBottom: '0.5rem' }}>
              <Typography fontSize={20} textAlign={"center"}> How do you prefer to recharge? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, perspiciatis voluptatibus? Doloremque ullam hic adipisci eos quaerat odit dolore possimus. Aspernatur repudiandae doloremque eum animi.</Typography>
            </Box>
            <Button variant="outlined">Read more</Button>

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
              <Typography variant="h4"> How do you prefer to recharge?</Typography>
            </Box>
            <Box sx={{ paddingX: '2rem', paddingBottom: '0.5rem' }}>
              <Typography fontSize={20} textAlign={"center"}> How do you prefer to recharge? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, perspiciatis voluptatibus? Doloremque ullam hic adipisci eos quaerat odit dolore possimus. Aspernatur repudiandae doloremque eum animi.</Typography>
            </Box>
            <Button variant="outlined">Read more</Button>

          </Box>

        </Box>

      </Box>


      <Footer />
    </>
  );
};

export default Blog;
