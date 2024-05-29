import {
    Typography, Box, Button, ThemeProvider, CssBaseline, Card, CardHeader, CardContent, CardActions
} from '@mui/material';
import { RapidCleanTheme } from "../themes/Theme.js";
import React from "react";



const RCCard = (props) => {
    return (
        <ThemeProvider theme={RapidCleanTheme}>
            <CssBaseline enableColorScheme />
            <Card elevation={0} sx={{ marginTop: 1, marginBottom: 1, minWidth: 275, borderRadius: '16px'}} >
                <CardContent>
                    <Typography color="secondary" variant="cardTitle" component="poster" display="inline">{props.span_left} </Typography>
                    <Typography color="primary" variant="cardTitle" component='poster' display="inline">{props.span_right}</Typography>
                    <Typography variant="body2">
                        {props.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' text='white' color='secondary' disableElevation
                        sx={{textTransform: 'Capitalize',
                            color:"white",
                            padding: '10px',
                            paddingLeft: '30px',
                            paddingRight: '30px',
                            margin: 'auto',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            fontWeight: 'bold'
                        }}
                    >
                        {props.buttonText}
                    </Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    )
}

export default RCCard;