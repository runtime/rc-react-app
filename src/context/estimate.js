import {createContext, useState} from 'react';
import { useEstimatesService } from "../services/useEstimatesService";

//CONTEXT PROVIDER
// children are the

const EstimateContext = createContext();



function Provider( {children} ) {
    const [estimate, setEstimate] = useState({ });
    //const [trigger, setTrigger] = useState(0);



    const getEstimatesFromAPI =  () => {
      //Fetch Data
    }

    const createEstimate = (obj) => {
        console.log('[Provider] createEstimate: ', obj );
        setEstimate(obj);
        console.log(estimate.total);
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