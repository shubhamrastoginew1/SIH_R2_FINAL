import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Footer } from "./Footer";

// imports from components folder
import ResponsiveAppBar from "./NavBar";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  width: 700,
  alignItems: "center",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0)"
      : "rgba(0, 0, 0, 0.03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [ expanded, setExpanded ] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ResponsiveAppBar />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "1.125rem", color: 'rgb(140, 86, 248)' }}>
          Most frequently asked question
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary sx={{ backgroundColor: 'rgb(140, 86, 248)', color: 'white' }} aria-controls="panel1d-content" id="panel1d-header">
            <Typography> How accurate and reliable are the AI-generated career recommendations?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'rgb(140, 86, 248)' }}>
              The AI-generated career recommendations are designed to be highly accurate and reliable. The AI algorithms are continuously refined and updated based on a vast dataset of career information, educational trends, and industry insights to enhance accuracy and relevance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary sx={{ backgroundColor: 'rgb(140, 86, 248)', color: 'white' }} aria-controls="panel2d-content" id="panel2d-header">
            <Typography> Can students revisit their career assessments and recommendations over time?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'rgb(140, 86, 248)' }}>
              Yes, students can revisit their career assessments and recommendations at any time. The platform allows them to track their progress, update their profiles, and explore new or evolving career options as they grow and gain more insights into their interests and skills.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary sx={{ backgroundColor: 'rgb(140, 86, 248)', color: 'white' }} aria-controls="panel3d-content" id="panel3d-header">
            <Typography> How is the privacy and confidentiality of student data ensured?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'rgb(140, 86, 248)' }}>
              Privacy and confidentiality are of utmost importance. The project adheres to strict data privacy policies, ensuring that all student data is securely stored and used only for the purpose of career guidance. Personal information is anonymized and handled in compliance with relevant privacy regulations.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary sx={{ backgroundColor: 'rgb(140, 86, 248)', color: 'white' }} aria-controls="panel4d-content" id="panel4d-header">
            <Typography> Are the career recommendations solely based on AI algorithms?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'rgb(140, 86, 248)' }}>
              While AI algorithms play a crucial role in generating career recommendations, they are supplemented with comprehensive data, educational resources, and real-world insights. The aim is to provide a holistic approach to career guidance, combining AI's analytical power with human expertise.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary sx={{ backgroundColor: 'rgb(140, 86, 248)', color: 'white' }} aria-controls="panel5d-content" id="panel5d-header">
            <Typography>How can I reach out for further assistance or clarification regarding my career choices?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'rgb(140, 86, 248)' }}>
              If you have additional questions or need further assistance, feel free to contact our support team through the provided contact form or email. We also offer interactive webinars and forums where you can engage with career experts and fellow users to gain insights and clarification.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Footer />
    </div>
  );
}
