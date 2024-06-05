import React, {useState, useEffect} from "react";
//import ourService from "../api/OurService";

//hook to get an estimate from the estimate service (TBD)
// pass in the default estimate (initalValue)
export const useEstimatesService = (defaultEstimateRequest) => {
    // input a request
    // output an estimate
    const [estimate, setEstimate] = useState([]);
    console.log('useEstimatesService');

    useEffect(()=> {
        getEstimate(defaultEstimateRequest);
    }, [defaultEstimateRequest]);

    const getEstimate = async (estimateRequest) => {
       // const response = await ourService.post('/estimate', estimateRequest);
        console.log('getEstimate: estimateRequest' , estimateRequest);
        const res = estimateRequest + 9;

        console.log('res = ' , res);
        setEstimate(res);
        //setEstimate(response.data);
    };

    return [estimate, getEstimate];

};
