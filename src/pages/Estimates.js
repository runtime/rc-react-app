import {useContext, useState} from 'react';
import '../styles/Estimates.css';
import { Grid, ThemeProvider, CssBaseline,} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import EstimateContext from '../context/estimate';

import EstimateCreate from '../components/EstimateCreate';
import EstimateDetail from '../components/EstimateDetail';

const Estimates = () => {
    const { estimate } = useContext(EstimateContext);

    let content = <> loading </>
    if ((estimate.hasOwnProperty("servicedetails"))) {
        console.log('[Estimates] estimate.servicedetails: ' + estimate.servicedetails);
        content = <EstimateDetail />;
    } else  {
        content = <EstimateCreate />;
    }

    return (
        <ThemeProvider theme={RapidCleanTheme}>
            <CssBaseline />
            <div className='Estimates'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        {content}
                        ESTIMATE PAGE
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );

}

export default Estimates;