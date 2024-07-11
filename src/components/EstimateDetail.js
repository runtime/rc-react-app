import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox,FormControlLabel, FormGroup,
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";


const EstimateDetail = () => {

   const [showEdit, setShowEdit] = useState(false);
   const { estimate } = useContext(EstimateContext);

   console.log('[EstimateDetail] estimate: ' + estimate);
   console.log('[EstimateDetail] estimate.hasOwnProperty servicedetails: ' + estimate.hasOwnProperty("servicedetails"));

   let content = <div><p>Loading...</p></div>;

    if (!estimate.hasOwnProperty("servicedetails")) {
       content =
           <>
               <Typography variant="body1" marginBottom='20px'>
                   There are no details about your service yet
               </Typography>
               <Typography variant="body1" marginBottom='20px'>
                   waiting..
               </Typography>
           </>

    } else {
        //helper function to convert totals to a US dollar amounts
        const estimateDisplay = estimate.servicedetails.cost.total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        }); /* $2,500.00 */

        content = <>

            <Chip
                size='small'
                position='relative'
                label={estimateDisplay}
                variant="contained"
                color='secondary'
                pointerEvents='none'
                sx={{
                    padding: '2px',
                    fontFamily: 'Helvetica Bold" "Arial Bold',
                    fontWeight: '800',
                    fontSize: '.85em',
                    minWidth: '80px',
                    marginLeft: '12px',
                    transitionDuration: '0.3s',
                    transitionProperty: 'all',
                    transitionTimingFunction: 'linear',
                    opacity: {xs: 0.8, sm: 0.8, lg: 0.8}
                }}
            />
            <Typography variant="h4" marginTop='20px' marginBottom='20px'>For a {estimate.servicedetails.typeofservice} of
                your {estimate.servicedetails.numrooms} BR, {estimate.servicedetails.numbaths} BA {estimate.servicedetails.construct}
            </Typography>
            <Typography variant="body1" marginBottom='20px'>Awesome, you are almost about to experience a pristine space with our {estimate.servicedetails.typeofservice} service, featuring expert vacuuming of carpets and floors, precise dusting of every corner, and efficient mopping for a flawless finish..</Typography>
            <Typography variant="body1" marginBottom='20px'> Please expect us to take about {estimate.servicedetails.data.totalhours} hours to complete the {estimate.servicedetails.typeofservice} </Typography>
            <Typography marginBottom='20px'>Click book now to choose a date for the service.</Typography>
            <Typography variant="h5" marginBottom='20px'>
                If you need to make any changes to your estimate, please click edit to update any details of your estimate.
                Do not hit the back arrow or refresh the browser.
            </Typography>
            <Button sx={{marginRight: 1}} variant="contained" color="primary" onClick={() => setShowEdit(!showEdit)}>BOOK NOW</Button>
            <Button marginBottom='20px' variant="contained" color="primary" onClick={() => setShowEdit(!showEdit)}>EDIT</Button>

            {/*<h1>Data for cleaners</h1>*/}
            {/*<p>total hours: {estimate.servicedetails.data.totalhours}</p>*/}
            {/*<p>total time all rooms: {estimate.servicedetails.data.totaltimerooms}</p>*/}
            {/*<p>total time all baths: {estimate.servicedetails.data.totaltimebaths}</p>*/}

        </>

    }

    return (
        <div className='Estimates'>

        <Box>
                <ThemeProvider theme={RapidCleanTheme}>
                    <CssBaseline enableColorScheme/>
                    <Card elevation={0} sx={{marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '8px'}}>
                        <CardContent>
                            <Typography color="secondary" variant="cardTitle" component="h1"
                                        display="inline">Our </Typography>
                            <Typography  marginBottom="20px" color="primary" variant="cardTitle" component='h1'
                                        display="inline">Estimate</Typography>

                            {content}

                        </CardContent>
                    </Card>
                </ThemeProvider>
            </Box>
        </div>
    )
}


export default EstimateDetail;