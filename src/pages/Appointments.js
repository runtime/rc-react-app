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
import UserEdit from '../components/UserEdit';
import UserDetail from '../components/UserDetail';
import RepeatService from '../components/RepeatService';
import Calendar from '../components/Calendar';


const Appointments = () => {
    const { estimate } = useContext(EstimateContext);
    const { user } = useContext(EstimateContext);
    console.log('[Appointments] estimate: ' + estimate);
    console.log('[Appointments] user: ' + user);

    const navigate = useNavigate();

    const handleEstimateClick = () => navigate('/estimates');

    console.log(user.hasOwnProperty("userdetails"));

    let content = <h3>loading</h3>

    // TODO Temporary Cal implmeentation below
    // stub data


    const cal = <Calendar />

    // IF we have an estimate with the right data structure but not one from the user
    // SHOW USER CREATE
    // if ((estimate.hasOwnProperty("servicedetails") && (!user.hasOwnProperty("userdetails")))) {
    //     content = <>
    //         <Grid>
    //             <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Enter </Typography>
    //             <Typography color="primary" variant="cardTitle" component='h1' display="inline">Information</Typography>
    //             <Typography variant="body1" marginBottom='20px'>You are one step closer to enjoying a pristine space with our {estimate.servicedetails.typeofservice} service, featuring expert vacuuming of carpets and floors, precise dusting of every corner, and efficient mopping for a flawless finish..</Typography>
    //
    //             <Typography variant="h4" color="primary" marginTop='20px' marginBottom='20px'>In order for us to hold a {estimate.servicedetails.typeofservice} of
    //                 your {estimate.servicedetails.numrooms} BR, {estimate.servicedetails.numbaths} BA {estimate.servicedetails.construct} for ${estimate.servicedetails.cost.total} will need some information.
    //             </Typography>
    //            {/* <Typography variant="body2" marginBottom='0px'>
    //                 Your Anonymous user ID: <b>{estimate.servicedetails.userID}</b>
    //             </Typography>*/}
    //             {/*<Typography variant="body2" marginBottom='20px'>*/}
    //             {/*    Your Personalized Estimate ID: <b>{estimate.id} </b>*/}
    //             {/*</Typography>*/}
    //         </Grid>
    //         {/*<Typography variant="h3" marginBottom='20px'>Select a Date:</Typography>*/}
    //
    //         <UserCreate />
    //     </>
    //     // IF wehave an estimate with the correct data structure AND we have the user data
    //     // SHOW USER DETAIL
    //     // TODO get the views right when you have a user we should see the userdetail screen welcoming them and asking for their address
    // } else if ((estimate.hasOwnProperty("servicedetails") && (user.hasOwnProperty("userdetails")))) {
    //    content =
    //        <UserDetail />
    // } else {
    //     //console.log('[EstimateDetail] (else if) estimate.servicedetails', estimate.servicedetails);
    //     content =
    //         <>
    //             <Grid>
    //                 <Typography color="secondary" variant="cardTitle" component="h1" display="inline">New </Typography>
    //                 <Typography color="primary" variant="cardTitle" component='h1' display="inline">Service</Typography>
    //                 <Typography variant="body1" marginBottom='20px'>
    //                     Get a Free Estimate before Booking. No personal information needed. No harassing phone calls or emails.  Book anytime.
    //                 </Typography>
    //                 {/*<Button onClick={handleEstimateClick}>*/}
    //                 {/*    Get Instant Free Estimate*/}
    //                 {/*</Button>*/}
    //                 <CardActions>
    //                     <Button
    //
    //                         variant="contained"
    //                         color="primary"
    //                         type="Submit"
    //                         onClick = {handleEstimateClick}
    //                         className='classes button'>
    //                         New Estimate
    //                     </Button>
    //                 </CardActions>
    //             </Grid>
    //
    //             <Grid marginTop = '40px'>
    //                 <RepeatService />
    //             </Grid>
    //
    //
    //         </>
    //
    // }
    return (
        <div className='Estimates'>
            <Box>
                <ThemeProvider theme={RapidCleanTheme}>
                    <CssBaseline enableColorScheme/>
                    <Card elevation={0} sx={{marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '8px'}}>
                        <CardContent>
                            <Box sx={{ minWidth: 120 }}>
                                <Typography color="black" display="inline">
                                    {/*{content}*/}
                                    {cal}
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