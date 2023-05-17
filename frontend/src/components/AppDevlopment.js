import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";
import basicFrontend from "../img/app-basic.webp";
import intermidiateFrontend from "../img/median-app-dev.jpg";
import advFrontend from "../img/advanced-app-dev.png";

const imgLinks = [
  {
    link: basicFrontend,
  },
  {
    link: intermidiateFrontend,
  },
  {
    link: advFrontend,
  },
];

const steps = [
  {
    label: "The Basics",
    description:
      "Learn the basics of programming languages, such as Java, Kotlin, or Swift.      Build simple apps to practice your skills.      Use online resources to learn more about app development.      Attend meetups and conferences to meet other developers and learn from their experiences.",
  },
  {
    label: "The Intermediate",
    description:
      "Learn about more advanced app development concepts, such as design patterns, unit testing, and debugging.      Start contributing to open source projects to get experience working on real-world code.      Build more complex apps to showcase your skills.      Network with other developers to learn about job opportunities.",
  },
  {
    label: "The Advanced",
    description: `Learn about the latest app development technologies, such as React Native, Flutter, and Xamarin.
    Become an expert in one or more app development frameworks.
    Build high-quality, production-ready mobile apps.
    Work on challenging and interesting app development projects.
    Share your knowledge and expertise with others by writing blog posts, giving talks, and mentoring junior developers.`,
  },
];

export default function AppDevelopment() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Box sx={{ margin: "50px" }}>
            <h2>AppDevelopment</h2>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    onMouseEnter={() => {
                      setActiveStep(index);
                    }}
                  >
                    <h2>{step.label}</h2>
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              margin: "50px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {/* <Card variant="outlined"> */}
            <img
              src={imgLinks[activeStep].link}
              alt="km"
              style={{ height: "300px" }}
            ></img>
            {/* </Card> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
