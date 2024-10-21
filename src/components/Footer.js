import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { Box, Typography, Grid, Link, IconButton, Icon } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { RapidCleanTheme } from "../themes/Theme.js";

const Footer = () => {
    return (
        <Box sx={{ width: '100%'}}>
            <BottomNavigation sx={{ backgroundColor: RapidCleanTheme.palette.secondary.main }} showLabels value={0}>
                <Grid container alignItems="center" justifyContent="space-between" sx={{maxWidth: '960px'}}>
                    {/* Instagram Icon on the left */}
                    <Grid item
                          sx={{
                              alignItems: 'left',
                              color: 'white',
                              fontFamily: 'Helvetica " "Arial ',
                              fontWeight: '600',
                              transitionDuration: '0.3s',
                              transitionProperty: 'all',
                              transitionTimingFunction: 'linear',
                              opacity: {xs: 1, sm: 1, lg: 1},


                          }}>

                        <Link href="https://www.instagram.com/rapidclean_" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                            <InstagramIcon />
                            <Typography sx={{ fontSize: {xs: '.65em', sm: '.7em', md: '.8em', lg: '1em'}, marginLeft: '6px'}}  variant="body2" color="white">
                                Follow Us on Instagram!
                            </Typography>

                        </Link>
                    </Grid>

                    {/* Copyright text on the right */}
                    <Grid item
                          sx={{
                              color: 'white',
                              fontFamily: 'Helvetica Bold" "Arial Bold',
                              fontWeight: '600',
                              alignItems: 'right',
                              transitionDuration: '0.3s',
                              transitionProperty: 'all',
                              transitionTimingFunction: 'linear',
                              opacity: {xs: 1, sm: 1, lg: 1}
                          }}>
                        <Typography sx={{ fontSize: {xs: '.65em', sm: '.7em', md: '.8em', lg: '1em'}}} variant="body2" color="white">
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

