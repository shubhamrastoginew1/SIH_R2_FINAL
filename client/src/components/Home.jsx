import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ResponsiveAppBar from "./NavBar";
import NavBar_logout from "./NavBar_logout";

const Home = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };
  const signupHandler = () => {
    navigate("/signup");
  };
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: 'url("/assets/bg1.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <NavBar_logout />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "80vh",
            width: "75vw",
            margin: "0 auto 0 auto",
          }}
        >
          <Typography variant="h2" sx={{ marginBottom: "1.25rem" }}>
            Empowering Future with AI guidance
          </Typography>
          <Typography sx={{ marginBottom: "1.25rem" }}>
            Welcome to Your Career Compass! Discover your path with personalized AI-driven career guidance, aptitude tests, and expert insights, empowering you to navigate a future that fits
          </Typography>
          <Box
            sx={{
              padding: "1.23rem",
              width: "20vw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="text" onClick={loginHandler} sx={{
              ":hover": {
                color: "white",
                backgroundColor: 'rgb(124, 60, 240)',
              },
              display: "block",
              backgroundColor: 'rgb(140, 86, 248)',
              color: 'white',
              paddingX: '15px',
              fontSize: '1.1rem'
            }}>LOGIN
            </Button>

            <Button variant="text" onClick={signupHandler} sx={{
              ":hover": {
                color: "white",
                backgroundColor: 'rgb(124, 60, 240)',
              },
              display: "block",
              backgroundColor: 'rgb(140, 86, 248)',
              color: 'white',
              paddingX: '15px',
              fontSize: '1.1rem'
            }}>SIGNUP
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
