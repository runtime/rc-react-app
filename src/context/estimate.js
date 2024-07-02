import {createContext, useState} from 'react';
import { useEstimatesService } from "../services/useEstimatesService";

const EstimateContext = createContext();



function Provider( {children} ) {
    const [estimate, setEstimate] = useState({ });
    //const [trigger, setTrigger] = useState(0);

    const getEstimatesFromAPI =  () => {
      //Fetch Data
    }

    const createEstimate = () => {
        const response = {total: 10};
        setEstimate(response);
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

    const tempValue = {

        cost: 10

    }

    return (
        <EstimateContext.Provider value={tempValue}>
            {children}
        </EstimateContext.Provider>
    )
}

export {Provider};

export default EstimateContext;