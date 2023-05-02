import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup
} from "@mui/material";

const PersonalInfo = () => {
  return (
    <Fragment>
      <Typography className="section-title" variant="h4" gutterBottom>
        Details Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            name="fullName"
            label="Full Name"
            fullWidth
            autoComplete="give-name"
            variant="outlined"
            helperText="If registering for a child please write child's name and age"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="give-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Which event will you (or your child) be participating in? *</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="5km"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="5km"
                control={<Radio />}
                label="5 KM"
              />
              <FormControlLabel value="10km" control={<Radio />} label="10 KM" />
              <FormControlLabel
                value="21km"
                control={<Radio />}
                label="21 KM"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PersonalInfo;
