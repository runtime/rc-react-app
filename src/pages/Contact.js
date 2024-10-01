import '../styles/Contact.css'
import React from "react";
import {
    Card,
    Grid,
    Box,
    Typography, ThemeProvider, CssBaseline, Button, CardContent, Link
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
                width="100%"
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
                        <Card elevation={0} sx={{marginTop: 2.5, marginBottom: 1, minWidth: 375, borderRadius: '8px'}}>
                            <CardContent>
                                <Box >
                                    <Grid container spacing={6}>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                            {/*<Typography color="secondary" variant="cardTitle" component="h1" display="inline">Chat </Typography>*/}
                                            {/*<Typography sx={{marginBottom: 2}} color="primary" variant="cardTitle"  component='h1' display="inline">With Us</Typography>*/}
                                            <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Chat With </Typography>
                                            <Typography color="primary" variant="cardTitle"  component='h1' display="inline">Us</Typography>
                                            <Typography sx={{marginBottom: 2}} component='body'>Chat with a Customer Service Assistant 24/7. This is the fastest way to contact us.</Typography>
                                            <Box> {content} </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                            <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Email </Typography>
                                            <Typography color="primary" variant="cardTitle"  component='h1' display="inline">Us</Typography>
                                            <Typography sx={{marginBottom: 1}} component='body'>We'd love to hear from you, you can email us anytime.</Typography>
                                            <Typography sx={{marginBottom: 3}} component='body' variant="h4" color='primary'>rapidcleanering@gmail.com.</Typography>
                                            <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Text </Typography>
                                            <Typography color="primary" variant="cardTitle"  component='h1' display="inline">Us</Typography>
                                            <Typography sx={{marginBottom: 1}} component='body'>Text us, if  you prefer.</Typography>
                                            <Typography sx={{marginBottom: 3}} component='body' variant="h4"  color='primary'>212-555-1212.</Typography>
                                            <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Call </Typography>
                                            <Typography color="primary" variant="cardTitle"  component='h1' display="inline">Us</Typography>
                                            <Typography sx={{marginBottom: 1}} component='body'>Call us between 9-5 M-F. We will try to return your call as quickly as possible.  </Typography>
                                            <Typography sx={{marginBottom: 3}} component='body' variant="h4"  color='primary'>212-555-1212</Typography>
                                            <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Follow </Typography>
                                            <Typography color="primary" variant="cardTitle"  component='h1' display="inline">Us</Typography>
                                            <Typography sx={{marginBottom: 1}} component='body' >Stay up to date with our social to latest services and offers! </Typography>

                                            {/*<Typography color="primary" component='body'>Instagram:</Typography>*/}
                                           <Link href="https://www.instagram.com/rapidclean_" target="_blank" rel="noopener" sx={{ fontSize: '1em', fontWeight: '600', display: 'flex', alignItems: 'center', color: 'primary' }}>
                                                {/*<InstagramIcon />*/}
                                                Follow Us on Instagram!
                                            </Link>

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