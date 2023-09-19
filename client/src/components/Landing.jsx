import React from "react";
import ResponsiveAppBar from "./NavBar";
import { Footer } from "./Footer";

import { Box, Typography, Button } from "@mui/material";

const Landing = () => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            magni quo hic iure inventore commodi, corporis eveniet eligendi
            voluptatum ipsum reiciendis, et doloremque eos accusantium provident
            vero ad quidem debitis, molestiae laborum fugiat eius minima. Natus
            neque fugit veniam, delectus vero inventore accusantium sapiente
            voluptatem ipsa, cum ullam eveniet autem.
          </Typography>
          <Button
            variant="contained"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi
            alias laboriosam voluptas qui consequuntur, dolor incidunt tempore
            ipsam quia nam dolore odio. Delectus, error sunt hic aut nisi quasi
            debitis quis beatae nostrum vero, nobis magnam voluptatum porro
            nesciunt facere quisquam, sequi veritatis fugiat quo nihil possimus
            sit reiciendis?
          </Typography>
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
