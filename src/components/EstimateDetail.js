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

    let estimateDisplay = estimate.servicedetails.cost.total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }); /* $2,500.00 */

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
            <Typography variant="body1" marginBottom='20px'>For a {estimate.servicedetails.typeofservice} of
                your {estimate.servicedetails.numrooms} BR, {estimate.servicedetails.numbaths} BA {estimate.servicedetails.construct}</Typography>
            <Typography variant="body1" marginBottom='20px'> Please expect us to take about {estimate.servicedetails.data.totalhours} hours to complete the {estimate.servicedetails.typeofservice} </Typography>
            <Typography>click edit to update your estimate or book now to choose a date of service </Typography>
            <Button variant="contained" color="primary" onClick={() => setShowEdit(!showEdit)}>BOOK NOW</Button>
            <Button variant="contained" color="primary" onClick={() => setShowEdit(!showEdit)}>EDIT</Button>

            <h1>Data for cleaners</h1>
            <p>total hours: {estimate.servicedetails.data.totalhours}</p>
            <p>total time all rooms: {estimate.servicedetails.data.totaltimerooms}</p>
            <p>total time all baths: {estimate.servicedetails.data.totaltimebaths}</p>


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
                                        display="inline">Your </Typography>
                            <Typography color="primary" variant="cardTitle" component='h1'
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