import '../styles/About.css'
import {
    Grid,
    Box,
    List,
    ListItem,
    Chip,
    Typography, ThemeProvider, CssBaseline, Button
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import RCCard from '../components/RCCard';
import React from "react";

const About = () => {
        return (
            <div className='About'>
                <Box>
                    <Grid container spacing={3}>
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
                    <Grid container spacing={2}
                          sx={{ marginTop: 1, marginBottom: 1 }}>

                        {/*mission statement*/}
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant='h3'>
                                Our Mission
                            </Typography>
                            <Typography variant='body1'
                                sx={{ marginBottom: 2 }}
                            >
                                At RapidClean, our mission is to create clean, healthy, and inviting spaces for our clients.
                                We strive to exceed expectations through our meticulous attention to detail, eco-friendly practices,
                                and commitment to customer satisfaction.


                                Cleaning, Decluttering and organizing the home reduces anxiety and has a positive effect on our mental health
                            </Typography>
                        </Grid>

                        {/*why choose  us*/}
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant='h3'>
                                Why Choose Us
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant='h4'>
                                Experienced and Trained Staff
                            </Typography>
                            <Typography variant='body1'
                                        sx={{ marginBottom: 2 }}
                            >
                                Our team consists of skilled and trained professionals who take pride in their work and are dedicated to providing top-notch cleaning services.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant='h4'>
                                Eco-Friendly Practices
                            </Typography>

                            <Typography variant='body1'
                                        sx={{ marginBottom: 2 }}
                            >
                                We use environmentally friendly cleaning products and techniques to ensure a safe and healthy environment for our clients and the planet.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant='h4'>
                                Competitive Rates
                            </Typography>
                            <Typography variant='body1'
                                        sx={{ marginBottom: 2 }}
                            >
                                We offer competitive rates without compromising on the quality of our services. Our goal is to provide excellent value for your investment in a clean space.
                            </Typography>
                        </Grid>


                        {/*why choose  us*/}
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant='h3'>
                                Our Standard Cleaning Services
                            </Typography>
                            <Typography variant='body1'>
                                Comprehensive home cleaning services tailored to meet your specific needs. We give discounts for smaller and or clutter free spaces. From regular maintenance to deep cleaning, we ensure your home is spotless and comfortable.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography  variant='h4'>
                                Kitchens
                            </Typography>
                            <Typography variant='h5'>
                                We Clean and Disinfect:
                            </Typography>

                            <Typography variant='body2'>
                                <List
                                    List sx={{ marginLeft: 3, listStyleType: 'disc' }}
                                >
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Counter surfaces and Sink</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Floors and Kitchen Tiles</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Exterior of the Refrigerator</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Exterior of the Stove and Microwave</ListItem>
                                </List>
                                <Typography variant='body2'>
                                    We also take out the garbage and recycle bin
                                </Typography>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography  variant='h4'>
                                Bathrooms
                            </Typography>
                            <Typography variant='h5'>
                                We Clean and Disinfect:
                            </Typography>

                            <Typography variant='body2'>
                                <List
                                    List sx={{ marginLeft: 3, listStyleType: 'disc' }}
                                >
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>The sink and counter</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>The Bathtub and Shower Stalls</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>The Toilet </ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>The Mirror, and any Glass Surfaces</ListItem>
                                </List>
                                <Typography variant='body2'>
                                    We also empty and disinfect the trash cans
                                </Typography>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography  variant='h4'>
                                Bedrooms
                            </Typography>
                            <Typography variant='h5'>
                                We Clean and Dust:
                            </Typography>

                            <Typography variant='body2'>
                                <List
                                    List sx={{ marginLeft: 3, listStyleType: 'disc' }}
                                >
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Surfaces of the Furniture</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Floors</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Mirrors and Glass </ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Vacuuming Rugs</ListItem>
                                </List>
                                <Typography variant='body2'>
                                    We will even change the Linens
                                </Typography>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography  variant='h4'>
                                Living Room
                            </Typography>
                            <Typography variant='h5'>
                                We Clean and Dust:
                            </Typography>

                            <Typography variant='body2'>
                                <List
                                    List sx={{ marginLeft: 3, listStyleType: 'disc' }}
                                >
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Surfaces of the Furniture</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Floors</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Mirrors </ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Vacuuming Rugs</ListItem>
                                </List>
                                <Typography variant='body2'>
                                    we also vacuum the sofa and armchairs
                                </Typography>
                            </Typography>
                        </Grid>

                        {/*EXTRA SERVICES*/}

                        <Grid item xs={12} sm={12} md={6}>
                            <Typography variant='h3'>
                                Extra Services
                            </Typography>
                            <Typography variant='body1'>
                                We offer a variety of extra services for your home, including:
                            </Typography>
                            <Typography variant='body2'>
                                <List
                                    List sx={{ marginLeft: 3, listStyleType: 'disc' }}
                                >
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Laundry Wash and Fold</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Dishwashing</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Meal Prep </ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Oven Cleaning</ListItem>
                                </List>
                            </Typography>
                            <Button variant='contained' text='white' color='secondary' disableElevation
                                    sx={{textTransform: 'Capitalize',
                                        size: 'small',
                                        color:"white",
                                        padding: '10px',
                                        paddingLeft: '30px',
                                        paddingRight: '30px',
                                        margin: 'auto',
                                        borderRadius: '8px',
                                        marginBottom: '10px',
                                        fontWeight: 'bold'
                                    }}
                            >
                                Get Estimate
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6}>
                            <Typography variant='h3'>
                                Professional Services
                            </Typography>
                            <Typography variant='body1'>
                                From carpet and upholstery cleaning to window washing and floor care, our specialty services cover all aspects of maintaining a pristine environment.
                            </Typography>
                            <Typography variant='body2'>
                                <List
                                    List sx={{ marginLeft: 3, listStyleType: 'disc' }}
                                >
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Couch Cleaning</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Rug Shampoo</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Floor Waxing</ListItem>
                                </List>
                            </Typography>
                            <Button variant='contained' text='white' color='secondary' disableElevation
                                    sx={{textTransform: 'Capitalize',
                                        size: 'small',
                                        color:"white",
                                        padding: '10px',
                                        paddingLeft: '30px',
                                        paddingRight: '30px',
                                        margin: 'auto',
                                        borderRadius: '8px',
                                        marginBottom: '10px',
                                        fontWeight: 'bold'
                                    }}
                            >
                                Book Us
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
    )
}

export default About;