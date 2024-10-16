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

import Nav from "./Nav";



const Header = () => {
    //const navigate = useNavigate();
    //const { setCurrentNavigation } = useContext(EstimateContext)

    //const navigate = useNavigate();
    const handleButtonClick = () => {
        // todo navigate to estimates
        //setCurrentNavigation(1);
        //navigate('/estimates');
        //console.log('Button clicked!');
    }

    return (
        //todo to sticky menu zIndex: 1, position: 'fixed'

        <Box sx={{ width: '100%'}}>
            <Image src={HeaderImage}
                   display='flex'
                   fit='cover'
                   width='100%'
                   alt="rapidclean cleaners serving Essex NJ"
            />
            <Box sx={{maxWidth: '960px', margin: 'auto', position: 'absolute', top: 2}}>
                <Box sx={{backgroundColor: '#cccccc', zIndex: 2, height: '50px',maxWidth: '200px', margin: 'auto', display: 'block'}}>
                    <Link href="/" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', paddingTop: '0px'}}>

                        <Image src={Logo}
                               width='100%'
                            // height={30}
                            //    fit='cover'
                            //    className='app-logo'
                            //    display='flex'
                            //    flexDirection='row'
                               alt="rapidclean logo"
                        />

                    </Link>
                </Box>
            </Box>


            <BottomNavigation showLabels value={0}>

                <Grid container alignItems="center" justifyContent="space-between" sx={{margin: 'auto', zIndex: 2, maxWidth: '960px'}}>
                    <Grid item xs={3} sm={3} md={3} lg={3}
                          sx={{
                              alignItems: 'left',
                              color: 'white',
                              fontFamily: 'Helvetica " "Arial ',
                              fontWeight: '600',
                              paddingLeft: {xs: 3, sm: 3, md: 3, lg: 0},
                              transitionDuration: '0.2s',
                              transitionProperty: 'all',
                              transitionTimingFunction: 'linear',
                              opacity: {xs: 1, sm: 1, lg: 1},
                          }}>



                    </Grid>

                {/*    /!* Copyright text on the right *!/*/}



                    <Grid item xs={9} sm={9}>
                        <Typography sx={{fontSize: {xs:'.6em', sm:'.65em', md:'.75em', lg: '.85em'}}}
                                    align='right' paddingRight={3} color="primary">
                           Exclusively Serving Chatham, Short Hills, Maplewood, Millburn, Livingston, West Orange and South Orange.
                        </Typography>
                    </Grid>


                    </Grid>

            </BottomNavigation>
</Box>

    );
}


export default Header;


