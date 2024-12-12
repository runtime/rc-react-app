
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import LocationCreate from './LocationCreate';
import Calendar from "./Calendar";
import {
    Typography, Card, CardContent, ThemeProvider, CssBaseline, Button
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";

const UserDetail = () => {
    const { estimate, user, location, findLocationByUserId } = useContext(EstimateContext);
    const [bookingConfirmed, setBookingConfirmed] = useState(false); // Track if booking is confirmed
    const [bookingId, setBookingId] = useState(null); // Track the booking ID
    const navigate = useNavigate();

    const checkLocation = async () => {
        if (user.hasOwnProperty("userDetails")) {
            try {
                const foundLocation = await findLocationByUserId(user.userId);
                //console.log('[UserDetail] foundLocation: ', foundLocation);
                if (!foundLocation) {
                    //console.log('[UserDetail] did not find location.');
                }
            } catch (error) {
                //console.error('Error checking location:', error);
            }
        }
    };

    // Call checkLocation whenever user state changes
    useEffect(() => {
        if (user && user.hasOwnProperty('userDetails')) {
            checkLocation();
        }
    }, [user]);

    // Function to handle booking completion from Calendar component
    const handleBookingComplete = (bookingId) => {
        setBookingId(bookingId);
        setBookingConfirmed(true);
    };

    const handleGoHome = () => {
        //navigate('/'); // Navigate back to home page
        // reset brownser with window
        window.location.href = '/'; // This will navigate to the home page and refresh the browser
    };

    let content = <h3>Loading...</h3>;

    // If user exists but no location, prompt for location
    if (user.hasOwnProperty("userDetails") && !location.hasOwnProperty("locationdetails")) {
        content = (
            <div>
                Hi {user.userDetails.firstname}, can you please provide the address for this estimate so we know where to go clean 😊
                <LocationCreate />
            </div>
        );
    }
    // If user and location exist, allow them to choose a date or show confirmation message
    else if (user.hasOwnProperty("userDetails") && location.hasOwnProperty("locationdetails")) {
        content = (
            <>
                <Typography variant="h3" marginTop="20px" marginBottom="0">
                    {bookingConfirmed
                        ? `Congratulations, ${user.userDetails.firstname}!`
                        : `Thank you ${user.userDetails.firstname}!`}
                </Typography>

                <Typography variant="body1" marginTop="20px" marginBottom="0px">
                    {bookingConfirmed
                        ? 'Your booking has been confirmed! Please check your email. Important to note that Gmail may block requests from our calendar unless you approve us a known contact.'
                        : `Please choose a date for service of your ${estimate.servicedetails.typeofservice} of your ${estimate.servicedetails.numrooms} BR, ${estimate.servicedetails.numbaths} BA ${estimate.servicedetails.construct}.`}
                </Typography>

                <Calendar onBookingComplete={handleBookingComplete} />

                <Typography variant="body1" marginTop="20px" marginBottom="20px">
                    {bookingConfirmed
                        ? `Thank you for booking! Your estimate ID (${estimate.estimateId}) has been saved for future use.`
                        : `We have anonymously registered you. We will send your login credentials in a email with your booking confirmation.  We respect your privacy and do not give your data to third parties. We do not collect cookies, tokens or use pixels to track you.`}
                </Typography>

                {bookingConfirmed && (
                    <Button variant="contained" color="primary" onClick={handleGoHome} style={{ marginTop: '20px' }}>
                        EXIT
                    </Button>
                )}
            </>
        );
    }

    return (
        <ThemeProvider theme={RapidCleanTheme}>
            <CssBaseline />
            <Card elevation={0} sx={{ marginTop: 0, marginBottom: 1, minWidth: 275, borderRadius: '8px' }}>
                <CardContent>
                    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">
                        Your
                    </Typography>
                    <Typography marginLeft='6px' marginBottom="20px" color="primary" variant="cardTitle" component="h1" display="inline">
                         Details
                    </Typography>
                    {content}
                </CardContent>
            </Card>
        </ThemeProvider>
    );
};

export default UserDetail;
