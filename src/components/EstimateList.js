import React from 'react';

import EstimateItem from './EstimateItem';

import {
    Box,
    ImageList,
    ImageListItem, Typography
} from '@mui/material';

const EstimateList = ({ estimates }) => {
    console.log('[EstimateList] estimates : ', estimates);
    const renderedList = estimates.map((estimate) => {
        return <EstimateItem key={estimate.id} estimate={estimate} />
    })
    return (
        <Box>
            <Typography variant="h6" color="primary" component="a" className='post-list title'>
                estimates list
            </Typography>
            <ImageList sx={{ width: 'auto', height: {
                    xs: 'auto', sm: 'auto', md: '160px', lg: '160px', xl: 'auto'
                }}} gap={20} cols={3} >{renderedList}</ImageList>
        </Box>
    )
    // return <div> EstimateList </div>
}

export default EstimateList;