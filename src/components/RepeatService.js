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
    console.log('[RepeatService] ');
    const { findEstimateById } = useContext(EstimateContext);


    const initialValues = {
        estimateID: '',
    };

    const validationSchema = Yup.object().shape({
        estimateID: Yup.string().required("Please enter a previous Estimate ID"),

    });

    const handleFindByEstimateIdSubmit = (values) => {
        console.log('[RepeatService] handleFormSubmit: ', values)
        //TODO create context that gets the estimate by this id
        findEstimateById(values);
    }


    const handleEdit = (id) => {
        //navigate(`/estimate/${id}`);
    }


    return (

            <div className='Estimates'>
                <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Repeat </Typography>
                <Typography color="primary" variant="cardTitle" component='h1' display="inline">Service</Typography>
                <Typography variant="body1" marginBottom='20px'>Used us before? Enter in your estimateID from a previous visit and book again with one click.</Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFindByEstimateIdSubmit}
                >
                    {({values, errors, touched, handleBlur, isValid, handleInputChange}) => (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4} marginBottom={1} >
                                    <FormControl fullWidth variant="outlined">
                                        <Field
                                            as={TextField}
                                            name="estimateID"
                                            variant="outlined"
                                            label="Enter Estimate ID"
                                        />
                                        {errors.estimateID && touched.estimateID ?
                                            <div><Typography color='red'>{errors.estimateID}</Typography></div> : null}
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
                                    Search Estimates
                                </Button>
                            </CardActions>
                        </Form>
                        )}
                </Formik>
            </div>

        );
    }

    export default RepeatService;