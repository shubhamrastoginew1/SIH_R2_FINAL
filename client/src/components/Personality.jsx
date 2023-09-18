import React from "react";
import ResponsiveAppBar from "./NavBar";
import { Box, Typography, Button } from "@mui/material";

const Personality = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Box
                sx={{
                    display: "flex",
                    maxWidth: "80vw",
                    margin: "0 auto 0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "88vh",
                    justifyContent: "space-between",
                    //   backgroundColor: "blue",
                }}
            >
                {/* <Box sx={{ width: "30vw" }}> */}
                <img
                    src="\assets\undraw_elements_re_25t9.svg"
                    style={{ width: "38vw" }}
                />
                {/* </Box> */}
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
                    <Button variant="contained" sx={{ width: "300px" }}>
                        ATTEMPT NOW
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Personality;
