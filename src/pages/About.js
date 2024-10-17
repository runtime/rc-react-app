import '../styles/About.css'
import React from "react";
import {
    Card,
    Grid,
    Box,
    List,
    ListItem,
    Chip,
    Typography, ThemeProvider, CssBaseline, Button
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import RCCard from '../components/RCCard';
import {useContext} from "react";




const About = () => {


        return (
            <div className='About'>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <RCCard
                                navid={2}
                                title='Same Day Service'
                                span_left='Same Day'
                                span_right='Service'
                                desc='We Offer Same Day Services whenever possible. Get an instant estimate and we can be there in an hour. Or book us for next week before your next event.'
                                buttonText='Book Us Now'
                                link = '/appointments'/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <RCCard
                                navid={1}
                                title='Instant Estimates'
                                span_left='Instant'
                                span_right='Estimates'
                                desc='Customized estimates to fit your budget! We use a custom algorithm to give you the best prices. Get an instant estimate without any sales call backs. '
                                buttonText='Instant Estimate'
                                link = '/estimates'/>
                        </Grid>
                        {/*<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>*/}
                        {/*    <RCCard*/}
                        {/*        navid={3}*/}
                        {/*        title='Chat With Us'*/}
                        {/*        span_left='Chat with'*/}
                        {/*        span_right='Us'*/}
                        {/*        desc='Chat with our customer service agents anytime.  Ask us about our environmentally friendly cleaning products, our Sparkling Services, List Extra Services And Pet Services.'*/}
                        {/*        buttonText='Chat With Us'*/}
                        {/*        link = '/contact'/>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <RCCard
                                navid={3}
                                title='Contact Us'
                                span_left='Contact'
                                span_right='Us'
                                desc='Contact us anytime. Ask us about our environmentally friendly cleaning products, or details about our Extra Services and Pet Services.'
                                buttonText='Contact Us'
                                link = '/contact'/>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    {/*Big Card*/}
                    <Card elevation={0} sx={{ marginTop: 2, paddingLeft: 2, paddingRight: 2, minWidth: 275, borderRadius: '16px' }}>


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
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Stovetop -  Scrub and Wash Burners and Grill</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Exterior of the Microwave</ListItem>

                                </List>
                                <Typography variant='body2'
                                            sx={{ marginBottom: 2 }}>
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
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>The sink and counter and floors</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>The Bathtub and Shower Stalls</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>The Toilet </ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>The Mirror, and any Glass Surfaces</ListItem>
                                </List>
                                <Typography variant='body2'
                                    sx={{ marginBottom: 2 }}>
                                        We also empty and disinfect the trash cans
                                </Typography>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography  variant='h4'>
                                Bedrooms
                            </Typography>
                            <Typography variant='h5'>
                                We Dust, Vacuum, Wipe, and Mop:
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
                                <Typography variant='body2'
                                    sx={{ marginBottom: 2 }}>
                                        We will even change the Linens
                                </Typography>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography  variant='h4'>
                                Living Room
                            </Typography>
                            <Typography variant='h5'>
                                We Dust, Vacuum, Wipe, and Mop:
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
                                <Typography variant='body2'
                                    sx={{ marginBottom: 2 }}>
                                        We also vacuum the sofa and armchairs
                                </Typography>
                            </Typography>
                        </Grid>

                        {/*EXTRA SERVICES*/}

                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant='h3'>
                                Extra Services
                            </Typography>
                            <Typography variant='body1'>
                                We offer a variety of extra services for your home, including:
                            </Typography>
                            <Typography variant='body2'
                                        sx={{ marginBottom: 2 }}>
                                <List
                                    List sx={{ marginLeft: 3, listStyleType: 'disc' }}
                                >
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Laundry Wash and Fold</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Dishwashing</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Meal Prep </ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Oven Cleaning</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Deep Cleaning:</ListItem>

                                    <List
                                        List sx={{ marginLeft: 3, listStyleType: 'square' }}
                                        >

                                        <ListItem sx={{ lineHeight: 0.75, display: 'list-item' }}>Wipe Down Baseboards</ListItem>
                                        <ListItem sx={{ lineHeight: 0.75, display: 'list-item' }}>Wipe down window sills</ListItem>
                                        <ListItem sx={{ lineHeight: 0.75, display: 'list-item' }}>Disinfect light switches & Doors</ListItem>
                                        <ListItem sx={{ lineHeight: 0.75, display: 'list-item' }}>Windows inside</ListItem>
                                        <ListItem sx={{ lineHeight: 0.75, display: 'list-item' }}>Bathroom Tile & Grout Whitening</ListItem>

                                    </List>
                                </List>
                            </Typography>
                        </Grid>

                        {/*Pro SERVICES*/}

                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant='h3'
                                        sx={{ marginBottom: 2 }}>
                                Professional Services
                            </Typography>
                            <Typography variant='body1'>
                                From carpet and upholstery cleaning to window washing and floor care, our specialty services cover all aspects of maintaining a pristine environment.
                            </Typography>
                            <Typography variant='body2'>
                                <List
                                    List sx={{ marginLeft: 3, marginBottom: 2, listStyleType: 'disc' }}
                                >
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Couch Cleaning</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Rug Shampoo</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Floor Waxing</ListItem>
                                </List>
                            </Typography>

                        </Grid>

                        {/*PET SERVICES*/}

                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant='h3'>
                                Pet Services
                            </Typography>
                            <Typography variant='body1'>
                                We provide a variety of in-home pet services including:
                            </Typography>
                            <Typography variant='body2'>
                                <List
                                    List sx={{ marginLeft: 3, marginBottom: 2, listStyleType: 'disc' }}
                                >
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Dog Walking</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Pet Sitting (includes walks & playtime) </ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Dispensing Medication</ListItem>
                                    <ListItem sx={{ lineHeight: 1.15, display: 'list-item' }}>Waste Removal</ListItem>
                                </List>
                            </Typography>
                            {/*<Button variant='contained' text='white' color='secondary' disableElevation*/}
                            {/*        sx={{textTransform: 'Capitalize',*/}
                            {/*            size: 'small',*/}
                            {/*            color:"white",*/}
                            {/*            padding: '10px',*/}
                            {/*            paddingLeft: '30px',*/}
                            {/*            paddingRight: '30px',*/}
                            {/*            margin: 'auto',*/}
                            {/*            borderRadius: '8px',*/}
                            {/*            marginBottom: '10px',*/}
                            {/*            fontWeight: 'bold',*/}
                            {/*        }}*/}
                            {/*>*/}
                            {/*    Book Us*/}
                            {/*</Button>*/}
                        </Grid>


                    </Grid>
                    </Card>
                </Box>
            </div>
    )
}

export default About;