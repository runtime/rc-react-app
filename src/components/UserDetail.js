import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import { useNavigate } from 'react-router-dom';
import UserEdit from './UserEdit';
// import EstimateChip from './EstimateChip';

import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox,FormControlLabel, FormGroup,
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import LocationCreate from './LocationCreate';
import Calendar from "./Calendar";

const UserDetail = () => {
    const { estimate } = useContext(EstimateContext);
    const { user } = useContext(EstimateContext);
    const { location } = useContext(EstimateContext);
    const { findLocationByUserId } = useContext(EstimateContext);
    //const [showEdit, setShowEdit] = useState(false);

    const navigate = useNavigate();

    console.log('[UserDetail] user: ' + user.hasOwnProperty("user"));
    console.log('[UserDetail] user: ',  user);
    console.log('[UserDetail] ', JSON.stringify(user));
    console.log('[UserDetail] ', JSON.stringify(user, null, 2));
    //console.dir('[UserDetail] user: ',  user);
    //console.log('[UserDetail] estimate.hasOwnProperty servicedetails: ' + estimate.hasOwnProperty("servicedetails"));

    // create a string in US Currency for Chip


    const handleNextClick = () => {
        console.log('[UserDetail] handleNextClick ---> Appointments');
        //navigate('/appointments');
    }

    const handleEditClick = () => {
       // setShowEdit(!showEdit);
    }

    const handleOnEditCloseClick = () => {
        console.log('[UserDetail] handleOnEditCloseClick');
       // setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        console.log('[UserDetail] handleSubmit');
      //  setShowEdit(false);
    }

    // content is the markup that is displayed in the browser depending on the state of the estimate
    //todo follow the same paradigmn as the EstimateDetail component
    // if there is nothing
    let content = <h3>loading</h3>
    // if there are userdetails but no location lets ask for the location
    if (user.hasOwnProperty("userDetails") && (!location.hasOwnProperty("locationDetails"))) {
        // TODO Check to see if we have a location by using a fetch
        const foundLocation = findLocationByUserId(user.userId)
        console.log('[UserDetail] user.userId: ' + user.userId);
        console.log('[UserDetail] foundLocation: ', foundLocation);
        if (foundLocation) {
            console.log('[UserDetail] foundLocation: ', foundLocation);
        } else {
            console.log('[UserDetail] did not find foundLocation: ', foundLocation);
        }
        content = <div>
            hi {user.userDetails.firstname}, can you please provide the address for the estimate
            <LocationCreate />
            </div>

    //
    } else if (user.hasOwnProperty("userDetails") && (location.hasOwnProperty("locationDetails"))) {
        // content = <div>sorry i didn't seem to see you in our system</div>

        content = <>
            <Typography variant="h4" marginTop='20px' marginBottom='20px'>Please Choose A date for service of your  {estimate.servicedetails.typeofservice} of
                your {estimate.servicedetails.numrooms} BR, {estimate.servicedetails.numbaths} BA {estimate.servicedetails.construct}
            </Typography>
            <Calendar />
            { /*todo get the calendar web hook response and show thank you* / }
            {/*<EstimateEdit estimate={estimate} onSubmit={handleSubmit} onEditCloseClick={handleOnEditCloseClick}/>*/}
            {/*<Button onClick={handleOnEditCloseClick}>Cancel</Button>*/}
            </>
    }

    // IF we have an estimate with the right data structure but the user as asked to edit it

    return (
        <ThemeProvider theme={RapidCleanTheme}>
            <CssBaseline />
            <Card elevation={0} sx={{ marginTop: 0, marginBottom: 1, minWidth: 275, borderRadius: '8px'}} >
                <CardContent>
                    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Your </Typography>
                    <Typography  marginBottom="20px" color="primary" variant="cardTitle" component='h1' display="inline">Details</Typography>
                    {content}
                </CardContent>
            </Card>
        </ThemeProvider>
    )

}


export default UserDetail;