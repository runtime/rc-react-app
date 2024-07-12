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

        // TODO Refactor the below algo into a Microservice
        const rate = 30.00;
        const minimum = 60.00;
        const cleaningfee = 35.00;
        const moveoutfee = 25.00;
        let  totalhours = 0;
        // for temp user names
        const prenoms = ["greengiraffe", "purplebutterfly", "yellowfrog"]

        const randomID = Math.random



        let serviceObj = {
            serviceID: obj.serviceID,
            userID: prenoms[Math.round(Math.random(2))] + "_" + Math.floor(Math.random() * 1000),
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

        console.log('[Provider] calculateEstimate serviceObj: ', serviceObj)


        ///ESTIMATE SERVICE FORMULA (TO BE REFACTORED INTO AN API TBD)//////////////
        // RUNTIME ©2024 /////////////////
        // factors to estimate the time per room (tpr)

        // because the form submits type of cleaning and construct as strings we need
        // to convert these strings to values. this is something i went back and forth on
        // but this is the best way


        const servicerate = (serviceObj.typeofservice === 'Standard Cleaning')? cleaningfee : moveoutfee;
        const constructrate = (serviceObj.construct === 'House')? 25 : 20;


        console.log('servicerate: ', servicerate);
        console.log('constructrate: ', constructrate);

        const sqftfactor = (serviceObj.sqft /100) ; // 12.5 * 1.5 = 18.75 mins   25.0 * 2 = 50 mins
        const roomsfactor = serviceObj.numpeople /serviceObj.numrooms; // 1 / 3 = .333 (1/3 of an hour or 20 mins)
        const bathsfactor = serviceObj.numpeople / serviceObj.numbaths; // 1/3 = .333 (1/3 of an hour or 20 mins)
        const petsfactor = serviceObj.numpets * 5; // 5 minutes per pet


        // time per room for each factor
        const base_tpr = roomsfactor * 60// 20 mins or a time in mins.
        const base_tpb = bathsfactor * 60 // // time in mins
        const petstpr = petsfactor * 1.5
        const sqfttpr = Math.round(sqftfactor* 1.25);

        // sub totals for total time per room
        let tpr = base_tpr + sqfttpr + petstpr + serviceObj.cleanfactor;
        // set a limit to 90 mins per room
        if (tpr >= 120) {
            tpr = 120
        }
        let tpb = (base_tpb / 1.8) + sqfttpr + petstpr + serviceObj.cleanfactor;

        if (tpb >= 90) {
            tpb = 90
        }

        let totaltimerooms = Math.round(tpr * serviceObj.numrooms) / 60;
        let totaltimebaths = Math.round(tpb * serviceObj.numbaths) / 60;

       // in order to show the change in cost for clean vs moveout and apartment vs house before we have num rooms or time
        // we need to set the total time to 0 if the estimate is for cleaning or moveout
        if ((!totaltimerooms) && (!totaltimebaths)) {
            totaltimerooms = 0
            totaltimebaths = 0
        }


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
        const dishwashingcost = serviceObj.dishwashing * diswashingrate;
        const laundrycost = serviceObj.laundrywashandfold * laundryrate;
        const mealprepcost = serviceObj.mealprep * mealpreprate;

        const ovencleaningcost = (serviceObj.ovencleaning)? ovenrate : 0;
        const fridgecleaningcost = (serviceObj.fridgecleaning)? fridgerate : 0;
        const deepcleaningcost = (serviceObj.deepcleaning)? deepcleanrate : 0;

        const professionalcouchcleaningcost = (serviceObj.professionalcouchcleaning)? couchrate : 0;
        const professionalrugshampoocost = (serviceObj.professionalrugshampoo)? rugrate : 0;
        const professionalfloorwaxingcost = (serviceObj.professionalfloorwaxing)? floorwaxreate :  0;

        const dogwalkingcost = (serviceObj.dogwalking)? dogwalkingrate : 0;
        const petsittingcost = (serviceObj.petsitting)? petsittingrate: 0;
        const dispensingmedicationcost = (serviceObj.dispensingmedication)? dispensingrate : 0;
        const wastecost = (serviceObj.waste)? wasterate : 0;


        //////////////////////////////////////////
        // Service OBJ - total cost for basic cleaning
        //////////////////////////////////////////

        // Data for employees total hours etc..
        serviceObj.data.totalhours = Math.round(totalhours);
        serviceObj.data.totaltimerooms = Math.round(totaltimerooms);
        serviceObj.data.totaltimebaths = Math.round(totaltimebaths);

        // Cost for Customers
        serviceObj.cost.cleaning =  Math.round((totalhours * rate) + servicerate + constructrate);

        serviceObj.cost.extra = Math.round(
            dishwashingcost + laundrycost + mealprepcost +
            ovencleaningcost + fridgecleaningcost + deepcleaningcost
        );

        serviceObj.cost.pro = Math.round(
            professionalcouchcleaningcost + professionalrugshampoocost + professionalfloorwaxingcost
        );
        serviceObj.cost.pet = Math.round(
            dogwalkingcost + petsittingcost + dispensingmedicationcost + wastecost
        );

        // calculate the final estimate

        serviceObj.cost.total = serviceObj.cost.cleaning + serviceObj.cost.extra + serviceObj.cost.pro + serviceObj.cost.pet;



        ///////////////////
        // LOGS
        //////////////////


        // Hydrated serviceObj as received
        console.log('[Provider] serviceObj.rate: ', serviceObj.rate, ' typeofservice: ', serviceObj.typeofservice, ' construct: ', serviceObj.construct,
            ' numpeople: ', serviceObj.numpeople, 'numrooms: ', serviceObj.numrooms, 'numbaths: ', serviceObj.numbaths, ' numpets: ', serviceObj.numpets, ' sqft: ', serviceObj.sqft, ' cleanfactor: ', serviceObj.cleanfactor,);

        // Algo Factors for basic services
        console.log('Factors:');
        console.log('sqftfactor: 10% of square feet * 2', sqftfactor);
        console.log('roomsfactor  (occupants / rooms) : ', roomsfactor);
        console.log('bathsfactor: (occupants / baths)', bathsfactor);
        console.log('petsfactor: (5 mins per pet) ', petsfactor);
        console.log('cleanfactor: (already in mins) ', serviceObj.cleanfactor);

        // estimated times for basic services from factors
        console.log('base_tpr in minutes: ', base_tpr);
        console.log('base_tpb in minutes: ', base_tpb);
        console.log('sqfttpr in minutes:', sqfttpr);
        console.log('petsfactor: in minutes ', petsfactor);
        console.log('cleanfactor: in minutes ', serviceObj.cleanfactor);

        console.log('tpr in mins: ', tpr);
        console.log('tpb in mins: ', tpb);

        console.log('totaltimerooms: ', totaltimerooms);
        console.log('totaltimebaths: ', totaltimebaths);
        console.log('totalhours: ', totalhours);
        console.log('=====================');

        ////// End Log Basic Services

        // Extra, Professional and Pet Services serviceObj
        console.log('laundrywashandfold: ', serviceObj.laundrywashandfold);
        console.log('dishwashing: ', serviceObj.dishwashing);
        console.log('mealprep: ', serviceObj.mealprep);
        console.log('ovencleaning: ', serviceObj.ovencleaning);
        console.log('fridgecleaning: ', serviceObj.fridgecleaning);
        console.log('deepcleaning: ', serviceObj.deepcleaning);
        console.log('professionalcouchcleaning: ', serviceObj.professionalcouchcleaning);
        console.log('professionalrugshampoo: ', serviceObj.professionalrugshampoo);
        console.log('professionalfloorwaxing: ', serviceObj.professionalfloorwaxing);
        console.log('dogwalking: ', serviceObj.dogwalking);
        console.log('petsitting: ', serviceObj.petsitting);
        console.log('dispensingmedication: ', serviceObj.dispensingmedication);
        console.log('waste: ', serviceObj.waste);

        console.log('Extra Costs: ');
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
        console.log('=============== estimate ==============');
        console.log('serviceObj.cost.cleaning: ', serviceObj.cost.cleaning);
        console.log('serviceObj.cost.extra: ', serviceObj.cost.extra);
        console.log('serviceObj.cost.pro: ', serviceObj.cost.pro);
        console.log('serviceObj.cost.pet: ', serviceObj.cost.pet);
        console.log('=======================================');
        console.log('serviceObj.cost.total: ', serviceObj.cost.total);
        console.log('================= Data ===================');
        console.log('serviceObj.data.totalhours: ', serviceObj.data.totalhours);
        console.log('serviceObj.data.totaltimerooms: ', serviceObj.data.totaltimerooms);
        console.log('serviceObj.data.totaltimebaths: ', serviceObj.data.totaltimebaths);
        console.log('=======================================');


        // Final Estimate to be returned
        return serviceObj;


        }

    // context functions
    const createEstimate = async (obj) => {

        console.log('[Provider] createEstimate: ', obj );
        // send the estimate object to the estimate service to be calculated
        //todo call estimateService and have algo give back the estimate - for now we will use helper functions
        const servicedetails = calculateEstimate(obj);
        console.log('[Provider] servicedetails', servicedetails);
        // store the updated estimate in the database
        const response = await axios.post('http://localhost:3001/estimates', {
            servicedetails
        });
        console.log('Provider] createEstimate response.data ', response.data);
        const processedEstimate = response.data;
        setEstimate(processedEstimate);
    }

    const editEstimateById = async (id, newTypeofService) => {
        // Todo save the updated estimate to the db
        const response = await axios.put(`http://localhost:3001/estimates/${id}`, {typeofservice: newTypeofService});
        console.log('[EstimateContext] editEstimateById response', response);
        setEstimate(response.data)
    }

    // const editEstimate =  (id, typeofservice) => {
    //     console.log('[Provider] editEstimate: ', id , ' typeofservice: ', typeofservice);
    //     // todo setEstimate
    //     setEstimate(estimate)
    // }





    // set new value to send back to context subscribers

    const providerValues = { estimate,
                             editEstimateById,
                             createEstimate,
                             setEstimate
                            }

    return (
        <EstimateContext.Provider value={providerValues}>
            {children}
        </EstimateContext.Provider>
    )
}

export {Provider};

export default EstimateContext;