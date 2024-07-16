import {Chip} from "@mui/material";
import React from "react";


const EstimateChip = (num) => {
    console.log('[EstimateChip] num input: ', num)

    return(
        <>
            num.label: {num.label}
        </>
        // <Chip
        //     size='small'
        //     position='relative'
        //     label= {num.label}
        //     variant="contained"
        //     color='secondary'
        //     pointerEvents='none'
        //     sx={{
        //         padding: '2px',
        //         fontFamily: 'Helvetica Bold" "Arial Bold',
        //         color: 'white',
        //         fontWeight: '800',
        //         fontSize: '.85em',
        //         minWidth: '80px',
        //         marginLeft: '12px',
        //         transitionDuration: '0.3s',
        //         transitionProperty: 'all',
        //         transitionTimingFunction: 'linear',
        //         opacity: {xs: 0.8, sm: 0.8, lg: 0.8}
        //     }}
        // />
    )
}

export default EstimateChip