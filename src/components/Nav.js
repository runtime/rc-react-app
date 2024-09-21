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

const Nav = () => {

    const [servicesActive, setServicesActive] = React.useState(true);
    const [estimatesActive, setEstimatesActive] = React.useState(false);
    const [appointmentsActive, setAppointmentsActive] = React.useState(false);
    const [chatActive, setChatActive] = React.useState(false);

    const navigate = useNavigate();
    const handleOnServicesClick = () => {
        console.log('handleOnServicesClick ', servicesActive);
        setServicesActive(!servicesActive);
        setEstimatesActive(false);
        setAppointmentsActive(false);
        setChatActive(false);
        navigate('/');
    }
    const handleOnEstimateClick = () => {
        setEstimatesActive(!estimatesActive);
        setServicesActive(false);
        setAppointmentsActive(false);
        setChatActive(false);
        navigate('/estimates');
    }
    const handleOnAppointmentsClick = () => {
        setAppointmentsActive(!appointmentsActive);
        setServicesActive(false);
        setEstimatesActive(false);
        setChatActive(false);
        navigate('/appointments');
    }
    const handleOnChatClick = () => {
        setChatActive(!chatActive);
        setServicesActive(false);
        setEstimatesActive(false);
        setAppointmentsActive(false);
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
                                active={servicesActive}
                                size='large'
                                position='relative'
                                label='Our Services'
                                variant="filled"
                                color= {servicesActive? 'primary': 'secondary'}
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
                                active={estimatesActive}
                                size='large'
                                position='relative'
                                label='Get Estimate'
                                variant="filled"
                                color= {estimatesActive? 'primary': 'secondary'}
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
                                active={appointmentsActive}
                                size='large'
                                position='relative'
                                label='Book Us'
                                variant="filled"
                                color= {appointmentsActive? 'primary': 'secondary'}
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
                                active={chatActive}
                                size='large'
                                position='relative'
                                label='Contact Us'
                                variant="filled"
                                color= {chatActive? 'primary': 'secondary'}

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