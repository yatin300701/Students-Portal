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
import basicFrontend from "../img/basic-ml.jpg";
import intermidiateFrontend from "../img/median-ml.png";
import advFrontend from "../img/adv-ml.jpg";

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
      "Learn the basics of mathematics, such as linear algebra, calculus, and probability.      Learn the basics of statistics, such as hypothesis testing, regression analysis, and classification.      Learn the basics of programming languages, such as Python or R.      Build simple machine learning models to practice your skills.      Use online resources to learn more about machine learning.      Attend meetups and conferences to meet other machine learning engineers and learn from their experiences.",
  },
  {
    label: "The Intermediate",
    description:
      "Learn about more advanced machine learning concepts, such as deep learning, natural language processing, and computer vision.      Start contributing to open source machine learning projects to get experience working on real-world code.      Build more complex machine learning models to showcase your skills.      Network with other machine learning engineers to learn about job opportunities.",
  },
  {
    label: "The Advanced",
    description: `Learn about the latest machine learning technologies, such as TensorFlow, PyTorch, and scikit-learn.
    Become an expert in one or more machine learning frameworks.
    Build high-quality, production-ready machine learning models.
    Work on challenging and interesting machine learning projects.
    Share your knowledge and expertise with others by writing blog posts, giving talks, and mentoring junior machine learning engineers.`,
  },
];

export default function MachineDevelopment() {
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
            <h2>Machine Learning</h2>
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
