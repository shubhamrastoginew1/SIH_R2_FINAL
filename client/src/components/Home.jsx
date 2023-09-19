import { React, useState, useEffect } from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ResponsiveAppBar from "./NavBar";
import NavBar_logout from "./NavBar_logout";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  ///for protected routes
  useEffect(() => {
    const fetchme = async () => {
      const url = "http://localhost:4000/me";
      const token = localStorage.getItem("token");
      console.log(token);
      // Check if the token exists before making the request
      if (token) {
        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // const result = await JSON.parse(response);
          // Check if the response contains the username
          console.log(response);
          if (response.data) {
            // alert("vbhjnkm");

            localStorage.setItem("email", response.data.email);
            setEmail(response.data.email);
            // console.log(userName);
            console.log(email);
            navigate("/landing");
          }
        } catch (error) {
          // Handle errors more gracefully, e.g., display an error message to the user
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchme();
  }, []);

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
          // backgroundImage: 'url("/assets/bg1.jpeg")',
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        {/* <NavBar_logout /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100vh",
            // width: "75vw",
            margin: "0 auto 0 auto",
            // backgroundColor: "pink",
          }}
        >
          {/* <Typography variant="h2" sx={{ marginBottom: "1.25rem" }}>
            Empowering Future with AI guidance
          </Typography> */}
          {/* <Typography sx={{ marginBottom: "1.25rem" }}>
            Welcome to Your Career Compass! Discover your path with personalized
            AI-driven career guidance, aptitude tests, and expert insights,
            empowering you to navigate a future that fits
          </Typography> */}

          <Box sx={{ width: "60%", height: "100%" }}>
            <img src="\assets\SIH_dataset.svg" style={{ width: "100%" }} />
          </Box>
          <Box
            sx={{
              width: "40%",
              height: "100%",

              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <Typography variant="h3">Getting Started</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              debitis placeat quam perspiciatis fuga iure repudiandae vitae
              saepe consectetur? Laboriosam.
            </Typography>

            <Box
              sx={{
                padding: "1.23rem",
                width: "20vw",
                display: "flex",
                justifyContent: "space-between",
                // backgroundColor: "pink",
                margin: "0 auto 0 auto ",
              }}
            >
              <Button
                variant="text"
                onClick={loginHandler}
                sx={{
                  ":hover": {
                    color: "white",
                    backgroundColor: "rgb(124, 60, 240)",
                  },
                  display: "block",
                  backgroundColor: "rgb(140, 86, 248)",
                  color: "white",
                  paddingX: "15px",
                  fontSize: "1.1rem",
                }}
              >
                LOGIN
              </Button>

              <Button
                variant="text"
                onClick={signupHandler}
                sx={{
                  ":hover": {
                    color: "white",
                    backgroundColor: "rgb(124, 60, 240)",
                  },
                  display: "block",
                  backgroundColor: "rgb(140, 86, 248)",
                  color: "white",
                  paddingX: "15px",
                  fontSize: "1.1rem",
                }}
              >
                SIGNUP
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
