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

const InstituteInfo = () => {
  return (
    <Fragment>
        <Typography className="section-title" variant="h4" gutterBottom>
            Institute Info
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
                <TextField 
                    name="age"
                    label="Age (Optional)"
                    autoComplete="give-name"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField 
                    name="age"
                    label="School (Optional)"
                    autoComplete="give-name"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField 
                    name="age"
                    label="Corporate Name (Optional)"
                    autoComplete="give-name"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField 
                    name="age"
                    label="Team Name (Optional)"
                    autoComplete="give-name"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
    </Fragment>
  )
}

export default InstituteInfo