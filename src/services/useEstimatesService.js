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

        // Hydrate estimateObj to send to estimate service (TBD)
        //  For now we will do the EST service here and return back an estimate. obj will sit in mem for now
        // rate in dollars
        const rate = 30.00;
        const minimum = 50.00;
        let  totalhours = 0;

        let estimateObj = {
            typeofservice: estimateRequest.typeofservice,
            construct: estimateRequest.construct,
            sqft: estimateRequest.sqft,
            numpeople: estimateRequest.numpeople,
            numrooms: estimateRequest.numrooms,
            numbaths: estimateRequest.numbaths,
            numpets: estimateRequest.numpets,
            cleanfactor: estimateRequest.cleanfactor,
            laundrywashandfold: estimateRequest.laundrywashandfold,
            dishwashing: estimateRequest.dishwashing,
            mealprep: estimateRequest.mealprep,
            ovencleaning: estimateRequest.ovencleaning,
            fridgecleaning: estimateRequest.fridgecleaning,
            deepcleaning: estimateRequest.deepcleaning,
            professionalcouchcleaning: estimateRequest.professionalcouchcleaning,
            professionalrugshampoo: estimateRequest.professionalrugshampoo,
            professionalfloorwaxing: estimateRequest.professionalfloorwaxing,
            dogwalking: estimateRequest.dogwalking,
            petsitting: estimateRequest.petsitting,
            dispensingmedication: estimateRequest.dispensingmedication,
            waste: estimateRequest.waste,
            rate: rate,
            minimum: minimum,
            cost: {
                total: 0,
                cleaning: 0,
                extra: 0,
                pro: 0,
                pet: 0,
            }
        }



        ///ESTIMATE SERVICE FORMULA (TO BE REFACTORED INTO AN API TBD)//////////////
        // RUNTIME ©2024 /////////////////
        // factors to estimate the time per room (tpr)
        const sqftfactor = (estimateObj.sqft /100) ; // 12.5 * 1.5 = 18.75 mins   25.0 * 2 = 50 mins
        const roomsfactor = estimateObj.numpeople /estimateObj.numrooms; // 1 / 3 = .333 (1/3 of an hour or 20 mins)
        const bathsfactor = estimateObj.numpeople / estimateObj.numbaths; // 1/3 = .333 (1/3 of an hour or 20 mins)
        const petsfactor = estimateObj.numpets * 5; // 5 minutes per pet


        // time per room for each factor
        const base_tpr = roomsfactor * 60// 20 mins or a time in mins.
        const base_tpb = bathsfactor * 60 // // time in mins
        const petstpr = petsfactor * 1.5
        const sqfttpr = Math.round(sqftfactor* 1.5);

        // sub totals for total time per room
        let tpr = base_tpr + sqfttpr + petstpr + estimateObj.cleanfactor;
        // set a limit to 90 mins per room
        if (tpr >= 90) {
            tpr = 90
        }
        let tpb = (base_tpb / 1.7) + sqfttpr + petstpr + estimateObj.cleanfactor;

        if (tpb >= 90) {
            tpb = 90
        }

        let totaltimerooms = Math.round(tpr * estimateObj.numrooms) / 60;
        const totaltimebaths = Math.round(tpb * estimateObj.numbaths) / 60;

        // total hours estimateObjd
        totalhours = totaltimerooms + totaltimebaths;

        // END STANDARD CLEANING
        // BEGIN EXTRA, PRO AND PET

        //EXTRA RATES
        const diswashingrate = 35;
        const laundryrate = 60;
        const ovenrate = 35;
        const mealpreprate = 60;
        const fridgerate = 55;
        const deepcleanrate = 100;

        //PRO RATES
        const couchrate = 160;
        const rugrate = 90;
        const floorwaxreate = 80;

        //PET RATES
        const dogwalkingrate = 30;
        const petsittingrate = 30;
        const dispensingrate = 15;
        const wasterate = 15;

        //COSTS - EXTRAS
        const dishwashingcost = estimateRequest.dishwashing * diswashingrate;
        const laundrycost = estimateObj.laundrywashandfold * laundryrate;
        const mealprepcost = estimateRequest.mealprep * mealpreprate;

        const ovencleaningcost = (estimateObj.ovencleaning)? ovenrate : 0;
        const fridgecleaningcost = (estimateRequest.fridgecleaning)? fridgerate : 0;
        const deepcleaningcost = (estimateObj.deepcleaning)? deepcleanrate : 0;

        const professionalcouchcleaningcost = (estimateObj.professionalcouchcleaning)? couchrate : 0;
        const professionalrugshampoocost = (estimateObj.professionalrugshampoo)? rugrate : 0;
        const professionalfloorwaxingcost = (estimateObj.professionalfloorwaxing)? floorwaxreate :  0;

        const dogwalkingcost = (estimateObj.dogwalking)? dogwalkingrate : 0;
        const petsittingcost = (estimateObj.petsitting)? petsittingrate: 0;
        const dispensingmedicationcost = (estimateObj.dispensingmedication)? dispensingrate : 0;
        const wastecost = (estimateObj.waste)? wasterate : 0;


        ////////////////////
        // EST OBJ - total cost for basic cleaning
        ////////////////////
        estimateObj.cost.cleaning =  Math.round((totalhours * rate) + minimum);

        estimateObj.cost.extra = Math.round(
            dishwashingcost + laundrycost + mealprepcost +
            ovencleaningcost + fridgecleaningcost + deepcleaningcost
        );
        estimateObj.cost.pro = Math.round(
            professionalcouchcleaningcost + professionalrugshampoocost + professionalfloorwaxingcost
        )
        estimateObj.cost.pet = Math.round(
            dogwalkingcost + petsittingcost + dispensingmedicationcost + wastecost
        )

        estimateObj.cost.total = estimateObj.cost.cleaning + estimateObj.cost.extra + estimateObj.cost.pro + estimateObj.cost.pet;

        // Final Estimate to be returned
        const estimate = estimateObj.cost.total;

        ///////////////////
        // LOGS
        //////////////////

        // request object received for estimate
        console.log('[useEstimateService] param: estimateRequest: ', estimateRequest)

        // Hydrated estimateObj as received
        console.log('rate: ', estimateObj.rate, ' typeofservice: ', estimateObj.typeofservice, ' construct: ', estimateObj.construct,
            ' numpeople: ', estimateObj.numpeople, 'numrooms: ', estimateObj.numrooms, 'numbaths: ', estimateObj.numbaths, ' numpets: ', estimateObj.numpets, ' sqft: ', estimateObj.sqft, ' cleanfactor: ', estimateObj.cleanfactor,);

        // Algo Factors for basic services
        console.log('Factors:');
        console.log('sqftfactor: 10% of square feet * 2', sqftfactor);
        console.log('roomsfactor  (occupants / rooms) : ', roomsfactor);
        console.log('bathsfactor: (occupants / baths)', bathsfactor);
        console.log('petsfactor: (5 mins per pet) ', petsfactor);
        console.log('cleanfactor: (already in mins) ', estimateObj.cleanfactor);

        // estimated times for basic services from factors
        console.log('base_tpr in minutes: ', base_tpr);
        console.log('base_tpb in minutes: ', base_tpb);
        console.log('sqfttpr in minutes:', sqfttpr);
        console.log('petsfactor: in minutes ', petsfactor);
        console.log('cleanfactor: in minutes ', estimateObj.cleanfactor);

        console.log('tpr in mins: ', tpr);
        console.log('tpb in mins: ', tpb);

        console.log('totaltimerooms: ', totaltimerooms);
        console.log('totaltimebaths: ', totaltimebaths);

        console.log('totalhours: ', totalhours);

        // End Basic Services
        // Extra, Professional and Pet Services estimateOjb
        console.log('laundrywashandfold: ', estimateObj.laundrywashandfold);
        console.log('dishwashing: ', estimateObj.dishwashing);
        console.log('mealprep: ', estimateObj.mealprep);
        console.log('ovencleaning: ', estimateObj.ovencleaning);
        console.log('fridgecleaning: ', estimateObj.fridgecleaning);
        console.log('deepcleaning: ', estimateObj.deepcleaning);
        console.log('professionalcouchcleaning: ', estimateObj.professionalcouchcleaning);
        console.log('professionalrugshampoo: ', estimateObj.professionalrugshampoo);
        console.log('professionalfloorwaxing: ', estimateObj.professionalfloorwaxing);
        console.log('dogwalking: ', estimateObj.dogwalking);
        console.log('petsitting: ', estimateObj.petsitting);
        console.log('dispensingmedication: ', estimateObj.dispensingmedication);
        console.log('waste: ', estimateObj.waste);

        console.log('EXTRAS: ');
        console.log('dishwashingcost: ', dishwashingcost);
        console.log('laundrycost: ', laundrycost);
        console.log('mealprepcost: ', mealprepcost);
        console.log('ovencleaningcost: ', ovencleaningcost);
        console.log('fridgecleaningcost: ', fridgecleaningcost);
        console.log('deepcleaningcost: ', deepcleaningcost);
        console.log('professionalcouchcleaningcost: ', professionalcouchcleaningcost);
        console.log('professionalrugshampoocost: ', professionalrugshampoocost);
        console.log('professionalfloorwaxingcost: ', professionalfloorwaxingcost);
        console.log('dogwalkingcost: ', dogwalkingcost);
        console.log('petsittingcost: ', petsittingcost);
        console.log('dispensingmedicationcost: ', dispensingmedicationcost);
        console.log('wastecost: ', wastecost);

        console.log('estimateObj.cost.cleaning: ', estimateObj.cost.cleaning);
        console.log('estimateObj.cost.extra: ', estimateObj.cost.extra);
        console.log('estimateObj.cost.pro: ', estimateObj.cost.pro);
        console.log('estimateObj.cost.pet: ', estimateObj.cost.pet);

        console.log('estimateObj.cost.total: ', estimateObj.cost.total);

        // OLD PRE  CODE
       //  let totalhours = 0;
       //  const typeofservice = estimateObjRequest.typeofservice;
       //  const construct = estimateRequest.construct;
       //  const sqft = estimateRequest.sqft;
       //  const numpeople = estimateRequest.numpeople;
       //  const numrooms = estimateRequest.numrooms;
       //  const numbaths = estimateRequest.numbaths;
       //  const numpets = estimateRequest.numpets;
       //  const cleanfactor = estimateRequest.cleanfactor;
       //
       //  // EXTRA
       //  const laundrywashandfold = estimateRequest.laundrywashandfold;
       //  const dishwashing = estimateRequest.dishwashing;
       //  const mealprep = estimateRequest.mealprep;
       //  const ovencleaning = estimateRequest.ovencleaning;
       //  const fridgecleaning = estimateRequest.fridgecleaning;
       //  const deepcleaning = estimateRequest.deepcleaning;
       //
       //
       //  // PRO
       //  const professionalcouchcleaning = estimateRequest.professionalcouchcleaning;
       //  const professionalrugshampoo = estimateRequest.professionalrugshampoo;
       //  const professionalfloorwaxing = estimateRequest.professionalfloorwaxing;
       //
       //
       //  // PET
       //  const dogwalking = estimateRequest.dogwalking;
       //  const petsitting = estimateRequest.petsitting;
       //  const dispensingmedication = estimateRequest.dispensingmedication;
       //  const waste = estimateRequest.waste;
       //
       //
       //
       //
       //
       //  // factors to estimate the time per room (tpr)
       //  const sqftfactor = (sqft /100) ; // 12.5 * 1.5 = 18.75 mins   25.0 * 2 = 50 mins
       //  const roomsfactor = numpeople /numrooms; // 1 / 3 = .333 (1/3 of an hour or 20 mins)
       //  const bathsfactor = numpeople / numbaths; // 1/3 = .333 (1/3 of an hour or 20 mins)
       //  const petsfactor = numpets * 5 // 5 minutes per pet
       //
       //
       //
       //  // time per room for each factor
       //  const base_tpr = roomsfactor * 60// 20 mins or a time in mins.
       //  const base_tpb = bathsfactor * 60 // // time in mins
       //  const petstpr = petsfactor * 1.5
       //  const sqfttpr = Math.round(sqftfactor* 1.5);
       //
       //  // sub totals for total time per room
       //  let tpr = base_tpr + sqfttpr + petstpr + cleanfactor;
       //  // set a limit to 90 mins per room
       //  if (tpr >= 90) {
       //      tpr = 90
       //  }
       //  let tpb = (base_tpb / 2) + sqfttpr + petstpr + cleanfactor;
       //
       //  if (tpb >= 90) {
       //      tpb = 90
       //  }
       //
       //  let totaltimerooms = Math.round(tpr * numrooms) / 60;
       //  const totaltimebaths = Math.round(tpb * numbaths) / 60;
       //
       //  // total hours estimated
       //  totalhours = totaltimerooms + totaltimebaths;
       //
       //  // total cost for basic cleaning
       //  const estimate =  Math.round((totalhours * rate) + minimum);
       //
       //  // request object received for estimate
       //  console.log('[useEstimateService] param: estimateRequest: ', estimateRequest)
       //
       //  // same numbers returned from estimate service
       //  console.log('rate: ', rate, ' typeofservice: ', typeofservice, ' construct: ', construct,
       //      ' numpeople: ', numpeople, 'numrooms: ', numrooms, 'numbaths: ', numbaths, ' numpets: ', numpets, ' sqft: ', sqft, ' cleanfactor: ', cleanfactor,);
       //
       //  // factors we have created for estimate service to measure effort
       //  console.log('Factors:');
       //  console.log('sqftfactor: 10% of square feet * 2', sqftfactor);
       //  console.log('roomsfactor  (occupants / rooms) : ', roomsfactor);
       //  console.log('bathsfactor: (occupants / baths)', bathsfactor);
       //  console.log('petsfactor: (5 mins per pet) ', petsfactor);
       //  console.log('cleanfactor: (already in mins) ', cleanfactor);
       //
       //  // estimated times from service
       //  console.log('base_tpr in minutes: ', base_tpr);
       //  console.log('base_tpb in minutes: ', base_tpb);
       //  console.log('sqfttpr in minutes:', sqfttpr);
       //  console.log('petsfactor: in minutes ', petsfactor);
       //  console.log('cleanfactor: in minutes ', cleanfactor);
       //
       //  console.log('tpr in mins: ', tpr);
       //  console.log('tpb in mins: ', tpb);
       //
       //  console.log('totaltimerooms: ', totaltimerooms);
       //  console.log('totaltimebaths: ', totaltimebaths);
       //
       // // console.log('tpr: ', tpr);
       //  console.log('totalhours: ', totalhours);
       //
       //  // sub total estimate from service for just cleaning
       //  console.log('estimate: ', estimate);
       //
       //  console.log('laundrywashandfold: ', laundrywashandfold);
       //  console.log('dishwashing: ', dishwashing);
       //  console.log('mealprep: ', mealprep);
       //  console.log('ovencleaning: ', ovencleaning);
       //  console.log('fridgecleaning: ', fridgecleaning);
       //  console.log('deepcleaning: ', deepcleaning);
       //  console.log('professionalcouchcleaning: ', professionalcouchcleaning);
       //  console.log('professionalrugshampoo: ', professionalrugshampoo);
       //  console.log('professionalfloorwaxing: ', professionalfloorwaxing);
       //  console.log('dogwalking: ', dogwalking);
       //  console.log('petsitting: ', petsitting);
       //  console.log('dispensingmedication: ', dispensingmedication);
       //  console.log('waste: ', waste);


        // SetState for Estimate & return
        if (!estimate) {
            setEstimate(0);
            return;
        }
        // Set State for Estimate
         setEstimate(estimate);
    };

    return [estimate, getEstimate];

};
