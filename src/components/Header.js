import '../styles/Header.css';
import { Image } from 'mui-image';
import Logo from '../logo.svg';
import {Box, Button, Grid, Link, Typography} from '@mui/material';
import HeaderImage from '../media/header-image.jpg';
import HeaderTown from '../media/rc-town-header.png';
import React, {useContext} from "react";
//import { useNavigate } from 'react-router-dom';
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
        <Box sx={{
            backgroundColor: '#bddaa6', //<-- light green from primary color
            width: '100%',
            //paddingLeft: { xs: 2, sm: 2, md: 2, lg: 0}, //<--- these match the NAV padding which is the bounding box
            //paddingRight: { xs: 2, sm: 2, md: 2, lg: 0} //<--- ^^
            // these have been moved to the grid items that hold the logo (left) and image (right)
        }}>
            <Grid container alignItems="center" justifyContent="space-between" sx={{ maxWidth: '960px', margin: 'auto', padding: '6px' }}>
                {/* Left Image - Logo */}
                <Grid item xs={3} sm={3} lg={3}
                      sx={{
                          //backgroundColor: '#ff7700',
                          // transitionDuration: '0.2s',
                          // transitionProperty: 'all',
                          // transitionTimingFunction: 'linear',
                          // opacity: { xs: 1, sm: 1, lg: 1 },
                          display: 'flex',
                          alignItems: 'flex-start', // Push the logo to the top
                          justifyContent: 'flex-start', // Align it towards the start (top-left)
                          paddingLeft: { xs: 2, sm: 2, md: 2, lg: 0},
                      }}>
                    <Link href="/" target="_blank" rel="noopener">
                        <Image src={Logo}
                               width='50%'
                               height='50%'
                               fit='cover'
                               className='app-logo'
                               alt="rapidclean logo"
                        />
                    </Link>
                </Grid>

                {/* Center Text */}

                <Grid item xs={6} sm={6} lg={6}
                      sx={{
                          //backgroundColor: '#cccccc',
                          display: 'flex',
                          alignItems: 'flex-middle',
                          justifyContent: 'flex-middle',

                      }}>
                   <Typography sx={{
                       fontSize: {xs: '.5em', sm:'.6em', md:'.8em', lg: '1em'},
                       fontFamily: "Goblin One, serif",
                       fontWeight: 400,
                       fontStyle: 'normal',
                       color: 'grey',
                       display: {xs: 'block', sm: 'block', md: 'block', lg: 'block'}
                   }}>
                       "..For when the cobwebs are not part of the Halloween Decorations..."
                   </Typography>
                </Grid>

                {/* Right Image - HeaderTown */}
                <Grid item xs={3} sm={3} lg={3}
                      sx={{
                          //backgroundColor: '#ffcc00',
                          // transitionDuration: '0.1s',
                          // transitionProperty: 'all',
                          // transitionTimingFunction: 'linear',
                          // opacity: { xs: 1, sm: 1, lg: 1 },
                          display: 'flex',
                          alignItems: 'flex-end', // Align the right image at the bottom
                          justifyContent: 'flex-end', // Justify content to the end
                          paddingRight: { xs: 2, sm: 2, md: 2, lg: 0}
                      }}>
                    <Image src={HeaderTown}
                           width='60%'
                           height='60%'
                           fit='cover'
                           className='app-logo'
                           alt="rapidclean town"
                    />
                </Grid>
            </Grid>
            <BottomNavigation showLabels value={0} sx={{maxHeight: '30px', alignItems: 'center'}}>
                <Grid item xs={12} sm={12}>
                    <Typography sx={{fontSize: {xs:'.5em', sm:'.65em', md:'.75em', lg: '.85em'}}}
                                color="primary">
                        Exclusively Serving Chatham, Short Hills, Maplewood, Millburn, Livingston, West Orange and South Orange.
                    </Typography>
                </Grid>
            </BottomNavigation>
        </Box>

    );
}


export default Header;


