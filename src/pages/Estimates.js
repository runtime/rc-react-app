import '../styles/Estimates.css';
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

    return (
        <ThemeProvider theme={RapidCleanTheme}>
            <CssBaseline />
            <div className='Estimates'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <EstimateCreate />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <EstimateDetail />
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );

}

export default Estimates;