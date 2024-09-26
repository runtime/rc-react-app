import '../styles/Header.css';
import { Image } from 'mui-image';
import Logo from '../logo.svg';
import {Box, Button, Grid, Link, Typography} from '@mui/material';
import HeaderImage from '../media/header-image.jpg';
import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import BottomNavigation from "@mui/material/BottomNavigation";
import {RapidCleanTheme} from "../themes/Theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import EstimateContext from "../context/estimate";



const Header = () => {
    //const navigate = useNavigate();
    const { setCurrentNavigation } = useContext(EstimateContext)

    //const navigate = useNavigate();
    const handleButtonClick = () => {
        // todo navigate to estimates
        //setCurrentNavigation(1);
        //navigate('/estimates');
        console.log('Button clicked!');
    }

    return (
        <Box sx={{ width: '100%'}}>
            <BottomNavigation sx={{ backgroundColor: RapidCleanTheme.palette.secondary.main }} showLabels value={0}>
                <Grid container alignItems="center" justifyContent="space-between" sx={{maxWidth: '1024px'}}>
                    <Grid item
                          sx={{
                              alignItems: 'left',
                              color: 'white',
                              fontFamily: 'Helvetica " "Arial ',
                              fontWeight: '600',
                              fontSize: '.9em',
                              paddingLeft: {xs: 3, sm: 3, md: 0, lg: 0},
                              transitionDuration: '0.3s',
                              transitionProperty: 'all',
                              transitionTimingFunction: 'linear',
                              opacity: {xs: 1, sm: 1, lg: 1},


                          }}>

                        <Link href="/" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', color: 'white', paddingTop: '9px'}}>

                            <Image src={Logo}
                                   width='100%'
                                   height={44}
                                   fit='cover'
                                   className='app-logo'
                                   display='flex'
                                   flexDirection='row'
                                   alt="rapidclean logo"
                            />

                        </Link>
                    </Grid>

                    {/* Copyright text on the right */}
                    <Grid item
                          sx={{
                              color: 'white',
                              fontFamily: 'Helvetica Bold" "Arial Bold',
                              fontWeight: '800',
                              fontSize: '1.15em',
                              alignItems: 'right',
                              paddingRight: {xs: 3, sm: 3, md: 3, lg: 0},
                              transitionDuration: '0.3s',
                              transitionProperty: 'all',
                              transitionTimingFunction: 'linear',
                              opacity: {xs: 1, sm: 1, lg: 1}
                          }}>
                        {/*<Typography sx={{fontSize: {xs:'.4em', sm:'.5em', md:'.75em'}}}*/}
                        {/*    align='center' component="p" variant="body1" color="white">*/}
                        {/*            CLEANING, Decluttering, AND ORGANIZING THE*/}
                        {/*    </Typography>*/}
                        {/*<Typography sx={{fontSize: {xs:'.4em', sm:'.5em', md:'.75em'}}} align='center' component="p" variant="body1" color="white">*/}
                        {/*    reduces anxiety AND HAS A POSITIVE IMPACT ON our mental health*/}
                        {/*</Typography>*/}
                        <Button variant='contained' text='white' color='primary' disableElevation onClick={handleButtonClick}
                                sx={{textTransform: 'Capitalize',
                                    size: "small",
                                    color:"primary",
                                    padding: '3px',
                                    paddingLeft: '9px',
                                    paddingRight: '9px',
                                    margin: 'auto',
                                    borderRadius: '6px',
                                    fontWeight: 'bold',
                                    minHeight: '20px',
                                    maxHeight: '30px',
                                }}
                        >
                            Free Estimate
                        </Button>
                    </Grid>
                </Grid>
            </BottomNavigation>
        </Box>
    );
}
        // <div>
        //     <Box sx={{
        //         backgroundColor: '#cae5b0',
        //         height: {xs: 60, sm: 72, lg:84},
        //         width: '100%',
        //     }}>
        //
        //         <Grid container alignItems="center" justifyContent="space-between" sx={{width: '100%', maxWidth: '1024px', backgroundColor:'#ff660'}}>
        //             <Grid item sx={{
        //                 alignItems: 'left',
        //                 color: 'white',
        //                 // paddingLeft: {xs: 2, sm: 2, md: 0, lg: 0},
        //                 transitionDuration: '0.3s',
        //                 transitionProperty: 'all',
        //                 transitionTimingFunction: 'linear',
        //                 opacity: {xs: 1, sm: 1, lg: 1},
        //             }}>
        //                 <Image src={Logo}
        //                        width='100%'
        //                        height={50}
        //                        fit='cover'
        //                        className='app-logo'
        //                        display='flex'
        //                        flexDirection='row'
        //                        alt="rapidclean logo"
        //                 />
        //             </Grid>
        //         </Grid>
        //
        //
        //
        //
        //     </Box>
        //
        //     {/*    <Box sx={{*/}
        //     {/*        zIndex: 1,*/}
        //     {/*        margin: 'auto',*/}
        //     {/*        // height: {xs: 42, sm: 48, md: 72, lg: 72},*/}
        //     {/*        // width: {xs: 120, sm: 140, md: 160, lg: 160},*/}
        //     {/*        textAlign: 'left',*/}
        //     {/*        position: 'inline',*/}
        //     {/*        // left: {xs: 20, sm: 20, md: 90, lg: 250},*/}
        //     {/*        // top: {xs: 10, sm: 8, md: 8, lg: 8}*/}
        //     {/*    }}>*/}
        //
        //     {/*        <Image src={Logo}*/}
        //     {/*               width='100%'*/}
        //     {/*            // height={10}*/}
        //     {/*               fit='cover'*/}
        //     {/*               className='app-logo'*/}
        //     {/*               display='flex'*/}
        //     {/*               flexDirection='row'*/}
        //     {/*               alt="rapidclean logo"*/}
        //     {/*        />*/}
        //     {/*</Box>*/}
        //
        //
        //
        // </div>
   // );
//}

export default Header;


