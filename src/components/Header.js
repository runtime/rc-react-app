import '../styles/Header.css';
import { Image } from 'mui-image';
import Logo from '../logo.svg';
import { Box } from '@mui/material';
import HeaderImage from '../media/header-image.jpg';

const Header = () => {

    return (
        <div>
            <Box sx={{
                backgroundColor: '#D6D7D8',
                height: '256px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'left',
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
            }}>
                <Image src={HeaderImage}
                    // top={0}
                    // left={0}
                       display='flex'
                       fit='cover'
                       width='100%'
                       alt="rapidclean image"
                    // sx={{ maxHeight: { xs: '25%', sm: '25%', lg: '100%'}, marginTop: { xs: '0px', sm: '0px', md: '0px', lg: '0px'}}}
                />

            </Box>

            <Box  sx={{zIndex: 1, margin: 'auto', textAlign: 'center', position: 'absolute', left: {xs: 24, sm: 50, md: 90, lg: 250}, top:30}}>
                <Image src={Logo}
                       width='100%'
                       height={70}
                       fit='cover'
                       className='app-logo'
                       display='flex'
                       flexDirection='row'
                       alt="rapidclean logo"
                      />
            </Box>

        </div>
    );
}

export default Header;


