import React, {useEffect, useState} from 'react'
import '../styles/Estimates.css';
import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox,FormControlLabel, FormGroup
} from '@mui/material';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RapidCleanTheme } from "../themes/Theme.js";
import { useEstimatesService } from "../services/useEstimatesService";
import { TextField } from "formik-material-ui";


const Estimates = () => {

    //Data
    const initialValues = {
        typeofservice: "",
        construct: "",
        numpeople: "",
        sqft: "",
        numrooms: "",
        numbaths: "",
        numpets:"",
        cleanfactor: "",
        laundrywashandfold: false,
        dishwashing: false,
        mealprep: false,
        ovencleaning: false,
        fridgecleaning: false,
        professionalcouchcleaning: false,
        professionalrugshampoo: false,
        estimate: {
            total: 0,
            cleaning: 0,
            extra: 0,
            professional: 0,
        },
    }

    //drop downs
    // type of service options
    const typeofserviceoptions = [
        { label: "Standard Cleaning", value: "cleaning" },
        { label: "Standard Cleaning - Move Out", value: "moveoutcleaning" },
    ]

    const extraserviceoptions = [
        { label: "Laundry Wash and Fold", value: "laundrywashandfold" },
        { label: "Dishwashing", value: "dishwashing" },
        { label: "Meal Prep", value: "mealprep" },
        { label: "Oven Cleaning", value: "ovencleaning" },
        { label: "Inside Fridge & Freezer", value: "fridgecleaning" },
    ]

    const professionalcleanoptions = [
        { label: "Professional Couch Cleaning", value: "professionalcouchcleaning" },
        { label: "Professional Rug Shampoo", value: "professionalrugshampoo" },
    ]
    // construct options
    const constructoptions = [
        { label: "Apartment", value: "apartment" },
        { label: "House", value: "house" },
        { label: "Room", value: "room" },
        { label: "Dorm", value: "dorm" },
        { label: "Other", value: "other" },
    ]

    const numroomsoptions = [
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
        laundrywashandfold: Yup.boolean(),
        dishwashing: Yup.boolean(),
        mealprep: Yup.boolean(),
        ovencleaning: Yup.boolean(),
        fridgecleaning: Yup.boolean(),
        professionalcouchcleaning: Yup.boolean(),
        professionalrugshampoo: Yup.boolean(),
     })

    // const [values, setValues] = React.useState(initialValues);
    // const [extraservices, setExtraservices] = React.useState(initialExtraServices);
    // const [professionalservices, setProfessionalservices] = React.useState(initialProfessionalServices);

    // use the estimate - params [ what we want back: estimate.total; , and the method we will call 'getEstimate'
    const [estimate, getEstimate ] = useEstimatesService(initialValues);


    useEffect(() => {
        getEstimate(initialValues);
    }, [initialValues])


    let estimateDisplay = estimate.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }); /* $2,500.00 */


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
                            <Chip
                                size='small'
                                position='relative'
                                label={estimateDisplay}
                                variant="outlined"
                                color='secondary'
                                pointerEvents='none'
                                sx={{
                                    padding: '2px',
                                    fontFamily: 'Helvetica Bold" "Arial Bold',
                                    fontWeight: '800',
                                    fontSize: '.85em',
                                    minWidth: '80px',
                                    marginLeft: '12px',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'all',
                                    transitionTimingFunction: 'linear',
                                    opacity: {xs: 0.8, sm: 0.8, lg: 0.8}
                                }}
                            />

                            <Typography variant="body1" marginBottom='20px'>
                                Experience a pristine space with our standard cleaning service, featuring expert vacuuming of carpets and floors, precise dusting of every corner, and efficient mopping for a flawless finish.

                            </Typography>

                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                            >

                                {({dirty, isValid, values, handleChange, handleBlur, handleGrouping}) => {
                                    return (
                                        <Form>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 3}}>
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
                                                      sx={{marginBottom: 3}}>
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
                                                      sx={{marginBottom: 3}}>
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
                                                      sx={{marginBottom: 3}}>
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
                                                      sx={{marginBottom: 3}}>
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
                                                      sx={{marginBottom: 3}}>
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
                                                      sx={{marginBottom: 3}}>
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
                                                      sx={{marginBottom: 3}}>
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
                                                        *All Fields Above Are Required
                                                    </Typography>
                                                </Grid>

                                            </Grid>

                                            <Grid item xs={12} sm={12} md={12}
                                                  sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                                                <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Extra </Typography>
                                                <Typography color="primary" variant="cardTitle" component='h1' display="inline">Services</Typography>
                                                <Typography variant="body1" marginBottom='10px'>
                                                    Need a housekeeper but can't commit to the weekly expense? Get one-time, semi-regular or even consistent housekeeping services with RapidClean.
                                                </Typography>
                                                <Typography variant="body1" marginBottom='10px'>
                                                    Please note: Extra services can only be booked with a Standard Cleaning package.
                                                </Typography>
                                                {/*<FormGroup  sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>*/}
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Laundry Wash & Fold"
                                                        checked={values.laundrywashandfold}
                                                        onChange={handleChange}
                                                        name="laundrywashandfold"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Wash and Dry Dishes"
                                                        checked={values.dishwashing}
                                                        onChange={handleChange}
                                                        name="dishwashing"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Meal Preparation"
                                                        checked={values.mealprep}
                                                        onChange={handleChange}
                                                        name="mealprep"
                                                    />
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
                                                {/*</FormGroup>*/}
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12}
                                                  sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginTop:'20px'}}>
                                                <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Professional </Typography>
                                                <Typography color="primary" variant="cardTitle" component='h1' display="inline">Services</Typography>
                                                <Typography variant="body1" marginBottom='30px'>
                                                    We hired a team of professionals who partner with our Cleaning Agents.
                                                    They arrive while our agents are on-site so we manage the entire process for you from start to finish.
                                                    Select Any Professional Services you require.
                                                </Typography>
                                                {/*<FormGroup  sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>*/}
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Professional Rug Shampoo"
                                                        checked={values.professionalrugshampoo}
                                                        onChange={handleChange}
                                                        name="professionalrugshampoo"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="secondary" />}
                                                        label="Professional Couch Shampoo"
                                                        checked={values.professionalcouchshampoo}
                                                        onChange={handleChange}
                                                        name="professionalcouchshampoo"
                                                    />
                                                {/*</FormGroup>*/}
                                            </Grid>

                                            <CardActions>
                                                <Button
                                                    disabled={!dirty || !isValid}
                                                    variant="contained"
                                                    color="primary"
                                                    type="Submit"
                                                    onSubmit={getEstimate(values)}
                                                    className='classes button'>
                                                    Submit
                                                </Button>
                                            </CardActions>
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

export default Estimates