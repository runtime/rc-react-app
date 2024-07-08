import {createContext, useState} from 'react';
import axios from "axios";
import React from "react";


//CONTEXT PROVIDER
// children are the

const EstimateContext = createContext();



function Provider( {children} ) {
    const [estimate, setEstimate] = useState({ });


    //const [trigger, setTrigger] = useState(0);



    const getEstimatesFromAPI =  () => {
      //Fetch Data
    }

    // helper functions for estimate algo
    const calculateEstimate = (obj) => {
        console.log('[Provider] calculateEstimate obj: ', obj)
        const {total} = obj; // returns a number deconstructed obj
        const processedObj = {"total": total / .1}
        return processedObj;
    }

    // context functions
    const createEstimate = async (obj) => {
        //todo call estimateService and have algo give back the estimate
        // for now we will use helper functions
        console.log('[Provider] createEstimate: ', obj );
        const cost = calculateEstimate(obj);
        console.log('[Provider] ', cost);
        const response = await axios.post('http://localhost:3001/estimates', {
            cost
        });
        console.log('Provider] createEstimate response.data ', response.data);
        const processedEstimate = response.data;
        setEstimate(processedEstimate);
    }

    // set new value to send back to context subscribers

    const tempValue = {estimate, createEstimate}

    return (
        <EstimateContext.Provider value={tempValue}>
            {children}
        </EstimateContext.Provider>
    )
}

export {Provider};

export default EstimateContext;