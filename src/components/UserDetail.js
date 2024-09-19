// import React, {useContext, useState} from 'react'
// import '../styles/Estimates.css';
// import EstimateContext from '../context/estimate';
// import { useNavigate } from 'react-router-dom';
// import UserEdit from './UserEdit';
// // import EstimateChip from './EstimateChip';
//
// import {
//     Typography, Grid, Box, Button, Chip,
//     ThemeProvider, CssBaseline, Card,
//     CardHeader, CardContent, CardActions,
//     FormControl, Select, MenuItem, InputLabel,
//     Checkbox,FormControlLabel, FormGroup,
// } from '@mui/material';
// import { RapidCleanTheme } from "../themes/Theme.js";
// import LocationCreate from './LocationCreate';
// import Calendar from "./Calendar";
// //
// // const UserDetail = () => {
// //     const { estimate } = useContext(EstimateContext);
// //     const { user } = useContext(EstimateContext);
// //     const { location } = useContext(EstimateContext);
// //     const { findLocationByUserId } = useContext(EstimateContext);
// //     //const [showEdit, setShowEdit] = useState(false);
// //
// //     const navigate = useNavigate();
// //
// //     console.log('[UserDetail] user: ' + user.hasOwnProperty("user"));
// //     console.log('[UserDetail] user: ',  user);
// //     console.log('[UserDetail] ', JSON.stringify(user));
// //     console.log('[UserDetail] ', JSON.stringify(user, null, 2));
// //     //console.dir('[UserDetail] user: ',  user);
// //     //console.log('[UserDetail] estimate.hasOwnProperty servicedetails: ' + estimate.hasOwnProperty("servicedetails"));
// //
// //     // create a string in US Currency for Chip
// //
// //
// //     const handleNextClick = () => {
// //         console.log('[UserDetail] handleNextClick ---> Appointments');
// //         //navigate('/appointments');
// //     }
// //
// //     const handleEditClick = () => {
// //        // setShowEdit(!showEdit);
// //     }
// //
// //     const handleOnEditCloseClick = () => {
// //         console.log('[UserDetail] handleOnEditCloseClick');
// //        // setShowEdit(!showEdit);
// //     }
// //
// //     const handleSubmit = () => {
// //         console.log('[UserDetail] handleSubmit');
// //       //  setShowEdit(false);
// //     }
// //
// //     // content is the markup that is displayed in the browser depending on the state of the estimate
// //     //todo follow the same paradigmn as the EstimateDetail component
// //     // if there is nothing
// //     let content = <h3>loading</h3>
// //     // if there are userdetails but no location lets ask for the location
// //     if (user.hasOwnProperty("userDetails") && (!location.hasOwnProperty("locationddetails"))) {
// //         // TODO Check to see if we have a location by using a fetch
// //         const foundLocation = findLocationByUserId(user.userId)
// //         console.log('[UserDetail] user.userId: ' + user.userId);
// //         console.log('[UserDetail] foundLocation: ', foundLocation);
// //         if (foundLocation) {
// //             console.log('[UserDetail] foundLocation: ', foundLocation);
// //         } else {
// //             console.log('[UserDetail] did not find foundLocation: ', foundLocation);
// //         }
// //         content = <div>
// //             hi {user.userDetails.firstname}, can you please provide the address for the estimate
// //             <LocationCreate />
// //             </div>
// //
// //     //
// //     } else if (user.hasOwnProperty("userDetails") && (location.hasOwnProperty("locationdetails"))) {
// //         // content = <div>sorry i didn't seem to see you in our system</div>
// //
// //         content = <>
// //             <Typography variant="h4" marginTop='20px' marginBottom='20px'>Please Choose A date for service of your  {estimate.servicedetails.typeofservice} of
// //                 your {estimate.servicedetails.numrooms} BR, {estimate.servicedetails.numbaths} BA {estimate.servicedetails.construct}
// //             </Typography>
// //             <Calendar />
// //             { /*todo get the calendar web hook response and show thank you* / }
// //             {/*<EstimateEdit estimate={estimate} onSubmit={handleSubmit} onEditCloseClick={handleOnEditCloseClick}/>*/}
// //             {/*<Button onClick={handleOnEditCloseClick}>Cancel</Button>*/}
// //             </>
// //     }
// //
// //     // IF we have an estimate with the right data structure but the user as asked to edit it
// //
// //     return (
// //         <ThemeProvider theme={RapidCleanTheme}>
// //             <CssBaseline />
// //             <Card elevation={0} sx={{ marginTop: 0, marginBottom: 1, minWidth: 275, borderRadius: '8px'}} >
// //                 <CardContent>
// //                     <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Your </Typography>
// //                     <Typography  marginBottom="20px" color="primary" variant="cardTitle" component='h1' display="inline">Details</Typography>
// //                     {content}
// //                 </CardContent>
// //             </Card>
// //         </ThemeProvider>
// //     )
// //
// // }
// //
// //
// // export default UserDetail;
//
//
// const UserDetail = () => {
//     const { estimate, user, location, findLocationByUserId } = useContext(EstimateContext);
//
//     const checkLocation = async () => {
//         if (user.hasOwnProperty("userDetails")) {
//             try {
//                 const foundLocation = await findLocationByUserId(user.userId);
//                 console.log('[UserDetail] foundLocation: ', foundLocation);
//                 if (!foundLocation) {
//                     console.log('[UserDetail] did not find location.');
//                 }
//             } catch (error) {
//                 console.error('Error checking location:', error);
//             }
//         }
//     };
//
//     // Call checkLocation whenever user state changes
//     React.useEffect(() => {
//         if (user && user.hasOwnProperty('userDetails')) {
//             checkLocation();
//         }
//     }, [user]);
//
//     let content = <h3>Loading...</h3>;
//
//     if (user.hasOwnProperty("userDetails") && !location.hasOwnProperty("locationdetails")) {
//         content = (
//             <div>
//                 Hi {user.userDetails.firstname}, can you please provide the address for the estimate:
//                 <LocationCreate />
//             </div>
//         );
//     } else if (user.hasOwnProperty("userDetails") && location.hasOwnProperty("locationdetails")) {
//         content = (
//             <>
//                 <Typography variant="h3" marginTop="20px" marginBottom="0">
//                     Thank you {user.userDetails.firstname}!
//                 </Typography>
//
//                 <Typography variant="body1"marginTop="20px" marginBottom="0px">
//                 Please choose a date for service of your {estimate.servicedetails.typeofservice} of
//                 your {estimate.servicedetails.numrooms} BR, {estimate.servicedetails.numbaths} BA {estimate.servicedetails.construct}
//                 </Typography>
//
//                 <Calendar />
//                 {/* Add any additional content or components here */}
//                 <Typography variant="body1" marginTop="20px" marginBottom="20px">
//                     We have anonymously registered you. Don't worry your data is safe with us.
//                 </Typography>
//
//                 <Typography variant="body1" marginTop="20px" marginBottom="20px">
//                     Feel free to re-use this estimate ID ({estimate.estimateId}) for future estimates.
//                 </Typography>
//
//
//
//                 </>
//
//         );
//     }
//
//     return (
//         <ThemeProvider theme={RapidCleanTheme}>
//             <CssBaseline />
//             <Card elevation={0} sx={{ marginTop: 0, marginBottom: 1, minWidth: 275, borderRadius: '8px' }}>
//                 <CardContent>
//                     <Typography color="secondary" marginRight="10" variant="cardTitle" component="h1" display="inline">
//                         Your
//                     </Typography>
//                     <Typography marginBottom="20px" color="primary" variant="cardTitle" component="h1" display="inline" >
//                         Details
//                     </Typography>
//                     {content}
//                 </CardContent>
//             </Card>
//         </ThemeProvider>
//     );
// };
//
// export default UserDetail;

// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Estimates.css';
// import EstimateContext from '../context/estimate';
// import UserEdit from './UserEdit';
// import LocationCreate from './LocationCreate';
// import Calendar from "./Calendar";
// import {
//     Typography, Card, CardContent, ThemeProvider, CssBaseline, Button
// } from '@mui/material';
// import { RapidCleanTheme } from "../themes/Theme.js";
//
// const UserDetail = () => {
//     const { estimate, user, location, findLocationByUserId } = useContext(EstimateContext);
//     const [bookingConfirmed, setBookingConfirmed] = useState(false); // Track if booking is confirmed
//     const navigate = useNavigate();
//
//     const checkLocation = async () => {
//         if (user.hasOwnProperty("userDetails")) {
//             try {
//                 const foundLocation = await findLocationByUserId(user.userId);
//                 console.log('[UserDetail] foundLocation: ', foundLocation);
//                 if (!foundLocation) {
//                     console.log('[UserDetail] did not find location.');
//                 }
//             } catch (error) {
//                 console.error('Error checking location:', error);
//             }
//         }
//     };
//
//     // Call checkLocation whenever user state changes
//     useEffect(() => {
//         if (user && user.hasOwnProperty('userDetails')) {
//             checkLocation();
//         }
//     }, [user]);
//
//     // Example function to handle booking confirmation (you'll replace this with actual logic)
//     useEffect(() => {
//         // Mock of checking backend for booking status via API or webhook
//         const checkBookingStatus = async () => {
//             const response = await fetch('/api/booking-status'); // Replace with your real API call
//             const data = await response.json();
//             if (data.bookingConfirmed) {
//                 setBookingConfirmed(true);
//             }
//         };
//
//         checkBookingStatus();
//     }, []);
//
//     const handleGoHome = () => {
//         navigate('/'); // Navigate back to home page
//     };
//
//     let content = <h3>Loading...</h3>;
//
//     // If user exists but no location, prompt for location
//     if (user.hasOwnProperty("userDetails") && !location.hasOwnProperty("locationdetails")) {
//         content = (
//             <div>
//                 Hi {user.userDetails.firstname}, can you please provide the address for the estimate:
//                 <LocationCreate />
//             </div>
//         );
//     }
//     // If user and location exist, allow them to choose a date or show confirmation message
//     else if (user.hasOwnProperty("userDetails") && location.hasOwnProperty("locationdetails")) {
//         content = (
//             <>
//                 <Typography variant="h3" marginTop="20px" marginBottom="0">
//                     {bookingConfirmed
//                         ? `Congratulations, ${user.userDetails.firstname}!`
//                         : `Thank you ${user.userDetails.firstname}!`}
//                 </Typography>
//
//                 <Typography variant="body1" marginTop="20px" marginBottom="0px">
//                     {bookingConfirmed
//                         ? 'Your booking has been confirmed! Feel free to adjust the appointment as needed.'
//                         : `Please choose a date for service of your ${estimate.servicedetails.typeofservice} of your ${estimate.servicedetails.numrooms} BR, ${estimate.servicedetails.numbaths} BA ${estimate.servicedetails.construct}.`}
//                 </Typography>
//
//                 <Calendar />
//
//                 <Typography variant="body1" marginTop="20px" marginBottom="20px">
//                     {bookingConfirmed
//                         ? `Thank you for booking! Your estimate ID (${estimate.estimateId}) has been saved for future use.`
//                         : `We have anonymously registered you. Don't worry, your data is safe with us.`}
//                 </Typography>
//
//                 {bookingConfirmed && (
//                     <Button variant="contained" color="primary" onClick={handleGoHome} style={{ marginTop: '20px' }}>
//                         Return to Home
//                     </Button>
//                 )}
//             </>
//         );
//     }
//
//     return (
//         <ThemeProvider theme={RapidCleanTheme}>
//             <CssBaseline />
//             <Card elevation={0} sx={{ marginTop: 0, marginBottom: 1, minWidth: 275, borderRadius: '8px' }}>
//                 <CardContent>
//                     <Typography color="secondary" marginRight="10" variant="cardTitle" component="h1" display="inline">
//                         Your
//                     </Typography>
//                     <Typography marginBottom="20px" color="primary" variant="cardTitle" component="h1" display="inline">
//                         Details
//                     </Typography>
//                     {content}
//                 </CardContent>
//             </Card>
//         </ThemeProvider>
//     );
// };
//
// export default UserDetail;

