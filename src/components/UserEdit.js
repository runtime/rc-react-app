import React, {useState, useContext, useEffect } from 'react';
import '../styles/Estimates.css';
import * as Constants from '../constants/EstimateConstants';
import EstimateContext from '../context/estimate';

import {
    Typography, Grid, Box, Button,
    ThemeProvider, CssBaseline, Card,
    CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel, FormControlLabel, Checkbox,
} from '@mui/material';

import { Formik, Form } from "formik";

import { RapidCleanTheme } from "../themes/Theme.js";
import * as Yup from "yup";

const EditUser =({user}) => {

    //todo MUST ADD ON SUBMIT TO THE PARAM ABOVE FOR THIS PARADIGM TO WORK
    //onSubmit

    const { editUserById } = useContext(EstimateContext);
    // get edit func from provider as well as onSubmit to pass event with data up

    //this is correct
    console.log('[EditUser] user: , ', user)

    // removing the servicedetails wrapper (to use calculateEstimate) but storing the id which sits outside of it
   // const   initialValues   = user.userdetails.id;
    //const id = user.userdetails.id;

    //console.log('[EditUser] initialValues: ' , initialValues)

    const handleSubmit = (values) => {
        console.log('[editUser] handleSubmit:', values);
        //onSubmit()
        //editUserById(id, values);
    }

    return (

        <>
            <div> UserEdit</div>
            //todo Formik initial values need to have a onsubmit event to pass data up to provider
            {/*<Formik*/}
            {/*    initialValues={initialValues}*/}
            {/*    enableReinitialize*/}
            {/*    validationSchema={validationSchema}*/}
            {/*    onSubmit={handleSubmit} */}
            {/*>*/}
        </>
    );
}

export default EditUser;