import React, {useEffect, useState} from 'react'
import '../styles/Estimates.css';
import {
    Typography, Grid, Box, Button,
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
        value: '5',
    },
    {
        label: "I have zero clutter",
        value: '4',
    },
    {
        label: "There is some laundry on the floor on stuff on most of the surfaces",
        value: '3',
    },
    {
        label: "pretty messy",
        value: '2',
    },
    {
        label: "hoarder level, ngl",
        value: '1',
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

    // select the estimate you want (or ok to the only estimate)
    const [currEstimate, setCurrEstimate] = useState(null);
    // use the estimate - params [ what we want back: estimate.total; , and the method we will call 'getEstimate'
    const [estimate, getEstimate ] = useEstimatesService(initialValues.estimate.total);

    useEffect(() => {
        getEstimate(initialValues.estimate.total);
    }, [initialValues.estimate.total])


    const onSubmit = (values) => {
        console.log(values);
        console.log(values.estimate.total)
        //...state,

        const currVal = values.estimate.total;
        console.log('currVal: ', currVal);
        const newVal = getEstimate(currVal);
        console.log('newVal: ', newVal);
        //setExtraservices(extraservices);
        //setProfessionalservices(professionalservices);
    }


    return (
        <div className='Estimates'>
            <Box>
                <ThemeProvider theme={RapidCleanTheme}>
                    <CssBaseline enableColorScheme />
                    <Card elevation={0} sx={{ marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '8px'}} >
                        <CardContent>
                            <Typography variant="h3" component="div" marginBottom='30px'>
                               $ {estimate}
                            </Typography>
                            <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Instant </Typography>
                            <Typography color="primary" variant="cardTitle" component='h1' display="inline">Estimate</Typography>
                            <Typography variant="body1" marginBottom='30px'>
                                Get an immediate estimate for our Sparkling Services™ based on your specific space and needs.
                            </Typography>
                            <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Standard </Typography>
                            <Typography color="primary" variant="cardTitle" component='h1' display="inline">Cleaning</Typography>
                            <Typography variant="body1" marginBottom='30px'>
                                We don’t believe that a single person without pets living in a small apartment should pay the same amount as a couple with a dog or a  larger family with two dogs and a cat.
                                We offer tailored services to fit your needs. Whatever the level of support you need to clean your space and free your mind, we are here for you with the lowest rates for our Sparkling Services.

                            </Typography>

                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}>
                                {({ dirty, isValid, values, handleChange, handleBlur, handleGrouping }) => {
                                    return (
                                        <Form>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6} md={4}
                                                      sx={{marginBottom: 3}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="service-select-outlined-label">
                                                            Select Type of Service
                                                        </InputLabel>
                                                        <Select
                                                            labelId="service-select-outlined-label"
                                                            id="service-select-outlined"
                                                            label="Select Type of Service"
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
                                                            Select What Needs Service
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
                                                            Select Number of Occupants
                                                        </InputLabel>
                                                        <Select
                                                            labelId="occupants-select-outlined-label"
                                                            id="occupants-select-outlined"
                                                            label="Select Number of Occupants"
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
                                                            Select Square Feet
                                                        </InputLabel>
                                                        <Select
                                                            labelId="sqft-select-outlined-label"
                                                            id="sqft-select-outlined"
                                                            label="Select Square Feet"
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
                                                            Select Number of Bedrooms
                                                        </InputLabel>
                                                        <Select
                                                            labelId="numrooms-select-outlined-label"
                                                            id="numrooms-select-outlined"
                                                            label="Select Number of Bedrooms"
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
                                                            Select Number of Baths
                                                        </InputLabel>
                                                        <Select
                                                            labelId="numbaths-select-outlined-label"
                                                            id="numbaths-select-outlined"
                                                            label="Select Number of Baths"
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
                                                            Select Number of Pets
                                                        </InputLabel>
                                                        <Select
                                                            labelId="pets-select-outlined-label"
                                                            id="pets-select-outlined"
                                                            label="Select Number of Pets"
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
                                                            Describe Your Space
                                                        </InputLabel>
                                                        <Select
                                                            labelId="cleanfactor-select-outlined-label"
                                                            id="cleanfactor-select-outlined"
                                                            label="Describe Your Space"
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

                                            </Grid>

                                            {/*<Grid item xs={12} sm={12} md={12}*/}
                                            {/*      sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>*/}
                                            {/*    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Extra </Typography>*/}
                                            {/*    <Typography color="primary" variant="cardTitle" component='h1' display="inline">Services</Typography>*/}
                                            {/*    <Typography variant="body1" marginBottom='30px'>*/}
                                            {/*        Need a housekeeper but can't commit to the weekly expense? Get one-time, semi-regular or even consistent housekeeping services with RapidClean.*/}
                                            {/*        Having a consistent housekeeper really helps take the pressure off you when you are busy.*/}
                                            {/*        We are happy to help support you with Meal Preparation, Dishwashing, Laundry Wash and Fold or even Meal Prep.*/}
                                            {/*        One time or regularly. We got you… Select Any Extra Services.*/}

                                            {/*    </Typography>*/}
                                            {/*    /!*<FormGroup  sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>*!/*/}
                                            {/*        <FormControlLabel*/}
                                            {/*            control={<Checkbox color="secondary" />}*/}
                                            {/*            label="Laundry Wash & Fold"*/}
                                            {/*            checked={values.laundrywashandfold}*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            name="laundrywashandfold"*/}
                                            {/*        />*/}
                                            {/*        <FormControlLabel*/}
                                            {/*            control={<Checkbox color="secondary" />}*/}
                                            {/*            label="Wash and Dry Dishes"*/}
                                            {/*            checked={values.dishwashing}*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            name="dishwashing"*/}
                                            {/*        />*/}
                                            {/*        <FormControlLabel*/}
                                            {/*            control={<Checkbox color="secondary" />}*/}
                                            {/*            label="Meal Preparation"*/}
                                            {/*            checked={values.mealprep}*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            name="mealprep"*/}
                                            {/*        />*/}
                                            {/*        <FormControlLabel*/}
                                            {/*            control={<Checkbox color="secondary" />}*/}
                                            {/*            label="Oven Cleaning"*/}
                                            {/*            checked={values.ovencleaning}*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            name="ovencleaning"*/}
                                            {/*        />*/}
                                            {/*        <FormControlLabel*/}
                                            {/*            control={<Checkbox color="secondary" />}*/}
                                            {/*            label="Fridge & Freezer Clean"*/}
                                            {/*            checked={values.fridgecleaning}*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            name="fridgecleaning"*/}
                                            {/*        />*/}
                                            {/*    /!*</FormGroup>*!/*/}
                                            {/*</Grid>*/}
                                            {/*<Grid item xs={12} sm={12} md={12}*/}
                                            {/*sx={{}}>*/}
                                            {/*    <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Professional </Typography>*/}
                                            {/*    <Typography color="primary" variant="cardTitle" component='h1' display="inline">Services</Typography>*/}
                                            {/*    <Typography variant="body1" marginBottom='30px'>*/}
                                            {/*        Don’t trust anyone to shampoo your Roche Bobois couch?*/}
                                            {/*        Neither do we! So we hired a team of professionals who partner with our Cleaning Agents.*/}
                                            {/*        They arrive while our housekeepers are on-site and we manage the entire process end to end.*/}
                                            {/*        We offer discounted rates based on volume which  puts us in a position to pass that savings onto you.*/}
                                            {/*        Select Any Professional Services you require.*/}


                                            {/*    </Typography>*/}
                                            {/*    /!*<FormGroup  sx={{position: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>*!/*/}
                                            {/*        <FormControlLabel*/}
                                            {/*            control={<Checkbox color="secondary" />}*/}
                                            {/*            label="Professional Rug Shampoo"*/}
                                            {/*            checked={values.professionalrugshampoo}*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            name="professionalrugshampoo"*/}
                                            {/*        />*/}
                                            {/*        <FormControlLabel*/}
                                            {/*            control={<Checkbox color="secondary" />}*/}
                                            {/*            label="Professional Couch Shampoo"*/}
                                            {/*            checked={values.professionalcouchshampoo}*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            name="professionalcouchshampoo"*/}
                                            {/*        />*/}
                                            {/*    /!*</FormGroup>*!/*/}
                                            {/*</Grid>*/}

                                            <CardActions>
                                                <Button
                                                    disabled={!dirty || !isValid}
                                                    variant="contained"
                                                    color="primary"
                                                    type="Submit"
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