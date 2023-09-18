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
      <NavBar_logout />
      <Box
        sx={{
          height: "91vh",
          backgroundImage: 'url("/assets/img1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
            Lorem ipsum dolor sit, amet consectetur .
          </Typography>
          <Typography sx={{ marginBottom: "1.25rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            saepe enim nemo numquam a id corrupti porro dolor fugit in,
            similique voluptatem doloremque quasi natus praesentium, voluptas
            amet, voluptate rerum.
          </Typography>
          <Box
            sx={{
              padding: "1.23rem",
              width: "20vw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontSize: "1.25rem",
              }}
              onClick={loginHandler}
            >
              LOGIN
            </Button>

            <Button
              variant="contained"
              sx={{
                fontSize: "1.25rem",
              }}
              onClick={signupHandler}
            >
              SIGNUP
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
