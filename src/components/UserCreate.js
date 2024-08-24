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

const UserCreate = () => {
    const { estimate } = useContext(EstimateContext);
    const { createUser } = useContext(EstimateContext);

    console.log('[UserCreate] estimate id: ' + estimate.id);


    const initialValues = {
        userID: estimate.servicedetails.userID ? estimate.servicedetails.userID : '',
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        estimates: [estimate.id ? estimate.id : ''],

        // streetAddress: "",
        // floor: "",
        // city: "",
        // state: "",
        // zip: "",
    };

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        // phone: Yup.string().required("Required"),
        // email: Yup.string().email("Invalid email format").required("Required"),
        // streetAddress: Yup.string().required("Required"),
        // floor: Yup.string().required("Required"),
        // city: Yup.string().required("Required"),
        // state: Yup.string().required("Required"),
        // zip: Yup.string().required("Required"),
    });

    const SignupSchema = Yup.object().shape({
        firstname: Yup.string()
            .min(1, 'Your First Name is Too Short!')
            .max(17, 'Your First Name is Too Long!')
            .required('Your first name is required'),
        lastname: Yup.string()
            .min(2, 'Your First Name is Too Short!')
            .max(50, 'Your First Name is Too Long!')
            .required('Your first name is required'),
        phone: Yup.string()
            .min(9, 'Too Short!')
            .max(12, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        // streetaddress: Yup.string()
        //     .required("Required"),
        // floor: Yup.string()
        //     .required("Required"),
        // city: Yup.string()
        //     .required("Required"),
        // state: Yup.string()
        //     .required("Required"),
        // zip: Yup.string()
        //     .required("Required"),
    });

    const handleFormSubmit = (values) => {
        console.log('[UserCreate] onFormSubmit values:', values);
        // Add your form submission logic here
        createUser(values)
    };

    return (
        <div className='Estimates'>

            <Typography color="black" variant="body1" component="h3" marginBottom="20px">
                Please Enter Your Information to preserve this Estimate. You can book anytime after this step.
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={handleFormSubmit}
            >
                {({values, errors, touched, handleBlur, isValid, handleInputChange}) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="firstname"
                                        variant="outlined"
                                        label="First Name"
                                        />
                                        {errors.firstname && touched.firstname ? <div><p>{errors.firstname}</p></div> : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="lastname"
                                        variant="outlined"
                                        label="Last Name"
                                    />
                                    {errors.lastname && touched.lastname ? <div><p>{errors.lastname}</p></div> : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="phone"
                                        variant="outlined"
                                        label="Phone Number"
                                    />
                                    {errors.phone && touched.phone ? <div><p>{errors.phone}</p></div> : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="email"
                                        variant="outlined"
                                        label="Email Address"
                                    />
                                    {errors.email && touched.email ? <div><p>{errors.email}</p></div> : null}
                                </FormControl>
                            </Grid>


                                {/*<Field name="email" type="email"/>*/}
                                {/*{errors.email && touched.email ? <div>{errors.email}</div> : null}*/}
                                {/*<Field name='streetaddress' />*/}
                                {/*{errors.streetaddress && touched.streetaddress ? <div>{errors.streetaddress}</div> : null}*/}
                                {/*<Field name='floor' />*/}
                                {/*{errors.floor && touched.floor ? <div>{errors.floor}</div> : null}*/}
                                {/*<Field name='city' />*/}
                                {/*{errors.city && touched.city ? <div>{errors.city}</div> : null}*/}
                                {/*<Field name='state' />*/}
                                {/*{errors.state && touched.state ? <div>{errors.state}</div> : null}*/}
                                {/*<Field name='zip' />*/}
                                {/*{errors.zip && touched.zip ? <div>{errors.zip}</div> : null}*/}



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

export default UserCreate;
