import React from "react";
import { Card, Box, Typography, Button } from "@mui/material";

const Test = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Card sx={{ height: "70vh", width: "35vw" }}>Card1</Card>
        <Card sx={{ height: "70vh", width: "35vw" }}>Card2</Card>
      </Box>
    </>
  );
};

export default Test;
