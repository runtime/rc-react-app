// import React, { useEffect, useContext } from 'react';
// import EstimateContext from '../context/estimate';
// const Estimates = () => {
//     const { estimates, getAllEstimates } = useContext(EstimateContext);
//
//     useEffect(() => {
//         getAllEstimates();
//     }, []);
//
//     return (
//         <div>
//             <h1>Estimates</h1>
//             {Array.isArray(estimates) && estimates.length > 0 ? (
//                 estimates.map((estimate, index) => (
//                     <div key={index}>
//                         <h4>{estimate.servicedetails?.typeofservice}</h4>
//                         <p>{`${estimate.estimateId}`} | {`Total Cost: $${estimate.servicedetails?.cost?.total}`}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No estimates available.</p>
//             )}
//         </div>
//     );
// };
//
// export default Estimates;




import {useContext, useEffect} from 'react';
import '../styles/Estimates.css';
import { Grid, ThemeProvider, CssBaseline,} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import EstimateContext from '../context/estimate';

import EstimateCreate from '../components/EstimateCreate';
import EstimateDetail from '../components/EstimateDetail';

const Estimates = () => {
    const { estimate } = useContext(EstimateContext);
    let content = <> loading </>

    const hasServiceDetails = estimate?.servicedetails;

    console.log('[Estimates] estimate: ', estimate);
    console.log('[Estimates] estimate.hasOwnProperty(servicedetails): ', hasServiceDetails);
    if (hasServiceDetails) {
        console.log('[Estimates] estimate.item.servicedetails: ' + estimate.servicedetails);
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
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );

}

export default Estimates;