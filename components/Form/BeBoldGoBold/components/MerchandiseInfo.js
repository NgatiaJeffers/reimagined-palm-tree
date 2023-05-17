import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';

const shirtSize = [
  {
    value: "xs",
    label: "XS",
  },
  {
    value: "small",
    label: "Small",
  },
  {
    value: "medium",
    lable: "Medium",
  },
  {
    value: "large",
    label: "Large",
  },
  {
    value: "xl",
    label: "XL",
  },
  {
    value: "xxl",
    label: "XXL",
  },
];

const MerchandiseInfo = () => {
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))



  return (
    <Fragment>
      <Typography className="section-title" variant="h4" gutterBottom>
        Merchandise Info
      </Typography>
      <Grid container spacing={matchDownSM ? 0 : 2}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            fullWidth
            name="shirtSize"
            label="Select T-shirt Size"
            helperText="Please select your T-shirt Size"
          >
            {shirtSize?.map((option) => (
              <MenuItem key={option?.value} value={option?.value}>
                {option?.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl>
            <FormLabel id="radio-buttons-group-label">
              Please select your preferred t-shirt pick up slot ( we will
              communicate closer to the time when you can pick them up)
            </FormLabel>
          </FormControl>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-grouop"
          >
            <FormControlLabel
              value="Runners Point at the Waterfront Karen Shopping Mall"
              control={<Radio />}
              label="Runners Point at the Waterfront Karen Shopping Mall"
            />
            <FormControlLabel
              value="Run Beyond, Warwick Centre Gigiri"
              control={<Radio />}
              label="Run Beyond, Warwick Centre Gigiri *9am-5pm on week days and 10am-4pm on weekends*"
            />
            <FormControlLabel
              value="Sports injuries and wellness clinic"
              control={<Radio />}
              label="Sports injuries and wellness clinic, opp Kenya Science *9am-5pm daily except holidays*"
            />
            <FormControlLabel
              value="Faraja Cancer Support Trust"
              control={<Radio />}
              label="Faraja Cancer Support Trust *8am-4pm daily except weekends and holidays*"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MerchandiseInfo;
