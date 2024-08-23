import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import { useNavigate } from 'react-router-dom';
import UserEdit from './UserEdit';
// import EstimateChip from './EstimateChip';

import {
    Typography, Grid, Box, Button, Chip,
    ThemeProvider, CssBaseline, Card,
    CardHeader, CardContent, CardActions,
    FormControl, Select, MenuItem, InputLabel,
    Checkbox,FormControlLabel, FormGroup,
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";

const UserDetail = () => {
    const { user } = useContext(EstimateContext);
    //const [showEdit, setShowEdit] = useState(false);

    const navigate = useNavigate();

    console.log('[UserDetail] user: ' + user);
    //console.log('[UserDetail] estimate.hasOwnProperty servicedetails: ' + estimate.hasOwnProperty("servicedetails"));

    // create a string in US Currency for Chip


    const handleNextClick = () => {
        console.log('[UserDetail] handleNextClick ---> Appointments');
        //navigate('/appointments');
    }

    const handleEditClick = () => {
       // setShowEdit(!showEdit);
    }

    const handleOnEditCloseClick = () => {
        console.log('[UserDetail] handleOnEditCloseClick');
       // setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        console.log('[UserDetail] handleSubmit');
      //  setShowEdit(false);
    }




    // content is the markup that is displayed in the browser depending on the state of the estimate
    let content = <h3>loading</h3>

    // IF we have an estimate with the right data structure but the user as asked to edit it

    return (
       <>
           <div>UserDetail</div>
       </>
    )

}


export default UserDetail;