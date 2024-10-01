import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import * as Constants from '../constants/EstimateConstants';



import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox,FormControlLabel, FormGroup,
} from '@mui/material';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RapidCleanTheme } from "../themes/Theme.js";

const EstimateCreate = () => {

    // Form's initial values are blank
    let initialValues = {
        "bookingId": "",
        "userID": "",
        "typeofservice": "",
        "construct": "",
        "sqft": "",
        "numrooms": "",
        "numbaths": "",
        "cleanfactor": "",
        "numpets": "",
        "numpeople": "",
        "laundrywashandfold": "",
        "dishwashing": "",
        "mealprep": "",
        "ovencleaning": false,
        "fridgecleaning": false,
        "deepcleaning": false,
        "professionalcouchcleaning": false,
        "professionalrugshampoo": false,
        "professionalfloorwaxing": false,
        "dogwalking": false,
        "petsitting": false,
        "dispensingmedication": false,
        "waste": false,
        "cost": {
            "total": 0,
            "cleaning": 0,
            "extra": 0,
            "professional": 0,
            "pet": 0
        },
        "data": {
            "totaltimerooms": 0,
            "totaltimebaths": 0,
            "totalhours": 0
        },
    }

    const { createEstimate } = useContext(EstimateContext);





// constants for form have been moved to ./constants/EstimateConstants.js

//password validation
    const lowercaseRegEx = /(?=.*[a-z])/
    const uppercaseRegEx = /(?=.*[A-Z])/
    const numericRegEx = /(?=.*[0-9])/
    const lengthRegEx = /(?=.{6,})/

//validation schema
    let validationSchema = Yup.object().shape({
        typeofservice: Yup.string().required("Required"),
        construct: Yup.string().required("Required"),
        sqft: Yup.string().required("Required"),
        numrooms: Yup.number().required("Required"),
        numbaths: Yup.number().required("Required"),
        cleanfactor: Yup.number().required("Required"),
        numpets: Yup.number().required("Required"),
        numpeople: Yup.number().required("Required"),
        // EXTRA
        // laundrywashandfold: Yup.number(),
        // dishwashing: Yup.number(),
        // mealprep: Yup.number(),
        // ovencleaning: Yup.boolean(),
        // fridgecleaning: Yup.boolean(),
        // deepcleaning: Yup.boolean(),
        // // PROFESSIONAL
        // professionalcouchcleaning: Yup.boolean(),
        // professionalrugshampoo: Yup.boolean(),
        // professionalfloorwaxing: Yup.boolean(),
        // // PET
        // dogwalking: Yup.boolean(),
        // petsitting: Yup.number(),
        // dispensingmedication: Yup.number(),
        // waste: Yup.boolean(),
    })

    const handleFormSubmit = (values) => {
        //e.preventDefault();
        console.log('[EstimateCreate] onFormSubmit values:', values)
        //use Context function to create the estimate with the initial value
        createEstimate(values);
        //todo clear form
    }

    return (
        <div className='Estimates'>
            <Box>
                <ThemeProvider theme={RapidCleanTheme}>
                    <CssBaseline enableColorScheme />
                    <Card elevation={0} sx={{ marginTop: 0, marginBottom: 1, minWidth: 275, borderRadius: '8px'}} >
                        <CardContent>
                            <Typography color="secondary" variant="cardTitle" component="h1"
                                        display="inline">Instant </Typography>
                            <Typography color="primary" variant="cardTitle" component='h1'
                                        display="inline">Estimate</Typography>
                            <Typography variant="body1" marginBottom='20px'>
                                Get an immediate estimate for our Sparkling Services™ based on your specific space and
                                needs.
                            </Typography>
                            <Typography color="secondary" variant="cardTitle" component="h1"
                                        display="inline">Standard </Typography>
                            <Typography color="primary" variant="cardTitle" component='h1'
                                        display="inline">Cleaning</Typography>
                            <Typography variant="body1" marginBottom='20px'>
                                Experience a pristine space with our standard cleaning service, featuring expert vacuuming of carpets and floors, precise dusting of every corner, and efficient mopping for a flawless finish.
                            </Typography>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleFormSubmit}
                            >

                                {({dirty, isValid, values, handleChange, handleBlur, handleGrouping}) => {
                                    return (
                                        <Form>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="service-select-outlined-label">
                                                            Select Type of Service*
                                                        </InputLabel>
                                                        <Select
                                                            labelId="service-select-outlined-label"
                                                            id="service-select-outlined"
                                                            label="Select Type of Service*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.typeofservice}
                                                            name="typeofservice">
                                                            {Constants.typeofserviceoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="construct-select-outlined-label">
                                                            Select What Needs Service*
                                                        </InputLabel>
                                                        <Select
                                                            labelId="construct-select-outlined-label"
                                                            id="construct-select-outlined"
                                                            label="Select What Needs Service"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.construct}
                                                            name="construct">
                                                            {Constants.constructoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="occupants-select-outlined-label">
                                                            Select Number of Occupants*
                                                        </InputLabel>
                                                        <Select
                                                            labelId="occupants-select-outlined-label"
                                                            id="occupants-select-outlined"
                                                            label="Select Number of Occupants*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.numpeople}
                                                            name="numpeople">
                                                            {Constants.numpeopleoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="sqft-select-outlined-label">
                                                            Select Square Feet*
                                                        </InputLabel>
                                                        <Select
                                                            labelId="sqft-select-outlined-label"
                                                            id="sqft-select-outlined"
                                                            label="Select Square Feet*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.sqft}
                                                            name="sqft">
                                                            {Constants.sqftoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="numrooms-select-outlined-label">
                                                            Select Number of Bedrooms*
                                                        </InputLabel>
                                                        <Select
                                                            labelId="numrooms-select-outlined-label"
                                                            id="numrooms-select-outlined"
                                                            label="Select Number of Bedrooms*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.numrooms}
                                                            name="numrooms">
                                                            {Constants.numroomsoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="numbaths-select-outlined-label">
                                                            Select Number of Baths*
                                                        </InputLabel>
                                                        <Select
                                                            labelId="numbaths-select-outlined-label"
                                                            id="numbaths-select-outlined"
                                                            label="Select Number of Baths*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.numbaths}
                                                            name="numbaths">
                                                            {Constants.numbathsoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="pets-select-outlined-label">
                                                            Select Number of Pets*
                                                        </InputLabel>
                                                        <Select
                                                            labelId="pets-select-outlined-label"
                                                            id="pets-select-outlined"
                                                            label="Select Number of Pets*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.numpets}
                                                            name="numpets">
                                                            {Constants.numpetsoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 0}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="cleanfactor-select-outlined-label">
                                                            Describe Your Surfaces*
                                                        </InputLabel>
                                                        <Select
                                                            labelId="cleanfactor-select-outlined-label"
                                                            id="cleanfactor-select-outlined"
                                                            label="Describe Your Surfaces*"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.cleanfactor}
                                                            name="cleanfactor">
                                                            {Constants.cleanfactoroptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12} sx={{marginBottom: 3}}>
                                                    <Typography variant='h5'>
                                                        *All Standard Cleaning Fields Are Required
                                                    </Typography>
                                                </Grid>

                                            </Grid>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={12} md={12}
                                                      sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                                                    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Extra </Typography>
                                                    <Typography color="primary" variant="cardTitle" component='h1' display="inline">Services</Typography>
                                                    <Typography variant="body1" marginBottom='10px'>
                                                        Need a housekeeper but can't commit to the weekly expense? Get one-time, semi-regular or even consistent housekeeping services with RapidClean.
                                                    </Typography>

                                                    {/*<FormGroup  sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>*/}
                                                </Grid>
                                                <Grid item xs={12} sm={4} md={4} sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="laundry-select-outlined-label">
                                                            Laundry Wash and Fold
                                                        </InputLabel>
                                                        <Select
                                                            labelId="laundry-select-outlined-label"
                                                            id="laundry-select-outlined"
                                                            label="Laundry Wash and Fold"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.laundrywashandfold}
                                                            name="laundrywashandfold" >
                                                            {Constants.laundryoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={4} md={4} sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="dishes-select-outlined-label">
                                                            Dishes, Wash & Dry
                                                        </InputLabel>
                                                        <Select
                                                            labelId="dishes-select-outlined-label"
                                                            id="dishes-select-outlined"
                                                            label="Dishes, Wash & Dry"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.dishwashing}
                                                            name="dishwashing" >
                                                            {Constants.dishwashoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={4} md={4} sx={{marginBottom: 1}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="meals-select-outlined-label">
                                                            Meal Preparation
                                                        </InputLabel>
                                                        <Select
                                                            labelId="meals-select-outlined-label"
                                                            id="meals-select-outlined"
                                                            label="Meal Preparation"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.mealprep}
                                                            name="mealprep">
                                                            {Constants.mealprepoptions.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>

                                                </Grid>

                                                <Grid item xs={12} sm={12} md={12}
                                                      sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 0}}>
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Oven Cleaning"
                                                        checked={values.ovencleaning}
                                                        onChange={handleChange}
                                                        name="ovencleaning"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Fridge & Freezer Clean"
                                                        checked={values.fridgecleaning}
                                                        onChange={handleChange}
                                                        name="fridgecleaning"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Deep Cleaning"
                                                        checked={values.deepcleaning}
                                                        onChange={handleChange}
                                                        name="deepcleaning"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography variant="h5">
                                                        Extra services may only be booked in addition to a Standard Cleaning. Items are itemized on your receipt.
                                                    </Typography>
                                                </Grid>

                                                {/*</FormGroup>*/}

                                                <Grid item xs={12} sm={12} md={12}
                                                      sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginTop:'10px'}}>
                                                    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Professional </Typography>
                                                    <Typography color="primary" variant="cardTitle" component='h1' display="inline">Services</Typography>
                                                    <Typography variant="body1" marginBottom='0px'>
                                                        We hired a team of professionals who partner with our Cleaning Agents.
                                                        They arrive while our agents are on-site so we manage the entire process for you from start to finish.
                                                        Select Any Professional Services you require.
                                                    </Typography>
                                                    {/*<FormGroup  sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>*/}
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12} sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginTop:'0px'}}>
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Professional Rug Shampoo"
                                                        checked={values.professionalrugshampoo}
                                                        onChange={handleChange}
                                                        name="professionalrugshampoo"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Professional Couch Cleaning"
                                                        checked={values.professionalcouchcleaning}
                                                        onChange={handleChange}
                                                        name="professionalcouchcleaning"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Professional Floor Waxing"
                                                        checked={values.professionalfloorwaxing}
                                                        onChange={handleChange}
                                                        name="professionalfloorwaxing"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography variant="h5">
                                                        Professional services may only be booked in addition to a Standard Cleaning. Items are itemized on your receipt.
                                                    </Typography>
                                                </Grid>
                                                {/*</FormGroup>*/}

                                                <Grid item xs={12} sm={12} md={12}
                                                      sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginTop:'10px'}}>
                                                    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Pet </Typography>
                                                    <Typography color="primary" variant="cardTitle" component='h1' display="inline">Services</Typography>
                                                    <Typography variant="body1" marginBottom='20px'>
                                                        We have a team of professionals who partner with our Cleaning Agents to take care of your pet in your own home
                                                        while we clean! We offer Walking, Playtime, Meals and Meds.
                                                    </Typography>
                                                    {/*<FormGroup  sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>*/}
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Dog Walking"
                                                        checked={values.dogwalking}
                                                        onChange={handleChange}
                                                        name="dogwalking"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Pet Playtime"
                                                        checked={values.petsitting}
                                                        onChange={handleChange}
                                                        name="petsitting"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Dispense Medicine (Dogs)"
                                                        checked={values.dispensingmedication}
                                                        onChange={handleChange}
                                                        name="dispensingmedication"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Waste Management Services"
                                                        checked={values.waste}
                                                        onChange={handleChange}
                                                        name="waste"
                                                    />

                                                    {/*</FormGroup>*/}
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography variant="h5" sx={{marginBottom:3}}>
                                                        Pet services may only be booked in addition to a Standard Cleaning. Items are itemized on your receipt.
                                                    </Typography>
                                                </Grid>

                                                <CardActions>
                                                    <Button
                                                        disabled={!dirty || !isValid}
                                                        variant="contained"
                                                        color="primary"
                                                        type="Submit"
                                                        className='classes button'>
                                                        Next
                                                    </Button>
                                                </CardActions>
                                            </Grid>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </CardContent>
                    </Card>
                </ThemeProvider>
            </Box>
        </div>
    )
}

export default EstimateCreate;