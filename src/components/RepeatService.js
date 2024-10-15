import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import { useNavigate } from 'react-router-dom';
import EstimateEdit from './EstimateEdit';
import EstimateChip from './EstimateChip';

import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox, FormControlLabel, FormGroup, TextField,
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import UserCreate from "./UserCreate";

const RepeatService = () => {
    //console.log('[RepeatService] ');
    // const { findEstimateById } = useContext(EstimateContext);
    const { validateUserByEstimateId } = useContext(EstimateContext);

    const navigate = useNavigate();


    const initialValues = {
        estimateId: '',
        userId: '',
    };

    const validationSchema = Yup.object().shape({
        estimateId: Yup.string().required("Please enter a previous Estimate ID"),
        userId: Yup.string().required("Please enter a previous User ID"),


    });

    const handleFindByEstimateIdSubmit = (values) => {
        console.log('[RepeatService] handleFindByEstimateIdSubmit: ', values);
        const { estimateId, userId } = values;  // Destructure values object
        validateUserByEstimateId(estimateId, userId);  // Pass both parameters separately
    };



    const handleEdit = (id) => {
        //navigate(`/estimate/${id}`);
    }


    return (

            <div className='Estimates'>
                <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Repeat </Typography>
                <Typography color="primary" variant="cardTitle" component='h1' display="inline">Service</Typography>
                <Typography variant="body1" marginBottom='20px'>Welcome Back! Enter in your UserID and any previous Estimate ID,
                    and chose a date for us to come again.
                    Your User ID and Estimate ID are in the email we sent you for your last visit.
                </Typography>


                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFindByEstimateIdSubmit}
                >
                    {({values, errors, touched, handleBlur, isValid, handleInputChange}) => (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} marginBottom={1} >
                                    <FormControl fullWidth variant="outlined">
                                        <Field
                                            as={TextField}
                                            name="userId"
                                            variant="outlined"
                                            label="Enter User Id"
                                        />
                                        {errors.userId && touched.UserId ?
                                            <div><Typography color='red'>{errors.UserId}</Typography></div> : null}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} marginBottom={1} >
                                    <FormControl fullWidth variant="outlined">
                                        <Field
                                            as={TextField}
                                            name="estimateId"
                                            variant="outlined"
                                            label="Enter Estimate Id"
                                        />
                                        {errors.estimateId && touched.estimateId ?
                                            <div><Typography color='red'>{errors.estimateId}</Typography></div> : null}
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {/*<Button*/}
                            {/*    disabled={!isValid}*/}
                            {/*    // variant="contained"*/}
                            {/*     color="primary"*/}
                            {/*    type="submit"*/}
                            {/*    //className='classes button'*/}
                            {/*>*/}
                            {/*    SEARCH*/}
                            {/*</Button>*/}
                            <CardActions>
                                <Button
                                    disabled={!isValid}
                                    variant="contained"
                                    color="primary"
                                    type="Submit"
                                    className='classes button'>
                                    BOOK AGAIN
                                </Button>
                            </CardActions>
                        </Form>
                        )}
                </Formik>
            </div>

        );
    }

    export default RepeatService;