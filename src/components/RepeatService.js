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
    console.log('[RepeatService] ')

    const initialValues = {
        estimateID: '',
    };

    const validationSchema = Yup.object().shape({
        estimateID: Yup.string().required("Required"),

    });

    const handleFormSubmit = (values) => {
        console.log('[RepeatService] handleFormSubmit: ', values)
        //TODO create context that gets the estimate by this id
        //findEstimateById(id);
    }


    const handleEdit = (id) => {
        //navigate(`/estimate/${id}`);
    }


    return (

            <div className='Estimates'>
                <h1>Enter Your Information</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    {({values, errors, touched, handleBlur, isValid, handleInputChange}) => (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <FormControl fullWidth variant="outlined">
                                        <Field
                                            as={TextField}
                                            name="estimateID"
                                            variant="outlined"
                                            label="Estimate ID"
                                        />
                                        {errors.estimateID && touched.estimateID ?
                                            <div><p>{errors.estimateID}</p></div> : null}
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Form>
                        )}
                </Formik>
            </div>

        );
    }

    export default RepeatService;