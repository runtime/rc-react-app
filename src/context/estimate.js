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

        console.log('[Provider] calculateEstimate newObj.keys: ', Object.keys(obj));
        // emulate the algo applying changes to the new object
        // for now we are only updating the cost
        // newObj["cost"] = {
        //         "total": 5,
        //         "cleaning": 4,
        //         "extra": 3,
        //         "professional": 2,
        //         "pet": 1
        //     }



            ///// PORTED FROM EST OBJ
        const rate = 30.00;
        const minimum = 60.00;
        let  totalhours = 0;

        let newObj = {
            typeofservice: obj.typeofservice,
            construct: obj.construct,
            sqft: obj.sqft,
            numpeople: obj.numpeople,
            numrooms: obj.numrooms,
            numbaths: obj.numbaths,
            numpets: obj.numpets,
            cleanfactor: obj.cleanfactor,
            laundrywashandfold: obj.laundrywashandfold,
            dishwashing: obj.dishwashing,
            mealprep: obj.mealprep,
            ovencleaning: obj.ovencleaning,
            fridgecleaning: obj.fridgecleaning,
            deepcleaning: obj.deepcleaning,
            professionalcouchcleaning: obj.professionalcouchcleaning,
            professionalrugshampoo: obj.professionalrugshampoo,
            professionalfloorwaxing: obj.professionalfloorwaxing,
            dogwalking: obj.dogwalking,
            petsitting: obj.petsitting,
            dispensingmedication: obj.dispensingmedication,
            waste: obj.waste,
            rate: rate,
            minimum: minimum,
            cost: {
                total: 0,
                cleaning: 0,
                extra: 0,
                pro: 0,
                pet: 0,
            },
            data: {
                totaltimerooms: 0,
                totaltimebaths: 0,
                totalhours: 0,
            }
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