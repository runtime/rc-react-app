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

const UserDetail = () => {
    const { user } = useContext(EstimateContext);
    //const [showEdit, setShowEdit] = useState(false);

    const navigate = useNavigate();

    console.log('[UserDetail] user: ' + user.hasOwnProperty("user"));
    console.log('[UserDetail] user: ',  user);
    console.log('[UserDetail] ', JSON.stringify(user));
    console.log('[UserDetail] ', JSON.stringify(user, null, 2));
    console.dir(user)
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
    let content = <h3>loading</h3>
    if (user.hasOwnProperty("userdetails")) {
        content = <div>
            hi {user.userdetails.firstname}, can you please provide the address for the estimate
            </div>


    } else {
        content = <div>sorry i didn't seem to see you in our system</div>
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