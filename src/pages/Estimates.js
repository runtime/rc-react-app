import React, { useEffect, useContext } from 'react';
import EstimateContext from '../context/estimate';
const Estimates = () => {
    const { estimates, getAllEstimates } = useContext(EstimateContext);

    useEffect(() => {
        getAllEstimates();
    }, []);

    return (
        <div>
            <h1>Estimates</h1>
            {Array.isArray(estimates) && estimates.length > 0 ? (
                estimates.map((estimate, index) => (
                    <div key={index}>
                        <h2>{estimate.servicedetails?.typeofservice}</h2>
                        <p>{`Rooms: ${estimate.servicedetails?.numrooms}`}</p>
                        <p>{`Total Cost: $${estimate.servicedetails?.cost?.total}`}</p>
                    </div>
                ))
            ) : (
                <p>No estimates available.</p>
            )}
        </div>
    );
};

export default Estimates;




// import {useContext, useEffect} from 'react';
// import '../styles/Estimates.css';
// import { Grid, ThemeProvider, CssBaseline,} from '@mui/material';
// import { RapidCleanTheme } from "../themes/Theme.js";
// import EstimateContext from '../context/estimate';
//
// // import EstimateCreate from '../components/EstimateCreate';
// // import EstimateDetail from '../components/EstimateDetail';
//
// import EstimateList from '../components/EstimateList';
// import EstimateItem from '../components/EstimateItem';
//
//
// const Estimates = () => {
//     //const { estimates } = useContext(EstimateContext);
//     const { estimates, getAllEstimates } = useContext(EstimateContext);
//
//     useEffect(() => {
//         getAllEstimates();
//     }, []);
//
//
//     console.log('[Estimates] estimates: ' + estimates);
//     let content = <> loading </>
//     if ((estimates) && (estimates.length > 0)) {
//         console.log('[Estimates] estimates: ' + estimates);
//         // content = <EstimateList estimates={estimates}/>;
//         content = <div>
//             <h1>Estimates</h1>
//             {estimates.length > 0 ? (
//                 estimates.map((estimate) => (
//                     <div key={estimate.id}>
//                         <h2>{estimate.servicedetails.typeofservice}</h2>
//                         <p>{`Rooms: ${estimate.servicedetails.numrooms}`}</p>
//                         <p>{`Total Cost: $${estimate.servicedetails.cost.total}`}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No estimates available.</p>
//             )}
//         </div>
//         // } else  {
//         content = <>
//             <div><p>no estimates to show</p></div>
//         </>;
//     }
//
//     return (
//         <ThemeProvider theme={RapidCleanTheme}>
//             <CssBaseline/>
//             <div className='Estimates'>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} sm={12} md={12}>
//                         {content}
//                         ESTIMATE PAGE
//                     </Grid>
//                 </Grid>
//             </div>
//         </ThemeProvider>
//     );
//
// }
//
// // const Estimates = () => {
// //     const { estimate } = useContext(EstimateContext);
// //     let content = <> loading </>
// //     if ((estimate.hasOwnProperty("servicedetails"))) {
// //         console.log('[Estimates] estimate.servicedetails: ' + estimate.servicedetails);
// //         content = <EstimateDetail />;
// //     } else  {
// //         content = <EstimateCreate />;
// //     }
// //
// //     return (
// //         <ThemeProvider theme={RapidCleanTheme}>
// //             <CssBaseline />
// //             <div className='Estimates'>
// //                 <Grid container spacing={3}>
// //                     <Grid item xs={12} sm={12} md={12}>
// //                         {content}
// //                         ESTIMATE PAGE
// //                     </Grid>
// //                 </Grid>
// //             </div>
// //         </ThemeProvider>
// //     );
// //
// // }
//
// export default Estimates;