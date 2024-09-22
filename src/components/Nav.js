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
                <Box
                    sx={{
                        paddingLeft: { xs: 3, sm: 6, md: 12, lg: 20 },
                        paddingRight: { xs: 3, sm: 6, md: 12, lg: 20 }
                    }}>
                    <div style={{marginTop: '20px'}}>
                        <nav>
                            <Chip
                                size='large'
                                position='relative'
                                label='Our Services'
                                variant="filled"
                                color= {nav === 0? 'primary': 'secondary'}
                                pointerEvents='none'
                                onClick={handleOnServicesClick}
                                sx={{
                                    padding: '16px',
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: '800',
                                    fontSize: '1.15em',
                                    minWidth: '200px',
                                    marginTop: '3px',
                                    marginRight: '24px',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    transitionTimingFunction: 'linear',
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
                                    padding: '16px',
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: '800',
                                    fontSize: '1.15em',
                                    minWidth: '200px',
                                    marginTop: '3px',
                                    marginRight: '24px',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    transitionTimingFunction: 'linear',
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
                                    padding: '16px',
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: '800',
                                    fontSize: '1.15em',
                                    minWidth: '200px',
                                    marginTop: '3px',
                                    marginRight: '24px',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    transitionTimingFunction: 'linear',
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
                                    padding: '16px',
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: '800',
                                    fontSize: '1.15em',
                                    minWidth: '200px',
                                    marginTop: '3px',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    transitionTimingFunction: 'linear',
                                    opacity: {xs: 1, sm: 1, lg: 1}
                                }}
                            />

                        </nav>
                        <Outlet/>
                    </div>

                </Box>

            </ThemeProvider>
        </div>
    );
}


export default Nav;