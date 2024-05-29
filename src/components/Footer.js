import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { RapidCleanTheme } from "../themes/Theme.js";



function Footer() {
  return (
    <Box sx={{ width: '100%'}}>
      <BottomNavigation sx={{ backgroundColor: RapidCleanTheme.palette.primary.main}}
        showLabels
        value={0}
      >
        <BottomNavigationAction label="Contact Us" />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;