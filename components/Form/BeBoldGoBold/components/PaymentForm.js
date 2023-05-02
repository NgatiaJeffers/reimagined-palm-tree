import React, { Fragment } from 'react';
import { 
    Grid,
    Typography,
    TextField,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
    RadioGroup,
    Checkbox, 
} from '@mui/material'

const PaymentForm = () => {
  return (
    <Fragment>
        <Typography className='section-title' variant="h4" gutterBottom>
            Payment
        </Typography>
        <Grid container spacing={3}>
            <Grid item  xs={12} sm={12}>
                <TextField 
                    required
                    name=""
                    label="Mpesa Number"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Terms Feed *</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                required
                value="accepted"
                control={<Checkbox name="terms" value="accepted" />}
                label="I indemnify and will keep indemnified the Organiser against all costs, losses, Illness or damages arising from or in relation to my attendance at or participation in the event including the attendance or participation of any person in my care. I declare that I am physically fit to participate in the event. I confirm that I shall adhere to the government laid out guidelines on Covid 19 pandemic. I consent to the free use of my name and pictures of me in any broadcast, telecast and print by the Organiser and/or the Event Sponsors in relation to the Event. PLEASE CHECK THE BOX TO CONFIRM THAT YOU HAVE READ AND UNDERSTOOD THIS INDEMNITY CLAUSE. *"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        </Grid>
    </Fragment>
  )
}

export default PaymentForm