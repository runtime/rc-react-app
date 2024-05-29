import '../styles/About.css'
import {
    Grid,
    Box,
    Chip,
    Typography, ThemeProvider, CssBaseline, Button
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import RCCard from '../components/RCCard';

const About = () => {
        return (
            <div className='About'>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <RCCard
                                title='Same Day Service'
                                span_left='Same Day'
                                span_right='Service'
                                desc='We Offfer Same Day Services to most locations in Northern NJ. We can give you an estimate and be there within the hour.'
                                buttonText='Book Now'/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <RCCard
                                title='Customized Estimates'
                                span_left='Customized'
                                span_right='Estimates'
                                desc='We Offfer Same Day Services to most locations in Northern NJ. We can give you an estimate and be there within the hour.'
                                buttonText='Get Estimate'/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <RCCard
                                title='Chat With Us'
                                span_left='Chat with'
                                span_right='Us'
                                desc='We Offfer Same Day Services to most locations in Northern NJ. We can give you an estimate and be there within the hour.'
                                buttonText='Say Hello'/>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container
                          sx={{ marginTop: 1, marginBottom: 1 }}>

                        <Grid item xs={12} sm={12} md={12}>
                            {/*mission statement*/}
                            <Typography variant='h3'>
                                Our Mission
                            </Typography>
                            <Typography variant='body1'
                                sx={{ marginBottom: 2 }}
                            >
                                At RapidClean, our mission is to create clean, healthy, and inviting spaces for our clients. We strive to exceed expectations through our meticulous attention to detail, eco-friendly practices, and commitment to customer satisfaction.
                            </Typography>
                            <Typography variant='h3'>
                                Our Cleaning Services
                            </Typography>
                            <Typography variant='body1'>
                                Comprehensive home cleaning services tailored to meet your specific needs. We give discounts for smaller and or clutter free spaces. From regular maintenance to deep cleaning, we ensure your home is spotless and comfortable.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='body2'>
                                <h3> Kitchen </h3>
                                <h4>We Clean and Disinfect:</h4>
                                <ul>
                                    <li>the surfaces of furniture</li>
                                    <li>floors and wall coverings</li>
                                    <li>exterior of the refrigerator, stove and microwave</li>
                                </ul>
                                <p>
                                    we also take out the trash :)
                                </p>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='body2'>
                                <h3> Bathrooms </h3>
                                <h4>We Clean and Disinfect:</h4>
                                <ul>
                                    <li>the sink</li>
                                    <li>floors and wall coverings</li>
                                    <li>toilet, bathtub and shower stall</li>
                                    <li>mirror, and glass surfaces</li>
                                </ul>
                                <p>
                                    we also take out the trash :)
                                </p>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='body2'>
                                <h3> Bedrooms </h3>
                                <h4>We Clean and Dust:</h4>
                                <ul>
                                    <li>the surfaces of furniture</li>
                                    <li>floors</li>
                                    <li>mirros</li>
                                </ul>
                                <p>
                                    we also change the linens :)
                                </p>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='body2'>
                                <h3>  Living Room </h3>
                                <h4> We Clean and Dust:</h4>
                                <ul>
                                    <li>the floors</li>
                                    <li>surfaces of furniture</li>
                                    <li>mirrors</li>
                                </ul>
                                <p>
                                    we also vacuum the sofa, armchairs, and rugs :)
                                </p>
                            </Typography>
                        </Grid>









                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant='h3'>
                                Extra Services:
                            </Typography>
                            <Typography variant='body1'>
                                This needs to have copy
                            </Typography>

                            <Typography variant='body2'>
                                <ul>
                                    <li>Cleaning</li>
                                    <li>Waxing</li>
                                    <li>Facial</li>
                                </ul>
                            </Typography>
                            <Grid item xs={12} sm={12} md={4}>
                            <Typography variant='h3'>
                                Professional Services:
                            </Typography>
                            <Typography variant='body1'>
                                From carpet and upholstery cleaning to window washing and floor care, our specialty services cover all aspects of maintaining a pristine environment.
                            </Typography>
                            <Typography variant='body2'>
                                <ul>
                                    <li>Cleaning</li>
                                    <li>Waxing</li>
                                    <li>Facial</li>
                                </ul>
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
    )
}

export default About;