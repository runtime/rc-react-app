import '../styles/Contact.css'
import React from "react";
import {
    Card,
    Grid,
    Box,
    Typography, ThemeProvider, CssBaseline, Button
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import {useContext} from "react";
import EstimateContext from "../context/estimate";

const Contact = () => {
    const {estimate} = useContext(EstimateContext);
    console.log('[Contact] estimate ', estimate);
    let content;
    if (estimate.hasOwnProperty("servicedetails")) {
        content = <div> {estimate.servicedetails.cost.total} </div>
    } else {
        content = <div> Loading... </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}
export default Contact;