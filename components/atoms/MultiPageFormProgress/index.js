import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import styled from '@emotion/styled';

const StyledStepper = styled(Stepper) `
    background-color: transparent,
    padding: 0,
    margin: 0
`

const MultiPageFormProgress = ({activeStep, steps}) => {
  return (
    <StyledStepper activeStep={activeStep}>
        {steps?.map((label, idx) => {
            const stepProps = {};
            const labelProps = {};
            return (
                <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
            )
        })}
    </StyledStepper>
  )
}

export default MultiPageFormProgress;