import React, { useContext } from 'react';
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import * as Constants from '../constants/EstimateConstants';
import {
    Typography, Grid, Box, Button, ThemeProvider, CssBaseline, Card,
    CardContent, CardActions, FormControl, InputLabel, TextField,
} from '@mui/material';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RapidCleanTheme } from "../themes/Theme.js";

const LocationCreate = () => {
    const { estimate } = useContext(EstimateContext);
    const { user } = useContext(EstimateContext);
    const { location } = useContext(EstimateContext);
    const { createLocation } = useContext(EstimateContext);

    //console.log('[LocationCreate] estimate id: ' + estimate.estimateId);
    //console.log('[LocationCreate] user id: ' + user.userId);

    //password validation
    const lowercaseRegEx = /(?=.*[a-z])/
    const uppercaseRegEx = /(?=.*[A-Z])/
    const numericRegEx = /(?=.*[0-9])/
    const lengthRegEx = /(?=.{6,})/


    const initialValues = {

        userId: user.userId ? user.userId : '',
        estimateId: estimate.estimateId ? estimate.estimateId : '',
        streetaddress: "",
        floor: "",
        city: "",
        state: "",
        zip: "",
    };



    const LocationSchema = Yup.object().shape({
        streetaddress: Yup.string()
            .min(4, 'Your Street Address is Too Short!')
            .max(50, 'Your Street Address is Too Long!')
            .required("Your Street Address is Required"),
        floor: Yup.string().notRequired(),
        city: Yup.string()
            .required("Required"),
        state: Yup.string()
            .required("Required"),
        zip: Yup.string(numericRegEx)
            .min(5, 'Your Zip Code is Too Short!')
            .max(10, 'Your Zip Code is Too Long!')
            .required("Required"),
    });

    const handleAddressFormSubmit = (values) => {
        //console.log('[LocationCreate] onFormSubmit values:', values);
        // Add your form submission logic here
        createLocation(values)
    };

    return (
        <div className='Estimates'>

            <Typography color="black" variant="body1" component="h3" marginBottom="20px">
                Please Enter The Location Information that is associated with this reservation.
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={LocationSchema}
                onSubmit={handleAddressFormSubmit}
            >
                {({values, errors, touched, handleBlur, isValid, handleInputChange}) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="streetaddress"
                                        variant="outlined"
                                        label="Street Address"
                                    />
                                    {errors.streetaddress && touched.streetaddress ? <div><p>{errors.streetaddress}</p></div> : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="floor"
                                        variant="outlined"
                                        label="Floor or Apartment Number"
                                    />
                                    {errors.floor && touched.floor ? <div><p>{errors.floor}</p></div> : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="city"
                                        variant="outlined"
                                        label="City"
                                    />
                                    {errors.city && touched.city ? <div><p>{errors.city}</p></div> : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="state"
                                        variant="outlined"
                                        label="State"
                                    />
                                    {errors.state && touched.state ? <div><p>{errors.state}</p></div> : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="zip"
                                        variant="outlined"
                                        label="Zip Code"
                                    />
                                    {errors.zip && touched.zip ? <div><p>{errors.zip}</p></div> : null}
                                </FormControl>
                            </Grid>



                            {/*<Button size="large" type="submit">Submit</Button>*/}
                            <CardActions>
                                <Button
                                    disabled={!isValid}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className='classes button'>
                                    Submit
                                </Button>
                            </CardActions>

                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>

    );
}

export default LocationCreate;
