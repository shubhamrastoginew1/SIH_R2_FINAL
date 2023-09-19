import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Aptitude = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "80vw",
          margin: "0 auto 0 auto",
          //   justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            // backgroundColor: "pink",
            height: "35vh",
            width: "40vw",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">Why this test ?</Typography>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            error quidem mollitia dignissimos, a blanditiis enim omnis animi
            hic, rem ipsam praesentium, at eius. Non illo ex expedita quod
            debitis?
          </Typography>
          <Button variant="text" sx={{
            width: "300px",
            backgroundColor: "rgb(140, 86, 248)",
            color: "white",
            ":hover": {
              color: "white",
              backgroundColor: "rgb(124, 60, 240)",
            }
          }} href="/explore/aptitude-test">
            ATTEMPT NOW
          </Button>
        </Box>

        <img
          src="\assets\undraw_elements_re_25t9.svg"
          style={{ width: "38vw" }}
        />
      </Box >
    </>
  );
};

export default Aptitude;
