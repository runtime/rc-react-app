import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';

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

import { TextField } from "formik-material-ui";

const EstimateCreate = () => {



    const initialValue = {
        "serviceID": "DEF456",
        "userID": "greengirafe35",
        "typeofservice": "Cleaning",
        "construct": "Apartment",
        "sqft": 1250,
        "numrooms": 4,
        "numbaths": 4,
        "cleanfactor": 20,
        "numpets":1,
        "numpeople": 2,
        "laundrywashandfold": 1,
        "dishwashing": 1,
        "mealprep": 1,
        "ovencleaning": true,
        "deepcleaning": true,
        "professionalcouchcleaning": true,
        "professionalrugshampoo": true,
        "professionalfloorwaxing": true,
        "dogwalking": true,
        "petsitting": true,
        "dispensingmedication": true,
        "waste": true,
        "cost" : {
            "total": 0,
            "cleaning": 0,
            "extra": 0,
            "professional": 0,
            "pet": 0
        },
        "data" : {
            "totaltimerooms":  0,
            "totaltimebaths":  0,
            "totalhours":  0
        }
    }

    // working mvp (refactoring to service so we can use value for the individual combo boxes)
    const [value, setValue] = useState({}) // no state will allow placeholder text. entering a value will cause the form input to have a value such as intialValue.estimate.cost
    //const [service, setService] = useState()
    const { createEstimate } = useContext(EstimateContext);




    /////////////////////////////// ^^^^ KEEP ^^^^^ //////////////////////////////////
    /////////////////////////////// REVIEW BELOW /////////////////////////////////////

    const initialValues = {
            "serviceID": "",
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
            "ovencleaning": "",
            "deepcleaning": "",
            "professionalcouchcleaning": "",
            "professionalrugshampoo": "",
            "professionalfloorwaxing": "",
            "dogwalking": "",
            "petsitting": "",
            "dispensingmedication": "",
            "waste": "",
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


    //drop downs
    // type of service options
    const typeofserviceoptions = [
        { label: "Standard Cleaning", value: "Standard Cleaning" },
        { label: "Standard Cleaning - Move Out", value: "Move-out Clean" },
    ]

    // construct options
    const constructoptions = [
        { label: "Apartment", value: "Apartment" },
        { label: "House", value: "House" },
        { label: "Room", value: "Room" },
        { label: "Room", value: "Room" },
        { label: "Other", value: "Other" },
    ]

    const numroomsoptions = [
        // { label: "None", value: 0 },
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
        { label: "7", value: 7 },
        { label: "8", value: 8 },
        { label: "9", value: 9 },
    ]

    const numbathsoptions = [
        { label: "1", value: 1 },
        { label: "1.5", value: 1.5 },
        { label: "2", value: 2 },
        { label: "2.5", value: 2.5 },
        { label: "3", value: 3 },
        { label: "3.5", value: 3.5 },
        { label: "4", value: 4 },
        { label: "4.5", value: 4.5 },
        { label: "5", value: 5 },
        { label: "5.5", value: 5.5 },
        { label: "6", value: 6 },
        { label: "6", value: 6.5 },
        { label: "7", value: 7},
        { label: "7.5", value: 7.5 },
        { label: "8", value: 8 },
        { label: "8.5", value: 8.5 },
    ]

    const sqftoptions = [{
        label: "less than 250",
        value: 250
    },
        {
            label: "Between 250-750",
            value: 750
        },
        {
            label: "Between 750-950",
            value: 950
        },
        {
            label: "Between 950-1250",
            value: 1250
        },
        {
            label: "Between 1250-1750",
            value: 1750
        },
        {
            label: "Between 1750-2500",
            value: 2500
        },
        {
            label: "Between 2500-3500",
            value: 3500
        },
        {
            label: "above 3500",
            value: 3500
        },

    ]

    const cleanfactoroptions = [
        {
            label: "Im Monica F****g Gellar!",
            value: 0,
        },
        {
            label: "I have zero clutter, 90% ready to clean",
            value: 5,
        },
        {
            label: "There is some laundry on the floor and some stuff on most of the surfaces",
            value: 10,
        },
        {
            label: "There is unopened mail, loose coins and other things, laundry and random items on the floor and surfaces",
            value: 15,
        },
        {
            label: "ngl, its a disaster rn :/",
            value: 20,
        },
    ]
    const numpetsoptions = [
        { label: "0", value: 0 },
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
    ]
    const numpeopleoptions = [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
        { label: "7", value: 7 },
        { label: "8", value: 8 },
    ]

    const laundryoptions = [
        { label: "None", value: 0 },
        { label: "1 Load - Wash And Fold", value: 1 },
        { label: "2 Loads - Wash And Fold", value: 2 },
        { label: "3 Loads - Wash And Fold", value: 3 },
        { label: "4 Loads - Wash And Fold", value: 4 },
    ]

    const dishwashoptions = [
        { label: "None", value: 0 },
        { label: "1 Load - Wash and Dry", value: 1 },
        { label: "2 Load - Wash and Dry", value: 2 },
        { label: "3 Load - Wash and Dry", value: 3 },
    ]

    const mealprepoptions = [
        { label: "None", value: 0 },
        { label: "1 Meal (serves one)", value: 1 },
        { label: "1 Meal (serves two)", value: 1.25 },
        { label: "1 Meal (serves 3)", value: 1.5 },
        { label: "1 Meal (serves 4-5)", value: 2 },
        { label: "1 Meal (serves 5-6)", value: 2.25 },
    ]

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

//
//     const onSubmit = () => {
//         console.log('onSubmit')
//     }

    ///// END OLD CODE FOR REVIEW //////////////

    /////////////////////////////// KEEP BELOW AS IS /////////////////////////////////

    const handleFormSubmit = (values) => {
        //e.preventDefault();
        console.log('[EstimateCreate] onFormSubmit values:', values)
        //setValue(values)
        //use Context function to create the estimate with the initial value
       createEstimate(values);
        //setValue(0);
    }

    return (

        <div className='Estimates'>
            <Box>
                <ThemeProvider theme={RapidCleanTheme}>
                    <CssBaseline enableColorScheme />
                    <Card elevation={0} sx={{ marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '8px'}} >
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
                                                            {typeofserviceoptions.map((item) => (
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
                                                            {constructoptions.map((item) => (
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
                                                            {numpeopleoptions.map((item) => (
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
                                                            {sqftoptions.map((item) => (
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
                                                            {numroomsoptions.map((item) => (
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
                                                            {numbathsoptions.map((item) => (
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
                                                            {numpetsoptions.map((item) => (
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
                                                            {cleanfactoroptions.map((item) => (
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
                                                            {laundryoptions.map((item) => (
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
                                                            {dishwashoptions.map((item) => (
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
                                                            {mealprepoptions.map((item) => (
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
                                                        //onSubmit={handleFormSubmit(values)}
                                                        //onClick={() => window.location.href = '/Appointments'}
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