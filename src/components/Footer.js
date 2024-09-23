import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { RapidCleanTheme } from "../themes/Theme.js";

const Footer = () => {
    return (
        <Box sx={{ width: '100%'}}>
            <BottomNavigation sx={{ backgroundColor: RapidCleanTheme.palette.primary.main }} showLabels value={0}>
                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                    {/* Instagram Icon on the left */}
                    <Grid item
                          sx={{
                              color: 'white',
                              fontFamily: 'Helvetica Bold" "Arial Bold',
                              fontWeight: '800',
                              fontSize: '1.15em',
                              minWidth: '200px',
                              paddingLeft: {xs:2.5, sm:6, md: 12, lg:6, xl:20},
                              transitionDuration: '0.3s',
                              transitionProperty: 'all',
                              transitionTimingFunction: 'linear',
                              opacity: {xs: 1, sm: 1, lg: 1}
                          }}>

                        <Link href="https://www.instagram.com/rapidclean_" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                            {/*<InstagramIcon />*/}
                            Follow Us on Instagram!
                        </Link>
                    </Grid>

                    {/* Copyright text on the right */}
                    <Grid item
                          sx={{
                              color: 'white',
                              fontFamily: 'Helvetica Bold" "Arial Bold',
                              fontWeight: '800',
                              fontSize: '1.15em',
                              minWidth: '200px',
                              paddingRight: {xs:2.5, sm:6, md: 12, lg:6, xl:20},
                              transitionDuration: '0.3s',
                              transitionProperty: 'all',
                              transitionTimingFunction: 'linear',
                              opacity: {xs: 1, sm: 1, lg: 1}
                          }}>
                        <Typography variant="body2" color="white">
                            © 2024 RapidClean. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </BottomNavigation>
        </Box>
    );
}

export default Footer;

// import { Box, Typography, Link, IconButton } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
//
// function Footer() {
//     return (
//         <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
//             <Typography variant="body2" color="textSecondary">
//                 &copy; {new Date().getFullYear()} Your Company Name
//             </Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
//                 <IconButton aria-label="Facebook" component={Link} href="https://www.facebook.com/your-page">
//                     <FacebookIcon />
//                 </IconButton>
//                 <IconButton aria-label="Twitter" component={Link} href="https://twitter.com/your-handle">
//                     <TwitterIcon />
//                 </IconButton>
//                 <IconButton aria-label="LinkedIn" component={Link} href="https://www.linkedin.com/company/your-company">
//                     <LinkedInIcon />
//                 </IconButton>
//             </Box>
//         </Box>
//     );
// }
//
// export default Footer;

