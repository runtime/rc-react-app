import {createContext, useState} from 'react';
import axios from 'axios';

const EstimateContext = createContext();

function Provider( {children} ) {
    const [estimates, setEstimates] = useState([]);
    //const [trigger, setTrigger] = useState(0);

    const getEstimates = async () => {
        const response = await axios.get('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
        setEstimates(response.data);
    }

    useEffect(() => {
        getEstimates();
    }, [trigger]);

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