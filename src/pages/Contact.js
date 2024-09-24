import '../styles/Contact.css'
import React from "react";
import {
    Card,
    Grid,
    Box,
    Typography, ThemeProvider, CssBaseline, Button, CardContent
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import {useContext} from "react";
import EstimateContext from "../context/estimate";


const Contact = () => {
    const {estimate} = useContext(EstimateContext);
    console.log('[Contact] estimate ', estimate);
    let content;
    // if we have a booking
    // if we have an estimate, a user and a location but not a booking
    // if we have an estimate and a user but no location
    // if we have an estimate only
    // if we have nothing

    if (estimate.hasOwnProperty("servicedetails")) {
        content = <div> {estimate.servicedetails.cost.total} </div>
    } else {
        content = <div className="chat">
            <iframe
                allow="microphone;"
                // width="100%"
                height="100%"
                src="https://console.dialogflow.com/api-client/demo/embedded/e9bd9e6a-7fdf-46bf-9d45-30c9af1b2523">
             </iframe>
        </div>
    }

    return (
        <div>
            <div className='contact'>
                <Box>
                    <ThemeProvider theme={RapidCleanTheme}>
                        <CssBaseline enableColorScheme/>
                        <Card elevation={12} sx={{marginTop: 2.5, marginBottom: 1, minWidth: 375, borderRadius: '8px'}}>
                            <CardContent>
                                <Box >
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                            {/*<Typography color="secondary" variant="cardTitle" component="h1" display="inline">Chat </Typography>*/}
                                            {/*<Typography sx={{marginBottom: 2}} color="primary" variant="cardTitle"  component='h1' display="inline">With Us</Typography>*/}
                                            <Box> {content} </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                            <Card elevation={6} sx={{marginTop: 2, marginBottom: 1, minWidth: 100, borderRadius: '4px'}}>
                                                <CardContent>
                                                    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Chat With </Typography>
                                                    <Typography color="primary" variant="cardTitle"  component='h1' display="inline">Us</Typography>
                                                    <Typography sx={{marginBottom: 2}} component='body'>Chat with our Customer Service Assistant. She can help you with your booking or answer any of your questions.</Typography>
                                                    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Text </Typography>
                                                    <Typography color="primary" variant="cardTitle"  component='h1' display="inline">Us</Typography>
                                                    <Typography sx={{marginBottom: 2}} component='body'>Contact Phone: 212-555-1212.</Typography>
                                                    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Email </Typography>
                                                    <Typography color="primary" variant="cardTitle"  component='h1' display="inline">Us</Typography>
                                                    <Typography sx={{marginBottom: 2}} component='body'>Email: rapidcleanering@gmail.com.</Typography>
                                                </CardContent>
                                            </Card>

                                        </Grid>


                                    </Grid>
                                </Box>
                            </CardContent>
                        </Card>
                    </ThemeProvider>
                        <Grid/>
                </Box>
            </div>

        </div>
    )
}
export default Contact;