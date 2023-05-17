import React, { Fragment, useState } from "react";
import {
  Box,
  Chip,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Select,
  InputLabel,
  OutlinedInput,
  useMediaQuery
} from "@mui/material";
import { useTheme, useThemeProps } from '@mui/material/styles';

const ITEM_HEIGH = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGH * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight: 
      personName.indexOf(name) === -1 
        ? theme.typography.fontWeightRegular 
        : theme.typography.fontWeightMedium,
  }
}

const PersonalInfo = () => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down('md'))
  const [personName, setPersonName] = useState([]);

  const handleChange = (e) => {
    const { target: { value }} = e
    setPersonName(
      typeof value === "string" ? value.split(",") : value
    )
  }

  return (
    <Fragment>
      <Typography className="section-title" variant="h4" gutterBottom>
        Details Info
      </Typography>
      <Grid container spacing={matchDownSm ? 0 : 2}>
        <Grid item xs={12} sm={12}>
          {/* <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap:"wrap", gap: 0.5}}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
            ></Select>
          </FormControl> */}
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
            <FormLabel id="demo-radio-buttons-group-label">
              Which event will you (or your child) be participating in? *
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="5km"
              name="radio-buttons-group"
            >
              <FormControlLabel value="5km" control={<Radio />} label="5 KM" />
              <FormControlLabel
                value="10km"
                control={<Radio />}
                label="10 KM"
              />
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
