import EstimateContext from '../context/estimate';
import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox,FormControlLabel, FormGroup,
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";

import UserCreate from '../components/UserCreate';


const Appointments = () => {
    const { estimate } = useContext(EstimateContext);
    console.log('[Appointments] estimate: ' + estimate);

    let content = <h3>loading</h3>

    // IF we have an estimate with the right data structure but the user as asked to edit it
    if (estimate.hasOwnProperty("servicedetails")) {
        content = <>
            <Typography variant="h3" marginBottom='20px'>Select a Date:</Typography>
            <Typography variant="body1" marginTop='20px' marginBottom='20px'>For a {estimate.servicedetails.typeofservice} of
                your {estimate.servicedetails.numrooms} BR, {estimate.servicedetails.numbaths} BA {estimate.servicedetails.construct}
            </Typography>
            <Typography variant="body2" marginBottom='0px'>
                Your Temporary user ID: <b>{estimate.servicedetails.userID}</b>
            </Typography>
            <Typography variant="body2" marginBottom='20px'>
                Your Personalized Estimate ID: <b>{estimate.id} </b>
            </Typography>
            <Typography variant="body1" marginBottom='20px'>Enter Your Phone Number to Book an Appointment</Typography>
            {/*<UserCreate />*/}
        </>
        // IF we dont have an estimate with the correct data structure we will ask the user to enter an estimateID
    } else {
        //console.log('[EstimateDetail] (else if) estimate.servicedetails', estimate.servicedetails);
        content =
            <>
                <Typography variant="body1" marginBottom='20px'> Have you used us before? </Typography>
                <Typography variant="body1" marginBottom='20px'>Enter Your Phone Number to Book an Appointment</Typography>
                {/*<UserCreate />*/}
                {/*<RepeatService />*/}

            </>

    }
    return (
        <div className='Appointments'>
            <Box>
                <ThemeProvider theme={RapidCleanTheme}>
                    <CssBaseline enableColorScheme/>
                    <Card elevation={1} sx={{marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '8px'}}>
                        <CardContent>
                            <Box sx={{ minWidth: 120 }}>
                                <Typography color="secondary" variant="cardTitle" component="h1" display="inline">
                                    {content}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </ThemeProvider>
            </Box>
        </div>
    )
}

export default Appointments