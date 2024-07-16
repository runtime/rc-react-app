import React, { useContext, useState } from 'react';
import '../styles/Estimates.css';
import * as Constants from '../constants/EstimateConstants';
import EstimateContext from '../context/estimate';

import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox,FormControlLabel, FormGroup,
} from '@mui/material';

import { Formik, Form, Field } from "formik";

import { RapidCleanTheme } from "../themes/Theme.js";

const EditEstimate =({estimate, onSubmit}) => {
    const { editEstimateById } = useContext(EstimateContext);

    const handleSubmit = (values) => {
        //e.preventDefault();
        console.log('[EditEstimate] handleSubmit:', values);
        onSubmit()
        editEstimateById(estimate.id, values);
    }

    // const typeofserviceoptions = [
    //     { label: "Standard Cleaning", value: "Standard Cleaning" },
    //     { label: "Standard Cleaning - Move Out", value: "Move-out Clean" },
    // ]



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
                                <Typography variant="body1" marginBottom='20px'> Update Details of estimate: {estimate.id} below. </Typography>
                                <form onSubmit={handleSubmit}>
                                    {/*<label>type of service</label>*/}
                                    {/*<input type="text" value={typeOfService} onChange={handleChange}/>*/}
                                    {/*<Button type="submit">SAVE</Button>*/}
                                </form>
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
                                                            //onSubmit={handleFormSubmit(values)}
                                                            //onClick={handleNextButtonClicked}
                                                            className='classes button'>
                                                            SAVE
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


//
   // <ThemeProvider theme={RapidCleanTheme}>
        // <CssBaseline/>
        // <div className="estimate">
        // <Card sx={{minWidth: 275, maxWidth: 600, maxHeight: 600, minHeight: 275}}>
        // <CardHeader title="Edit Estimate Details and click save" />
        //             <CardContent>
        //                 <Box sx={{ minWidth: 120 }}>
        //                     <Typography color="secondary" variant="cardTitle" component="h1"
        //                                 display="inline">Edit </Typography>
        //                     <Typography color="primary" variant="cardTitle" component='h1'
        //                                 display="inline">Details</Typography>
        //                     <Typography variant="body1" marginBottom='20px'>
        //                         Update Details of your Estimate below.
        //                     </Typography>
        //                     <FormControl fullWidth>
        //                         <InputLabel id="demo-simple-select-label">Status</InputLabel>
        //                         <Select
        //                             labelId="demo-simple-select-label"
        //                             id="demo-simple-select"
        //                             value={estimate.typeofservice}
        //                             label='Status'
        //                         >
        //                             <MenuItem value={"Cleaning"}>New</MenuItem>
        //                             <MenuItem value={"Move Out"}>In Progress</MenuItem>
        //                         </Select>
        //                     </FormControl>
        //                     <FormGroup>
        //                         {/*{estimate.servicedetails.map((service, index) => (*/}
        //                         {/*    <FormControlLabel key={index} control={<Checkbox checked={service.checked} />} label={service.name} />*/}
        //                         {/*))}*/}
        //                         <FormControlLabel control={<Checkbox checked={false} />} label="I agree that the above information is accurate and that I could be charged extra on site if not." />
        //                     </FormGroup>
        //                 </Box>
        //             </CardContent>
        //             <CardActions>
        //                 <Button size="small" onClick={handleOnSaveClick}>Save</Button>
        //             </CardActions>
        //         </Card>
        //     </div>
        // </ThemeProvider>
    );
}

export default EditEstimate;