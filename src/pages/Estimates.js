import '../styles/About.css';
import {
    Typography, Grid, Box, Button, ThemeProvider, CssBaseline, Card, CardHeader, CardContent, CardActions, FormControl, Select, MenuItem, InputLabel
} from '@mui/material';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RapidCleanTheme } from "../themes/Theme.js";
import { TextField } from "formik-material-ui";


const Estimates = () => {
    //Data
    const initialValues = {
        typeofservice: "",
        construct: "",
        sqft: 1750,
        numrooms: 1,
        numbaths: 1,
        cleanfactor: 2,
    }


    //drop downs

    // type of service options
    const typeofserviceoptions = [
        { label: "Cleaning", value: "cleaning" },
        { label: "Cleaning - Move Out", value: "moveoutcleaning" },
    ]

    const extraserviceoptions = [
        { label: "Laundry Wash and Fold", value: "laundrywashandfold" },
        { label: "Dishwashing", value: "dishwashing" },
        { label: "Meal Prep", value: "mealprep" },
        { label: "Oven Cleaning", value: "ovencleaning" },
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
    ]

    const numbathsoptions = [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
        { label: "7", value: 7 },
        { label: "8", value: 8 },
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

    const cleanfactoroptions = [{
        label: "Zero clutter",
        value: '3',
    },
    {
        label: "Some Clutter",
        value: '2',
    },
    {
        label: "Lots of Clutter",
        value: '1',
    }]



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
    })

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className='estimates'>
            <Box>
                <ThemeProvider theme={RapidCleanTheme}>
                    <CssBaseline enableColorScheme />
                    <Card elevation={0} sx={{ marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '8px'}} >
                        <CardContent>
                            <Typography color="secondary" variant="cardTitle" component="poster" display="inline">Instant </Typography>
                            <Typography color="primary" variant="cardTitle" component='poster' display="inline">Estimate</Typography>
                            <Typography variant="body2" marginBottom='20px'>
                                Get an immediate estimate for our Sparkling Services™ based on your specific space and needs.
                            </Typography>

                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}>
                                {({ dirty, isValid, values, handleChange, handleBlur }) => {
                                    return (
                                        <Form>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6} md={4}>
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

                                                <Grid item xs={12} sm={6} md={4}>
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

                                                <Grid item xs={12} sm={6} md={4}>
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

                                                <Grid item xs={12} sm={6} md={4}>
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

                                                <Grid item xs={12} sm={6} md={4}>
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

                                                <Grid item xs={12} sm={6} md={4}>
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