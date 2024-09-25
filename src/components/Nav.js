import '../styles/Nav.css'
import {
    Container,
    Box,
    Chip,
    Typography, ThemeProvider, CssBaseline
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import {Outlet, useNavigate, Link} from "react-router-dom";
import React from "react";
import { useState, useEffect } from 'react';
import EstimateContext from '../context/estimate';

const Nav = () => {

    // const [servicesActive, setServicesActive] = React.useState(true);
    // const [estimatesActive, setEstimatesActive] = React.useState(false);
    // const [appointmentsActive, setAppointmentsActive] = React.useState(false);
    // const [chatActive, setChatActive] = React.useState(false);


    const navigate = useNavigate();
    const {nav , setCurrentNavigation} = React.useContext(EstimateContext);

    // if (nav) {
    //     console.log('nav ', nav);
    // }
    const handleOnServicesClick = () => {
        console.log('handleOnServicesClick ', 0);
        setCurrentNavigation(0)
        navigate('/');
    }
    const handleOnEstimateClick = () => {
        setCurrentNavigation(1)
        navigate('/estimates');
    }
    const handleOnAppointmentsClick = () => {
        setCurrentNavigation(2)
        navigate('/appointments');
    }
    const handleOnChatClick = () => {
        setCurrentNavigation(3)
        navigate('/contact');
    }
    return (
        <div className='Nav'>
            <ThemeProvider theme={RapidCleanTheme}>
                <CssBaseline enableColorScheme />
                {/*THIS BOX IS THE OUTTER MOST CONTAINER AND SETS THE MARGIN FOR THE CONTENT PAGES*/}
                <Box
                    sx={{
                        margin: 'auto',
                        paddingLeft: { xs: 2, sm: 2, md: 10, lg: 20},
                        paddingRight: { xs: 2, sm: 2, md: 10, lg: 20}
                    }}
                >
                    {/*<div style={{marginTop: '20px'}}>*/}
                        <nav>
                            <Chip
                                size='large'
                                position='inline'
                                label='Our Services'
                                variant="filled"
                                color= {nav === 0? 'primary': 'secondary'}
                                pointerEvents='none'
                                onClick={handleOnServicesClick}
                                sx={{
                                    padding: '.3em',
                                    paddingLeft: {xs: '.125em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    paddingRight: {xs: '.125em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: {xs: '600', lg: '800'},
                                    fontSize: {xs: '.75em', sm:'.85em', md: '1em', lg: '1.25em'},
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    marginRight: {xs:'.2em', sm: '.4em', md: '1em', lg: '2em'},
                                    marginLeft: {xs:'.2em', sm: '.4em', md: '1em', lg: '2em'},
                                    transitionTimingFunction: 'linear',
                                    display: {xs: 'inline'},
                                    opacity: {xs: 1, sm: 1, lg: 1}
                                }}
                            />

                            <Chip
                                size='large'
                                position='relative'
                                label='Get Estimate'
                                variant="filled"
                                color= {nav === 1? 'primary': 'secondary'}
                                pointerEvents='none'
                                onClick={handleOnEstimateClick}
                                sx={{
                                    padding: '.3em',
                                    paddingLeft: {xs: '.25em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    paddingRight: {xs: '.25em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: {xs: '600', lg: '800'},
                                    fontSize: {xs: '.75em', sm:'.85em', md: '1em', lg: '1.25em'},
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    marginRight: {xs:'.2em', sm: '.4em', md: '1em', lg: '2em'},
                                    marginLeft: {xs:'.2em', sm: '.4em', md: '1em', lg: '2em'},
                                    transitionTimingFunction: 'linear',
                                    display: {xs: 'inline'},
                                    opacity: {xs: 1, sm: 1, lg: 1}
                                }}
                            />

                            <Chip
                                size='large'
                                position='relative'
                                label='Book Us'
                                variant="filled"
                                color= { nav===2? 'primary': 'secondary'}
                                pointerEvents='none'
                                onClick={handleOnAppointmentsClick}
                                sx={{
                                    padding: '.3em',
                                    paddingLeft: {xs: '.75em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    paddingRight: {xs: '.75em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: {xs: '600', lg: '800'},
                                    fontSize: {xs: '.75em', sm:'.85em', md: '1em', lg: '1.25em'},
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    marginRight: {xs:'.2em', sm: '.4em', md: '1em', lg: '2em'},
                                    marginLeft: {xs:'.2em', sm: '.4em', md: '1em', lg: '2em'},
                                    transitionTimingFunction: 'linear',
                                    display: {xs: 'inline'},
                                    opacity: {xs: 1, sm: 1, lg: 1}
                                }}
                            />

                            <Chip

                                size='large'
                                position='relative'
                                label='Contact Us'
                                variant="filled"
                                color= {nav===3? 'primary': 'secondary'}
                                pointerEvents='none'
                                onClick={handleOnChatClick}
                                sx={{
                                    padding: '.3em',
                                    paddingLeft: {xs: '.25em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    paddingRight: {xs: '.25em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: {xs: '600', lg: '800'},
                                    fontSize: {xs: '.75em', sm:'.85em', md: '1em', lg: '1.25em'},
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    marginRight: {xs:'.2em', sm: '.4em', md: '1em', lg: '2em'},
                                    marginLeft: {xs:'.2em', sm: '.4em', md: '1em', lg: '2em'},
                                    transitionTimingFunction: 'linear',
                                    display: {xs: 'inline'},
                                    opacity: {xs: 1, sm: 1, lg: 1}
                                }}
                            />

                        </nav>
                        <Outlet/>
                    {/*</div>*/}

                </Box>

            </ThemeProvider>
        </div>
    );
}


export default Nav;