// latest - has cal.com webhook,  userdetail changes and estimate updateBookingWithEstimateId
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
    const { estimate, user, location, findLocationByUserId, updateBookingWithEstimateId } = useContext(EstimateContext);
    const [bookingConfirmed, setBookingConfirmed] = useState(false); // Track if booking is confirmed
    const [bookingId, setBookingId] = useState(null); // Track the booking ID
    const navigate = useNavigate();

    const checkLocation = async () => {
        if (user.hasOwnProperty("userDetails")) {
            try {
                const foundLocation = await findLocationByUserId(user.userId);
                console.log('[UserDetail] foundLocation: ', foundLocation);
                if (!foundLocation) {
                    console.log('[UserDetail] did not find location.');
                }
            } catch (error) {
                console.error('Error checking location:', error);
            }
        }
    };

    // Call checkLocation whenever user state changes
    useEffect(() => {
        if (user && user.hasOwnProperty('userDetails')) {
            checkLocation();
        }
    }, [user]);

    // If booking is confirmed, update booking with estimateId
    useEffect(() => {
        if (bookingConfirmed && estimate && estimate.estimateId && bookingId) {
            // Call the function to update the booking with the estimateId
            updateBookingWithEstimateId(bookingId, estimate.estimateId)
                .then(() => {
                    console.log(`[UserDetail] Booking ${bookingId} updated with Estimate ID: ${estimate.estimateId}`);
                })
                .catch(error => {
                    console.error('Error updating booking with estimateId:', error);
                });
        }
    }, [bookingConfirmed, estimate, bookingId]);

    // Function to handle booking completion from Calendar component
    const handleBookingComplete = (bookingId) => {
        setBookingId(bookingId);
        setBookingConfirmed(true);
    };

    const handleGoHome = () => {
        navigate('/'); // Navigate back to home page
    };

    let content = <h3>Loading...</h3>;

    // If user exists but no location, prompt for location
    if (user.hasOwnProperty("userDetails") && !location.hasOwnProperty("locationdetails")) {
        content = (
            <div>
                Hi {user.userDetails.firstname}, can you please provide the address for the estimate:
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
                        ? 'Your booking has been confirmed! Feel free to adjust the appointment as needed.'
                        : `Please choose a date for service of your ${estimate.servicedetails.typeofservice} of your ${estimate.servicedetails.numrooms} BR, ${estimate.servicedetails.numbaths} BA ${estimate.servicedetails.construct}.`}
                </Typography>

                <Calendar onBookingComplete={handleBookingComplete} />

                <Typography variant="body1" marginTop="20px" marginBottom="20px">
                    {bookingConfirmed
                        ? `Thank you for booking! Your estimate ID (${estimate.estimateId}) has been saved for future use.`
                        : `We have anonymously registered you. Don't worry, your data is safe with us.`}
                </Typography>

                {bookingConfirmed && (
                    <Button variant="contained" color="primary" onClick={handleGoHome} style={{ marginTop: '20px' }}>
                        Return to Home
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
                    <Typography color="secondary" marginRight="10" variant="cardTitle" component="h1" display="inline">
                        Your
                    </Typography>
                    <Typography marginBottom="20px" color="primary" variant="cardTitle" component="h1" display="inline">
                        Details
                    </Typography>
                    {content}
                </CardContent>
            </Card>
        </ThemeProvider>
    );
};

export default UserDetail;
