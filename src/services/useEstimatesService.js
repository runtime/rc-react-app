import React, {useState, useEffect} from "react";
//import ourService from "../api/OurService";

//hook to get an estimate from the estimate service (TBD)
// pass in the default estimate (initalValue)
export const useEstimatesService = (defaultEstimateRequest) => {
    // input a request
    // output an estimate
    const [estimate, setEstimate] = useState([]);
    console.log('useEstimatesService');

  //  let estimate = defaultEstimateRequest;
    useEffect(()=> {
        getEstimate(defaultEstimateRequest);
    }, [defaultEstimateRequest]);

    const getEstimate = async (estimateRequest) => {

        // TODO make call to estimate service
       // const response = await ourService.post('/estimate', {
        //             params: {
        //                 request: estimateRequest
        //             }
        //         });
        console.log('estimateRequest: ', estimateRequest);


        // let estimateObj = {
        //     totalhours: 0,
        //     typeofservice: estimateRequest.typeofservice,
        //     construct: estimateRequest.construct,
        //     sqft: estimateRequest.sqft,
        //     numpeople: estimateRequest,
        //     numrooms: estimateRequest,
        //     numbaths: estimateRequest,
        //     numpets: estimateRequest,
        //     cleanfactor: estimateRequest,
        //     laundrywashandfold: estimateRequest,
        //     dishwashing: estimateRequest,
        //     mealprep: estimateRequest,
        //     ovencleaning: estimateRequest,
        //     fridgecleaning: estimateRequest,
        //     deepcleaning: estimateRequest,
        //     professionalcouchcleaning: estimateRequest,
        //     professionalrugshampoo: estimateRequest,
        //     professionalfloorwaxing: estimateRequest,
        //     dogwalking: estimateRequest,
        //     petsitting: estimateRequest,
        //     dispensingmedication: estimateRequest,
        //     waste: estimateRequest,
        //     rate: rate,
        //     minimum: minimum,
        //     cost: {
        //         total: 0,
        //         cleaning: 0,
        //         extra: 0,
        //         professional: 0,
        //         pet: 0,
        //
        //     }
        // }
        let totalhours = 0;
        const typeofservice = estimateRequest.typeofservice;
        const construct = estimateRequest.construct;
        const sqft = estimateRequest.sqft;
        const numpeople = estimateRequest.numpeople;
        const numrooms = estimateRequest.numrooms;
        const numbaths = estimateRequest.numbaths;
        const numpets = estimateRequest.numpets;
        const cleanfactor = estimateRequest.cleanfactor;

        // EXTRA
        const laundrywashandfold = estimateRequest.laundrywashandfold;
        const dishwashing = estimateRequest.dishwashing;
        const mealprep = estimateRequest.mealprep;
        const ovencleaning = estimateRequest.ovencleaning;
        const fridgecleaning = estimateRequest.fridgecleaning;
        const deepcleaning = estimateRequest.deepcleaning;


        // PRO
        const professionalcouchcleaning = estimateRequest.professionalcouchcleaning;
        const professionalrugshampoo = estimateRequest.professionalrugshampoo;
        const professionalfloorwaxing = estimateRequest.professionalfloorwaxing;


        // PET
        const dogwalking = estimateRequest.dogwalking;
        const petsitting = estimateRequest.petsitting;
        const dispensingmedication = estimateRequest.dispensingmedication;
        const waste = estimateRequest.waste;



        // rate in dollars
        const rate = 30.00;
        const minimum = 50.00;

        // factors to estimate the time per room (tpr)
        const sqftfactor = (sqft /100) ; // 12.5 * 1.5 = 18.75 mins   25.0 * 2 = 50 mins
        const roomsfactor = numpeople /numrooms; // 1 / 3 = .333 (1/3 of an hour or 20 mins)
        const bathsfactor = numpeople / numbaths; // 1/3 = .333 (1/3 of an hour or 20 mins)
        const petsfactor = numpets * 5 // 5 minutes per pet



        // time per room for each factor
        const base_tpr = roomsfactor * 60// 20 mins or a time in mins.
        const base_tpb = bathsfactor * 60 // // time in mins
        const petstpr = petsfactor * 1.5
        const sqfttpr = Math.round(sqftfactor* 1.5);

        // sub totals for total time per room
        let tpr = base_tpr + sqfttpr + petstpr + cleanfactor;
        // set a limit to 90 mins per room
        if (tpr >= 90) {
            tpr = 90
        }
        let tpb = (base_tpb / 2) + sqfttpr + petstpr + cleanfactor;

        if (tpb >= 90) {
            tpb = 90
        }

        let totaltimerooms = Math.round(tpr * numrooms) / 60
        const totaltimebaths = Math.round(tpb * numbaths) / 60


        // total hours estimated
        totalhours = totaltimerooms + totaltimebaths

        // total cost for basic cleaning
        const estimate =  Math.round((totalhours * rate) + minimum);

        // request object received for estimate
        console.log('[useEstimateService] param: estimateRequest: ', estimateRequest)

        // same numbers returned from estimate service
        console.log('rate: ', rate, ' typeofservice: ', typeofservice, ' construct: ', construct,
            ' numpeople: ', numpeople, 'numrooms: ', numrooms, 'numbaths: ', numbaths, ' numpets: ', numpets, ' sqft: ', sqft, ' cleanfactor: ', cleanfactor,);

        // factors we have created for estimate service to measure effort
        console.log('Factors:');
        console.log('sqftfactor: 10% of square feet * 2', sqftfactor);
        console.log('roomsfactor  (occupants / rooms) : ', roomsfactor);
        console.log('bathsfactor: (occupants / baths)', bathsfactor);
        console.log('petsfactor: (5 mins per pet) ', petsfactor);
        console.log('cleanfactor: (already in mins) ', cleanfactor);

        // estimated times from service
        console.log('base_tpr in minutes: ', base_tpr);
        console.log('base_tpb in minutes: ', base_tpb);
        console.log('sqfttpr in minutes:', sqfttpr);
        console.log('petsfactor: in minutes ', petsfactor);
        console.log('cleanfactor: in minutes ', cleanfactor);

        console.log('tpr in mins: ', tpr);
        console.log('tpb in mins: ', tpb);


        console.log('totaltimerooms: ', totaltimerooms);
        console.log('totaltimebaths: ', totaltimebaths);

       // console.log('tpr: ', tpr);
        console.log('totalhours: ', totalhours);

        // sub total estimate from service for just cleaning
        console.log('estimate: ', estimate);

        console.log('laundrywashandfold: ', laundrywashandfold);
        console.log('dishwashing: ', dishwashing);
        console.log('mealprep: ', mealprep);
        console.log('ovencleaning: ', ovencleaning);
        console.log('fridgecleaning: ', fridgecleaning);
        console.log('deepcleaning: ', deepcleaning);
        console.log('professionalcouchcleaning: ', professionalcouchcleaning);
        console.log('professionalrugshampoo: ', professionalrugshampoo);
        console.log('professionalfloorwaxing: ', professionalfloorwaxing);
        console.log('dogwalking: ', dogwalking);
        console.log('petsitting: ', petsitting);
        console.log('dispensingmedication: ', dispensingmedication);
        console.log('waste: ', waste);



        if (!estimate) {
            setEstimate(0);
            return;
        }
        // Set State for Estimate
         setEstimate(estimate);
    };

    return [estimate, getEstimate];

};
