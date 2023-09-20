import React from "react";
import ResponsiveAppBar from "./NavBar";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <ResponsiveAppBar />

      <Box
        sx={{
          height: "74vh",
          display: "flex",
          width: "90vw",
          margin: "0 auto 0 auto",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">About Us</Typography>
          <Typography>
            Our proprietary personality and aptitude assessment is meticulously
            crafted, drawing upon the latest research, to empower our advanced
            language model in providing you with tailored recommendations that
            truly suit your needs. If you haven't already, we invite you to take
            our comprehensive personality and aptitude test today. By simply
            clicking the link below, you can access top-tier career advice from
            our finely-tuned, large-scale language model, available around the
            clock, exclusively for your career counseling needs.
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/Explore");
            }}
            sx={{
              backgroundColor: "rgb(140, 86, 248)",
              ":hover": {
                backgroundColor: "rgb(140, 86, 248)",
                color: "white",
              },
              width: "200px",
              margin: "20px 0 20px 0",
            }}
          >
            Get Started
          </Button>
          <Typography>
            If you have already completed our comprehensive personality and
            aptitude assessment, you are now ready to address all your
            career-related inquiries with ChatUp. ChatUp is a fine-tuned large
            language model, tailored using a hand-crafted career counselling
            dataset. To engage with ChatUp, simply follow the link below and
            access expert guidance for your professional journey.
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/chatup");
            }}
            sx={{
              backgroundColor: "rgb(140, 86, 248)",
              ":hover": {
                backgroundColor: "rgb(140, 86, 248)",
                color: "white",
              },
              width: "200px",
              margin: "20px 0 20px 0",
            }}
          >
            ChatUp
          </Button>
        </Box>
        <Box sx={{ width: "40%", display: "flex" }}>
          <img
            src="\assets\undraw_career_development_re_sv91.svg"
            style={{
              backgroundSize: "cover",
              width: "36vw",
            }}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Landing;
