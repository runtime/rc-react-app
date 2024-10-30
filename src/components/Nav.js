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
        //console.log('handleOnServicesClick ', 0);
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
                        width: '100%',
                        maxWidth: '960px',
                        minWidth: '320px',
                        minHeight: '90vh',
                        paddingLeft: { xs: 2, sm: 2, md: 2, lg: 0},
                        paddingRight: { xs: 2, sm: 2, md: 2, lg: 0}
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
                                    padding: '.2em',
                                    // paddingLeft: {xs: '.05em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    // paddingRight: {xs: '.05em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: {xs: '500', lg: '800'},
                                    fontSize: {xs: '.75em', sm:'.85em', md: '1em', lg: '1.25em'},
                                    transitionDuration: '0.2s',
                                    transitionProperty: 'all',
                                    marginRight: {xs:'.5em', sm: '.5em', md: '.75em', lg: '1em'},
                                    // marginLeft: {xs:'.4em', sm: '.4em', md: '1em', lg: '1em'},
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
                                    padding: '.2em',
                                    // paddingLeft: {xs: '.05em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    // paddingRight: {xs: '.05em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: {xs: '500', lg: '800'},
                                    fontSize: {xs: '.75em', sm:'.85em', md: '1em', lg: '1.25em'},
                                    transitionDuration: '0.2s',
                                    transitionProperty: 'all',
                                    marginRight: {xs:'.5em', sm: '.5em', md: '.75em', lg: '1em'},
                                    // marginLeft: {xs:'.02em', sm: '.4em', md: '1em', lg: '1em'},
                                    transitionTimingFunction: 'linear',
                                    display: {xs: 'inline'},
                                    opacity: {xs: 1, sm: 1, lg: 1}
                                }}
                            />

                            <Chip
                                size='large'
                                position='relative'
                                label='Book Now'
                                variant="filled"
                                color= { nav===2? 'primary': 'secondary'}
                                pointerEvents='none'
                                onClick={handleOnAppointmentsClick}
                                sx={{
                                    padding: '.2em',
                                    paddingLeft: {xs: '.05em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    paddingRight: {xs: '.05em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: {xs: '500', lg: '800'},
                                    fontSize: {xs: '.75em', sm:'.85em', md: '1em', lg: '1.25em'},
                                    transitionDuration: '0.2s',
                                    transitionProperty: 'all',
                                    marginRight: {xs:'.5em', sm: '.5em', md: '.75em', lg: '1em'},
                                    // marginLeft: {xs:'.02em', sm: '.4em', md: '1em', lg: '1em'},
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
                                    padding: '.2em',
                                    // paddingLeft: {xs: '.05em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    // paddingRight: {xs: '.05em', sm:'.65em', md: '.75em', lg:'1em', xlg:'3em'},
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: {xs: '500', lg: '800'},
                                    fontSize: {xs: '.75em', sm:'.85em', md: '1em', lg: '1.25em'},
                                    transitionDuration: '0.2s',
                                    transitionProperty: 'all',
                                    // marginRight: {xs:'.6em', sm: '.6em', md: '1em', lg: '0em'},
                                    // marginLeft: {xs:'0em', sm: '.6em', md: '1em', lg: '2em'},
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