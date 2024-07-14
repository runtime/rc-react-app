import React, { useContext, useState } from 'react';
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

const EditEstimate =({estimate, onSubmit}) => {
    const [typeOfService, setTypeOfService] = useState(estimate.servicedetails.typeofservice);
    const { editEstimateById } = useContext(EstimateContext);


    const handleChange = (e) => {
        setTypeOfService(e.target.value);
        console.log('[EditEstimate] handleChange typeOfService:', typeOfService);
    }

    const handleCloseBtnClick = (e) => {
        e.preventDefault();
        console.log('[EditEstimate] handleCloseBtnClick');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('[EditEstimate] handleSubmit:');
        onSubmit()
        editEstimateById(estimate.id, typeOfService);
    }

    return (
        <div>
            <h2>Edit Estimate</h2>
            <p>id: {estimate.id}</p>
            <form onSubmit={handleSubmit}>
                <label>type of service</label>
                <input className='input' type="text" value={typeOfService} onChange={handleChange}/>
                <button className='button is-primary' type="submit">SAVE</button>
                {/*<button className='button is-primary' onClick={handleCloseBtnClick}>SAVE</button>*/}
            </form>
        </div>

        // <ThemeProvider theme={RapidCleanTheme}>
        //     <CssBaseline />
        //     <div className="estimate">
        //         <Card sx={{ minWidth: 275, maxWidth: 600, maxHeight: 600, minHeight: 275 }}>
        //             <CardHeader title="Edit Estimate Details and click save" />
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