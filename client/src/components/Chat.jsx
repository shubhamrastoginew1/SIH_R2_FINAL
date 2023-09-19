import { React, useState } from "react";
import { Footer } from "./Footer";
import ResponsiveAppBar from "./NavBar";
import { Box, Typography, TextField, Button } from "@mui/material";

const Chat = () => {
  const personality = "ENFJ";
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [userInput, setUserInput] = useState("");

  const responseHandler = async (userInput) => {
    const auth_token = "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";
    const url =
      "https://api-inference.huggingface.co/models/codellama/CodeLlama-34b-Instruct-hf";

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(userInput),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", JSON.stringify(result));
        const final_response = result[0].generated_text;

        const regex = /HELPFUL ASSISTANT:\s*(.*)/;

        // Use the regex to capture the text after "HELPFUL ASSISTANT:"
        const match = final_response.match(regex);
        const extractedText = match[1].trim();
        return extractedText;

        // setValue(extractedText);
      } else {
        console.error("API Request Failed with Status Code:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //   responseHandler();
  //   let careerSuggestionsLines = [];
  //   if (value2 !== "") {
  //     // careerSuggestionsLines = value2.split("\n");
  //     // console.log(careerSuggestionsLines);

  //     // const stringWithBrTags = value2.replace(/\n/g, "<br>");
  //     // console.log("this is value2", stringWithBrTags);
  //   }

  return (
    <>
      <Box sx={{ width: "100vw" }}>
        <ResponsiveAppBar />
        <Box
          sx={{
            width: "70%",
            margin: "0 auto 0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              minHeight: "400px",
              border: "2px solid black",
              borderRadius: "10px",
              marginBottom: "50px",
              background: "#FFFFFF",
              marginTop: "50px",
            }}
          >
            <Typography variant="h6" sx={{ margin: "2px 0 0 10px" }}>
              {value1}
            </Typography>
            <br />
            {/* {careerSuggestionsLines.map((line, index) => (
              <Typography variant="h6" sx={{ margin: "2px 0 0 10px" }}>
                {line}
              </Typography>
            ))} */}
            <Typography variant="h6" sx={{ margin: "2px 0 0 10px" }}>
              {value2}
            </Typography>
          </div>
          <Box sx={{ display: "flex" }}>
            <TextField
              placeholder="Suggest me career paths"
              sx={{ minWidth: "93%" }}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={async () => {
                const output1 = await responseHandler({
                  inputs: `USER: I am an ${personality} personality type. ${userInput} \n HELPFUL ASSISTANT:`,
                });

                const output2 = await responseHandler({
                  inputs: `USER: I am an ${personality} personality type. ${userInput} \n HELPFUL ASSISTANT: Some of the career opions you might look into are: 1)`,
                });
                setValue1(output1);
                setValue2(output2);
              }}
              sx={{
                ":hover": {
                  color: "white",

                  backgroundColor: "rgb(140, 86, 248)",
                },
                backgroundColor: "rgb(140, 86, 248)",
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Chat;
