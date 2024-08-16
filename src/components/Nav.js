import '../styles/Nav.css'
import {
    Container,
    Box,
    Chip,
    Typography, ThemeProvider, CssBaseline
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import {Outlet, Link} from "react-router-dom";
import React from "react";

const Nav = () => {
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
                                label='About Us'
                                variant="filled"
                                color='secondary'
                                pointerEvents='none'
                                onClick={() => window.location.href = '/'}
                                sx={{
                                    padding: '16px',
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: '800',
                                    fontSize: '1.15em',
                                    marginTop: '3px',
                                    marginRight: '24px',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    transitionTimingFunction: 'linear',
                                    opacity: {xs: 0, sm: 0.8, lg: 0.8}
                                }}
                            />

                            {/*<Chip*/}
                            {/*    size='large'*/}
                            {/*    position='relative'*/}
                            {/*    label='Get Estimate'*/}
                            {/*    variant="filled"*/}
                            {/*    color='secondary'*/}
                            {/*    pointerEvents='none'*/}
                            {/*    onClick={() => window.location.href = '/Estimates'}*/}
                            {/*    sx={{*/}
                            {/*        padding: '16px',*/}
                            {/*        color: 'white',*/}
                            {/*        fontFamily: 'Helvetica Bold" "Arial Bold',*/}
                            {/*        fontWeight: '800',*/}
                            {/*        fontSize: '1.15em',*/}
                            {/*        marginTop: '3px',*/}
                            {/*        marginRight: '24px',*/}
                            {/*        transitionDuration: '0.3s',*/}
                            {/*        transitionProperty: 'all',*/}
                            {/*        transitionTimingFunction: 'linear',*/}
                            {/*        opacity: {xs: 0, sm: 0.8, lg: 0.8}*/}
                            {/*    }}*/}
                            {/*/>*/}

                            {/*<Chip*/}
                            {/*    size='large'*/}
                            {/*    position='relative'*/}
                            {/*    label='Appointments'*/}
                            {/*    variant="filled"*/}
                            {/*    color='secondary'*/}
                            {/*    pointerEvents='none'*/}
                            {/*    onClick={() => window.location.href = '/Appointments'}*/}
                            {/*    sx={{*/}
                            {/*        padding: '16px',*/}
                            {/*        color: 'white',*/}
                            {/*        fontFamily: 'Helvetica Bold" "Arial Bold',*/}
                            {/*        fontWeight: '800',*/}
                            {/*        fontSize: '1.15em',*/}
                            {/*        marginTop: '3px',*/}
                            {/*        marginRight: '24px',*/}
                            {/*        transitionDuration: '0.3s',*/}
                            {/*        transitionProperty: 'all',*/}
                            {/*        transitionTimingFunction: 'linear',*/}
                            {/*        opacity: {xs: 0, sm: 0.8, lg: 0.8}*/}
                            {/*    }}*/}
                            {/*/>*/}

                            <Chip
                                size='large'
                                position='relative'
                                label='Contact Us'
                                variant="filled"
                                color='secondary'
                                pointerEvents='none'
                                onClick={() => window.location.href = '/Contact'}
                                sx={{
                                    padding: '16px',
                                    color: 'white',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: '800',
                                    fontSize: '1.15em',
                                    marginTop: '3px',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    transitionTimingFunction: 'linear',
                                    opacity: {xs: 0, sm: 0.8, lg: 0.8}
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