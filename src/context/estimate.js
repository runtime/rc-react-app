import {createContext, useState} from 'react';
import axios from "axios";
import React from "react";


//CONTEXT PROVIDER
// children are the

const EstimateContext = createContext();



function Provider( {children} ) {
    const [estimate, setEstimate] = useState({ });

    const getEstimatesFromAPI =  () => {
      //Fetch Data
    }
    // HELPER FUNCTIONS
    //todo move helper functions to api estimate algo
    const calculateEstimate = (obj) => {
        console.log('[Provider] calculateEstimate obj: ', obj)
        const newObj = obj;
        console.log('[Provider] calculateEstimate newObj.keys: ', Object.keys(newObj));
        // emulate the algo applying changes to the new object
        // for now we are only updating the cost
        newObj["cost"] = {
                "total": 5,
                "cleaning": 4,
                "extra": 3,
                "professional": 2,
                "pet": 1
            }

            console.log('[Provider] calculateEstimate newObj: ', newObj)
            return newObj;
        }

    // context functions
    const createEstimate = async (obj) => {

        console.log('[Provider] createEstimate: ', obj );
        // send the estimate object to the estimate service to be calculated
        //todo call estimateService and have algo give back the estimate - for now we will use helper functions
        const servicedetails = calculateEstimate(obj);
        console.log('[Provider] cost', servicedetails);
        // store the updated estimate in the database
        const response = await axios.post('http://localhost:3001/estimates', {
            servicedetails
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