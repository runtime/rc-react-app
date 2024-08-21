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
    const { userCreate } = useContext(EstimateContext);

    const initialValues = {
        userID: estimate.userID,
        EstimateID: estimate.ID,
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        streetAddress: "",
        floor: "",
        city: "",
        state: "",
        zip: "",
    };

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        streetAddress: Yup.string().required("Required"),
        floor: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        zip: Yup.string().required("Required"),
    });

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        mobile: Yup.string()
            .min(11, 'Too Short!')
            .max(12, 'Too Long!')
            .required('Required'),
        streetAddress: Yup.string()
            .required("Required"),
        floor: Yup.string()
            .required("Required"),
        city: Yup.string()
            .required("Required"),
        state: Yup.string()
            .required("Required"),
        zip: Yup.string()
            .required("Required"),
    });

    const handleFormSubmit = (values) => {
        console.log('[UserCreate] onFormSubmit values:', values);
        // Add your form submission logic here
    };

    return (
        <div className='Estimates'>
            <h1>Enter Your Information</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({values, errors, touched, handleInputChange}) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        // values={estimate.userID}
                                        as={TextField}
                                        name="firstname"
                                        variant="outlined"
                                        fullWidth
                                        label="First Name"
                                        margin="dense"
                                        onChange={handleInputChange}
                                    />
                                        {errors.firstName && touched.firstName ? (
                                            <div>{errors.firstName}</div>
                                        ) : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                <Field
                                    values={estimate.userID}
                                    as={TextField}
                                    name="lastName"
                                    variant="outlined"
                                    fullWidth
                                    label="Last Name"
                                    margin="dense"
                                    onChange={handleInputChange}
                                />
                                    {errors.lastName && touched.lastName ? (
                                        <div>{errors.lastName}</div>
                                    ) : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="email"
                                        variant="outlined"
                                        fullWidth
                                        label= "Email Address"
                                        margin="dense"
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && touched.email ? (
                                        <div>{errors.email}</div>
                                    ) : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="mobile"
                                        variant="outlined"
                                        fullWidth
                                        label="Phone Number"
                                        margin="dense"
                                        onChange={handleInputChange}
                                    />
                                    {errors.mobile && touched.mobile ? (
                                        <div>{errors.mobile}</div>
                                    ) : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        as={TextField}
                                        name="streetaddress"
                                        variant="outlined"
                                        fullWidth
                                        label="Street Address"
                                        margin="dense"
                                        onChange={handleInputChange}
                                    />
                                    {errors.streetaddress && touched.streetaddress ? (
                                        <div>{errors.streetaddress}</div>
                                    ) : null}
                                </FormControl>
                            </Grid>




                                {/*<Field name="email" type="email"/>*/}
                                {/*{errors.email && touched.email ? <div>{errors.email}</div> : null}*/}
                                {/*<Field name='streetaddress' />*/}
                                {/*{errors.streetaddress && touched.streetaddress ? <div>{errors.streetaddress}</div> : null}*/}
                                <Field name='floor' />
                                {errors.floor && touched.floor ? <div>{errors.floor}</div> : null}
                                <Field name='city' />
                                {errors.city && touched.city ? <div>{errors.city}</div> : null}
                                <Field name='state' />
                                {errors.state && touched.state ? <div>{errors.state}</div> : null}
                                <Field name='zip' />
                                {errors.zip && touched.zip ? <div>{errors.zip}</div> : null}



                                <Button type="submit">Submit</Button>
                            </Grid>
                    </Form>
                )}
            </Formik>
        </div>
        // <div className='Estimates'>
        //     <Box>
        //         <ThemeProvider theme={RapidCleanTheme}>
        //             <CssBaseline enableColorScheme />
        //             <Card elevation={0} sx={{ marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '8px' }}>
        //                 <CardContent>
        //                     <Typography color="secondary" variant="cardTitle" component="h1">
        //                         User Information
        //                     </Typography>
        //
        //                     <Formik
        //                         initialValues={initialValues}
        //                         validationSchema={validationSchema}
        //                         onSubmit={handleFormSubmit}
        //                     >
        //                         {({ dirty, isValid, handleInputChange }) => (
        //                             <Form>
        //                                 <Grid container spacing={2}>
        //                                     <Grid item xs={12} sm={6} md={4}>
        //                                         <FormControl fullWidth variant="outlined">
        //
        //                                             <InputLabel>First Name</InputLabel>
        //                                             <Field
        //                                                 value={estimate.userID}
        //                                                 as={TextField}
        //                                                 name="firstname"
        //                                                 variant="outlined"
        //                                                 fullWidth
        //                                                 label="First Name"
        //                                                 margin="dense"
        //                                                 onChange={handleInputChange}
        //                                             />
        //                                         </FormControl>
        //                                     </Grid>
        //
        //                                     <Grid item xs={12} sm={6} md={4}>
        //                                         <FormControl fullWidth variant="outlined">
        //                                             <InputLabel htmlFor="lastname">Last Name</InputLabel>
        //                                             <Field
        //                                                 as={TextField}
        //                                                 name="lastname"
        //                                                 variant="outlined"
        //                                                 fullWidth
        //                                                 label="Last Name"
        //                                                 margin="dense"
        //                                             />
        //                                         </FormControl>
        //                                     </Grid>
        //
        //                                     <Grid item xs={12} sm={6} md={4}>
        //                                         <FormControl fullWidth variant="outlined">
        //                                             <InputLabel htmlFor="phone">Phone</InputLabel>
        //                                             <Field
        //                                                 as={TextField}
        //                                                 name="phone"
        //                                                 variant="outlined"
        //                                                 fullWidth
        //                                                 label="Phone"
        //                                                 margin="dense"
        //                                             />
        //                                         </FormControl>
        //                                     </Grid>
        //
        //                                     <Grid item xs={12} sm={6} md={4}>
        //                                         <FormControl fullWidth variant="outlined">
        //                                             <InputLabel htmlFor="email">Email</InputLabel>
        //                                             <Field
        //                                                 as={TextField}
        //                                                 name="email"
        //                                                 type="email"
        //                                                 variant="outlined"
        //                                                 fullWidth
        //                                                 label="Email"
        //                                                 margin="dense"
        //                                             />
        //                                         </FormControl>
        //                                     </Grid>
        //
        //                                     <Grid item xs={12} sm={6} md={4}>
        //                                         <FormControl fullWidth variant="outlined">
        //                                             <InputLabel htmlFor="streetAddress">Street Address</InputLabel>
        //                                             <Field
        //                                                 as={TextField}
        //                                                 name="streetAddress"
        //                                                 variant="outlined"
        //                                                 fullWidth
        //                                                 label="Street Address"
        //                                                 margin="dense"
        //                                             />
        //                                         </FormControl>
        //                                     </Grid>
        //
        //                                     <Grid item xs={12} sm={6} md={4}>
        //                                         <FormControl fullWidth variant="outlined">
        //                                             <InputLabel htmlFor="floor">Floor</InputLabel>
        //                                             <Field
        //                                                 as={TextField}
        //                                                 name="floor"
        //                                                 variant="outlined"
        //                                                 fullWidth
        //                                                 label="Floor"
        //                                                 margin="dense"
        //                                             />
        //                                         </FormControl>
        //                                     </Grid>
        //
        //                                     <Grid item xs={12} sm={6} md={4}>
        //                                         <FormControl fullWidth variant="outlined">
        //                                             <InputLabel htmlFor="city">City</InputLabel>
        //                                             <Field
        //                                                 as={TextField}
        //                                                 name="city"
        //                                                 variant="outlined"
        //                                                 fullWidth
        //                                                 label="City"
        //                                                 margin="dense"
        //                                             />
        //                                         </FormControl>
        //                                     </Grid>
        //
        //                                     <Grid item xs={12} sm={6} md={4}>
        //                                         <FormControl fullWidth variant="outlined">
        //                                             <InputLabel htmlFor="state">State</InputLabel>
        //                                             <Field
        //                                                 as={TextField}
        //                                                 name="state"
        //                                                 variant="outlined"
        //                                                 fullWidth
        //                                                 label="State"
        //                                                 margin="dense"
        //                                             />
        //                                         </FormControl>
        //                                     </Grid>
        //
        //                                     <Grid item xs={12} sm={6} md={4}>
        //                                         <FormControl fullWidth variant="outlined">
        //                                             <InputLabel htmlFor="zip">Zip</InputLabel>
        //                                             <Field
        //                                                 as={TextField}
        //                                                 name="zip"
        //                                                 variant="outlined"
        //                                                 fullWidth
        //                                                 label="Zip"
        //                                                 margin="dense"
        //                                             />
        //                                         </FormControl>
        //                                     </Grid>
        //                                 </Grid>
        //
        //                                 <CardActions>
        //                                     <Button
        //                                         disabled={!dirty || !isValid}
        //                                         variant="contained"
        //                                         color="primary"
        //                                         type="submit"
        //                                         className='classes button'>
        //                                         Next
        //                                     </Button>
        //                                 </CardActions>
        //                             </Form>
        //                         )}
        //                     </Formik>
        //                 </CardContent>
        //             </Card>
        //         </ThemeProvider>
        //     </Box>
        // </div>
    );
}

export default UserCreate;
