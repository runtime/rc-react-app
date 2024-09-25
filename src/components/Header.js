import '../styles/Header.css';
import { Image } from 'mui-image';
import Logo from '../logo.svg';
import { Box } from '@mui/material';
import HeaderImage from '../media/header-image.jpg';

const Header = () => {

    return (
        <div>
            <Box sx={{
                backgroundColor: '#cae5b0',
                height: {xs: 48, sm: 72, md:72, lg:84, xlg:200},
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'left',
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
            }}>
                {/*<Image src={HeaderImage}*/}
                {/*    // top={0}*/}
                {/*    // left={0}*/}
                {/*       display='flex'*/}
                {/*       fit='cover'*/}
                {/*       width='100%'*/}
                {/*       alt="rapidclean image"*/}
                {/*    // sx={{ maxHeight: { xs: '25%', sm: '25%', lg: '100%'}, marginTop: { xs: '0px', sm: '0px', md: '0px', lg: '0px'}}}*/}
                {/*/>*/}

            </Box>

            <Box sx={{
                zIndex: 1,
                margin: 'auto',
                height: {xs: 48, sm: 48, md: 72, lg: 72},
                // textAlign: 'center',
                position: 'absolute',
                left: {xs: 20, sm: 50, md: 90, lg: 154},
                top: {xs: 2, sm: 8, md: 8, lg: 8}
            }}>

                <Image src={Logo}
                       width='100%'
                       // height='100%'
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


