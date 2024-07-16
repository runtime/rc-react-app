import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import EstimateEdit from './EstimateEdit';
import EstimateChip from './EstimateChip'

import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox,FormControlLabel, FormGroup,
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";

const EstimateDetail = () => {

   const { estimate } = useContext(EstimateContext);
   const [showEdit, setShowEdit] = useState(false);

   console.log('[EstimateDetail] estimate: ' + estimate);
   console.log('[EstimateDetail] estimate.hasOwnProperty servicedetails: ' + estimate.hasOwnProperty("servicedetails"));

    // create a string in US Currency for Chip
    const convertEstimateForDisplay = (total) => {
        return total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    } /* $2,500.00 */

   const handleEditClick = () => {
        setShowEdit(!showEdit);
   }

   const handleOnEditCloseClick = () => {
        console.log('[EstimateDetail] handleOnEditCloseClick');
        setShowEdit(!showEdit);
   }

   const handleSubmit = () => {
       console.log('[EstimateDetail] handleSubmit');
       setShowEdit(false);
   }

    let content = <h3>loading</h3>
    // IF we have an estimate with the right data structure but the user as asked to edit it
    if ((estimate.hasOwnProperty("servicedetails")) && (showEdit)){
        content = <>
            <EstimateChip total={convertEstimateForDisplay(estimate.servicedetails.cost.total)}/>
            <Typography variant="h4" marginTop='20px' marginBottom='20px'>For a {estimate.servicedetails.typeofservice} of
                your {estimate.servicedetails.numrooms} BR, {estimate.servicedetails.numbaths} BA {estimate.servicedetails.construct}
            </Typography>
            <EstimateEdit estimate={estimate} onSubmit={handleSubmit} onEditCloseClick={handleOnEditCloseClick}/>
            <Button onClick={handleOnEditCloseClick}>Cancel</Button>
        </>
        // IF we dont have an estimate with the correct data structure we act as if we have nothing at all
    } else if (!estimate.hasOwnProperty("servicedetails")) {
            content =
                <>
                    <Typography variant="body1" marginBottom='20px'> There are no details about your service yet </Typography>
                    <Typography variant="body1" marginBottom='20px'>waiting.. </Typography>
                </>

    } else {
        // Otherwise we assume we have the estimate with the service details so we display it
        console.log('[EstimateDetail] estimate.servicedetails', estimate.servicedetails);
        content = <>
            <EstimateChip total={convertEstimateForDisplay(estimate.servicedetails.cost.total)}/>
            <Typography variant="h4" marginTop='20px' marginBottom='20px'>For a {estimate.servicedetails.typeofservice} of
                your {estimate.servicedetails.numrooms} BR, {estimate.servicedetails.numbaths} BA {estimate.servicedetails.construct}
            </Typography>
            <Typography>
                <ul>
                    <li>Your Temporary user ID: <b>{estimate.servicedetails.userID}</b> </li>
                    <li>Your Personalized Estimate ID: <b>{estimate.id} </b></li>
                    <li>Type of Service: <b>{estimate.servicedetails.typeofservice} </b></li>
                    <li>Zoned: <b>{estimate.servicedetails.construct}</b> </li>
                    <li>Occupants: <b>{estimate.servicedetails.numpeople} </b></li>
                    <li>Number of Bedrooms: <b>{estimate.servicedetails.numrooms} </b></li>
                    <li>Number of Bathrooms: <b>{estimate.servicedetails.numbaths} </b></li>
                    <li>Square Feet: <b>{estimate.servicedetails.sqft}</b> </li>
                    <li>Number of Pets: <b>{estimate.servicedetails.numpets}</b> </li>
                    <li>Current Clutter Level: <b>{estimate.servicedetails.cleanfactor}</b> </li>
                </ul>
            </Typography>
            <Typography variant="body1" marginBottom='20px'>Your instant and highly tailored estimate is only one part of our stellar service.  </Typography>
            <Typography variant="body1" marginBottom='20px'>You are one step closer to enjoying a pristine space with our {estimate.servicedetails.typeofservice} service, featuring expert vacuuming of carpets and floors, precise dusting of every corner, and efficient mopping for a flawless finish..</Typography>

            <Typography marginBottom='20px'>Click Next to Choose a Date.</Typography>

            <Button sx={{marginRight: 1}} variant="contained" color="primary" onClick={() => {console.log('booked')}}>NEXT</Button>
            <Button onClick={handleEditClick}>EDIT DETAILS</Button>

            <Typography variant="h5" marginTop='20px' marginBottom='5px'>
                If you need to make any changes to your estimate, please use the edit button. Do not hit the back arrow or refresh the browser.
            </Typography>

            {/* for the user in future cards */}
            {/*<Typography variant="body1" marginBottom='20px'> Please note we expect to take about {estimate.servicedetails.data.totalhours} hours to complete the {estimate.servicedetails.typeofservice} </Typography>*/}
            {/*<Typography variant="body1" marginBottom='20px'>*/}
            {/*    Your anonymous user name is <b>{estimate.servicedetails.userID}</b> and your estimate number is: <b>{estimate.id}</b>.*/}
            {/*</Typography>*/}

            {/*<h1>Data for cleaners</h1>*/}
            {/*<p>total hours: {estimate.servicedetails.data.totalhours}</p>*/}
            {/*<p>total time all rooms: {estimate.servicedetails.data.totaltimerooms}</p>*/}
            {/*<p>total time all baths: {estimate.servicedetails.data.totaltimebaths}</p>*/}

        </>
    }

    return (
        <ThemeProvider theme={RapidCleanTheme}>
            <CssBaseline />
            <Card elevation={0} sx={{ marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '8px'}} >
                <CardContent>
                    <Typography color="secondary" variant="cardTitle" component="h1"display="inline">Our </Typography>
                    <Typography  marginBottom="20px" color="primary" variant="cardTitle" component='h1' display="inline">Estimate</Typography>
                    {content}
                </CardContent>
            </Card>
        </ThemeProvider>
    )

}


export default EstimateDetail;