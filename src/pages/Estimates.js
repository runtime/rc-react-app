import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox,FormControlLabel, FormGroup,
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";

import EstimateCreate from '../components/EstimateCreate';
import EstimateDetail from '../components/EstimateDetail';

const Estimates = () => {
    const { showEdit } = useContext(EstimateContext);
    console.log('[Estimates] showEdit: ' + showEdit);

    let content = <div> loading ...</div>
    if (showEdit) {
        content = <EstimateCreate />;
    } else {
        content= <EstimateDetail />;
    }

    return (
        <div>
            <div>{content}</div>
        </div>

    )
}

export default Estimates;