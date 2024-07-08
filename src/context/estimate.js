import {createContext, useState} from 'react';
import calculateEstimate  from "../services/useEstimatesService";
import axios from "axios";

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

    // const createEstimate = async (obj) => {
    //     //todo call estimateService and have algo give back the estimate
    //     console.log('[Provider] createEstimate: ', obj );
    //     const response = await axios.post('http://localhost:3001/estimates', {
    //         obj
    //     });
    //     console.log('Provider] createEstimate response.data ', response.data);
    //     const updatedEstimate = response.data;
    //     setEstimate(updatedEstimate);
    // }

    const createEstimate = async (obj) => {
        //call estimateService and have algo give back the estimate
        console.log('[Provider] createEstimate: ', obj );
        const response = await calculateEstimate(obj)
        console.log('[Provider] createEstimate response: ', response);
        //const updatedEstimate = response.data;
        //setEstimate(updatedEstimate);
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