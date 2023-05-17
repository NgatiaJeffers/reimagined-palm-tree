import React, { useState, Fragment } from "react";
import {
  Container,
  Box,
  Toolbar,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";

// Components
import PersonalInfo from "./components/PersonalInfo";
import MultiPageFormProgress from "../../atoms/MultiPageFormProgress";
import InstituteInfo from "./components/InstituteInfo";
import MerchandiseInfo from "./components/MerchandiseInfo";
import PaymentForm from "./components/PaymentForm";

const BeBoldGoGoldForm = () => {
  const steps = ['Personal Information', "Institute Information", "Merchadise Information", "Payment"]
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = () => {
    const { name, value } = e.target;
  }

  const getStepCount = (stepIdx) => {
    switch(stepIdx) {
      case 0 :
        return <PersonalInfo />
      case 1: 
        return <InstituteInfo />
      case 2:
        return <MerchandiseInfo />
      case 3: 
        return <PaymentForm />
      default:
        return <PersonalInfo />
    }
  }

  return (
    <Fragment>
      <MultiPageFormProgress activeStep={activeStep} steps={steps} />
      {getStepCount(activeStep)}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
        )}

        <Button variant="contained"onClick={handleNext} sx={{mt: 3, ml: 1}}>
          {activeStep === steps?.length - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </Fragment>
  )
};

export default BeBoldGoGoldForm;
