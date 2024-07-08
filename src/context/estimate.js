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

    // const createEstimate = (obj) => {
    //     /// MVP Working
    //     console.log('[Provider] createEstimate: ', obj );
    //     setEstimate(obj);
    //     console.log(estimate.total);
    //     //// json server
    //
    // }

    const calculateEstimate = (obj) => {
        console.log('[Provider] calculateEstimate obj: ', obj)
        const {total} = obj; // returns a number deconstructed obj
        const processedObj = {"total": total + 10}
        return processedObj;
    }

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







    // const getEstimate = async () => {
    //     const response = await axios.get('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    //     setEstimates(response.data);
    // }
    //
    // useEffect(() => {
    //     getEstimates();
    // }, [trigger]);

    // const value = {
    //     estimates,
    //     setTrigger
    // };

    const tempValue = {estimate, createEstimate}

    return (
        <EstimateContext.Provider value={tempValue}>
            {children}
        </EstimateContext.Provider>
    )
}

export {Provider};

export default EstimateContext;