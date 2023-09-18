// import React from "react";
import { React, useState } from "react";
// import axios from "axios";
import {
  Card,
  Typography,
  Button,
  TextField,
  Box,
  AppBar,
  Link,
} from "@mui/material";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
  const [email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  //   const registerHandler = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:3000/admin/signup", {
  //         username: email,
  //         password,
  //       });

  //       console.log(response);
  //       alert(response.data.message);
  //       localStorage.setItem("token", response.data.token);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <AppBar
          sx={{
            display: "flex",
            width: "100vw",
            height: "60px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              padding: 2,
              fontWeight: "bold",
              fontSize: "20px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            LOGO{" "}
          </Typography>
          <Button variant="outline" color="inherit">
            <Link href="/login" underline="none" sx={{ color: "white" }}>
              Login
            </Link>
          </Button>
        </AppBar>
        <Card
          sx={{
            width: 500,
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Please Register with your credentials
          </Typography>
          <TextField
            label="UserName"
            type="text"
            sx={{ width: 300 }}
            value={UserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <TextField
            label="Email"
            type="text"
            sx={{ width: 300 }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Password"
            type="password"
            sx={{ width: 300 }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            sx={{ width: 300 }}
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <Button variant="contained">Register</Button>
        </Card>
      </Box>
    </>
  );
}

export default Register;
