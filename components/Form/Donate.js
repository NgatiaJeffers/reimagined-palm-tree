import React, { useState } from 'react';
import { Button, TextField, Box, styled } from '@mui/material';

const Container = styled('div')({
  width: '100%',
  maxWidth: 700,
  margin: 'auto',
  padding: '20px',
});

const ButtonContainer = styled('div')({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-between',
});

const MultiPageForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Box>
            <TextField
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              value={formValues.firstName}
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={formValues.lastName}
              onChange={handleChange}
            />
          </Box>
        );
      case 1:
        return (
          <Box>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formValues.email}
              onChange={handleChange}
            />
          </Box>
        );
      default:
        return <p>Unknown stepIndex</p>;
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {getStepContent(activeStep)}
        <ButtonContainer>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <div>
            <Button
              type="submit"
              variant="contained"
              disabled={
                activeStep === 0 && (!formValues.firstName || !formValues.lastName) ||
                activeStep === 1 && !formValues.email
              }
              onClick={handleNext}
            >
              {activeStep === 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default MultiPageForm;


