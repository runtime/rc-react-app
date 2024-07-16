import React, { useContext } from 'react';
import '../styles/Estimates.css';
import * as Constants from '../constants/EstimateConstants';
import EstimateContext from '../context/estimate';

import {
    Typography, Grid, Box, Button,
    ThemeProvider, CssBaseline, Card,
    CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
} from '@mui/material';

import { Formik, Form } from "formik";

import { RapidCleanTheme } from "../themes/Theme.js";

const EditEstimate =({estimate, onSubmit}) => {
    // get edit func from provider as well as onSubmit to pass event with data up
    const { editEstimateById } = useContext(EstimateContext);

    const handleSubmit = (values) => {
        console.log('[EditEstimate] handleSubmit:', values);
        onSubmit()
        editEstimateById(estimate.id, values);
    }

    return (
        <div className='Estimates'>
            <Box>
                <ThemeProvider theme={RapidCleanTheme}>
                    <CssBaseline enableColorScheme/>
                    <Card elevation={1} sx={{marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '8px'}}>
                        <CardContent>
                            <Box sx={{ minWidth: 120 }}>
                                <Typography color="secondary" variant="cardTitle" component="h1" display="inline">Edit </Typography>
                                <Typography color="primary" variant="cardTitle" component='h1' display="inline">Details</Typography>
                                <Typography variant="body1" marginBottom='20px'> Edit the details of estimate: {estimate.id} below and click UPDATE to see the updated estimate. </Typography>
                                <Formik
                                    initialValues={estimate}
                                    //validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
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
                                                                {Constants.typeofserviceoptions.map((item) => (
                                                                    <MenuItem key={item.value} value={item.value}>
                                                                        {item.label}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <CardActions>
                                                        <Button
                                                            disabled={!isValid}
                                                            variant="contained"
                                                            color="primary"
                                                            type="Submit"
                                                            className='classes button'>
                                                            UPDATE
                                                        </Button>
                                                    </CardActions>
                                                </Grid>
                                            </Form>
                                        )
                                    }}
                                </Formik>
                            </Box>
                        </CardContent>
                    </Card>
                </ThemeProvider>
            </Box>
        </div>

    );
}

export default EditEstimate;