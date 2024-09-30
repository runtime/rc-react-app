import {createContext, useState} from 'react';
import axios from "axios";
import React from "react";


//CONTEXT PROVIDER
// children are the

const EstimateContext = createContext();

function Provider( {children} ) {
    const [estimate, setEstimate] = useState({});
    const [estimates, setEstimates] = useState([]);
    const [user, setUser ] = useState ({})
    const [location, setLocation ] = useState({})

    const [nav, setNav] = useState(0);

    const RC_API_URL = process.env.REACT_APP_RC_API_URL;
    console.log("API URL:", RC_API_URL);



    const getEstimatesFromAPI =  () => {
        //Fetch Data
    }
    // HELPER FUNCTIONS
    const determineIfDropDownExtraShouldBeDisplayed = (value) => {
        if ((value > 0) && (value !== "")) {
            return true
        } else {
            return false
        }
    }
    const createExtraServicesList = (arr) => {
        console.log('[Provider] createEstimateServicesList arr: ', arr);
        let extras = [];
        arr.forEach((item) => {
            console.log(item)
            if (item.display === true) {
                extras.push({
                    "label": item.label,
                    "cost": item.cost
                })
            }
        });
        console.log('[Provider] return extras: ', extras);
        return extras;
    }

    function generateRandomId(length = 10) {
        const characters = 'ABCDEFGHIJKL' +
            'MNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let estimateId = '';
        for (let i = 0; i < length; i++) {
            estimateId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return estimateId;
    }

    // todo navigation state

    const setCurrentNavigation = (id) => {
        console.log('[Provider] setNav id: ', id)
        console.log('[Provider] setNav nav ', nav)
        setNav(id);
    }

    //todo move helper functions to api estimate algo
    const calculateEstimate = async (obj) => {
        console.log('[Provider] calculateEstimate obj: ', obj)
        console.log('[Provider] calculateEstimate newObj.keys: ', Object.keys(obj));

        // TODO Refactor the below algo into a Microservice
        const rate = 30.00;
        const minimum = 60.00;
        const cleaningfee = 35.00;
        const moveoutfee = 25.00;
        let  totalhours = 0;
        // for temp user names
        const prenoms = ["green-giraffe", "purple-butterfly", "yellow-frog", "blue-fish", "red-rhino", "orange-cow", "pink-boar"];
        const randomID = Math.round(Math.random(9))

        let serviceObj = {
            userID: obj.userID? obj.userID : prenoms[Math.floor(Math.random() * 6)] + "-" + Math.floor(Math.random() * 1000),
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

        const sqftfactor = (serviceObj.sqft /100); // 12.5 * 1.5 = 18.75 mins   25.0 * 2 = 50 mins
        const roomsfactor = serviceObj.numpeople /serviceObj.numrooms; // 1 / 3 = .333 (1/3 of an hour or 20 mins)
        const bathsfactor = serviceObj.numpeople / serviceObj.numbaths; // 1/3 = .333 (1/3 of an hour or 20 mins)
        const petsfactor = serviceObj.numpets * 5; // 5 minutes per pet


        // time per room for each factor
        const base_tpr = roomsfactor * 60 //20 mins or a time in mins
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
        const laundryrate = 60;
        const diswashingrate = 35;
        const mealpreprate = 60;

        const ovenrate = 35;
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

        const laundrycost = serviceObj.laundrywashandfold * laundryrate;
        const dishwashingcost = serviceObj.dishwashing * diswashingrate;
        const mealprepcost = serviceObj.mealprep * mealpreprate;

        const displaylaundry = determineIfDropDownExtraShouldBeDisplayed(serviceObj.laundrywashandfold);
        const displaydishwashing = determineIfDropDownExtraShouldBeDisplayed(serviceObj.dishwashing);
        const displaymealprep = determineIfDropDownExtraShouldBeDisplayed(serviceObj.mealprep);


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


        ///////////////////////////////////////////////
        // Service OBJ - total cost for basic cleaning
        ///////////////////////////////////////////////

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

        //For the Service Details Page & Receipt We need a list of Extras the customer requested as well as the cost
        // we already have the cost

        // for display in service details and receipts. We could refactor and do this while we create the costs but we can always refactor this later.
        const extrasList = [
            {label: 'Laundry', display: displaylaundry, cost: laundrycost},
            {label: 'Dishes', display: displaydishwashing, cost: dishwashingcost},
            {label: 'Meals', display: displaymealprep, cost: mealprepcost},

            {label: 'Oven Cleaning', display: serviceObj.ovencleaning, cost: ovencleaningcost},
            {label: 'Fridge Clean', display: serviceObj.fridgecleaning, cost: fridgecleaningcost},
            {label: 'Deep Cleaning', display: serviceObj.deepcleaning, cost: deepcleaningcost},
        ];

        const prolist = [
            {label: 'Professional Couch Cleaning', display: serviceObj.professionalcouchcleaning, cost: professionalcouchcleaningcost},
            {label: 'Professional Rug Shampoo', display: serviceObj.professionalrugshampoo, cost: professionalrugshampoocost},
            {label: 'Professional Floor Waxing', display: serviceObj.professionalfloorwaxing, cost: professionalfloorwaxingcost},
        ];

        const petlist = [
            {label: 'Dog Walking', display: serviceObj.dogwalking, cost: dogwalkingcost},
            {label: 'Pet Sitting', display: serviceObj.petsitting, cost: petsittingcost},
            {label: 'Dispensing Medication', display: serviceObj.dispensingmedication, cost: dispensingmedicationcost},
            {label: 'Waste', display: serviceObj.waste, cost: wastecost},
        ];

        console.log('[Provider] full extrasList: ', extrasList);
        console.log('[Provider] full prolist: ', prolist);
        console.log('[Provider] full petlist: ', petlist);


        const extraserviceslistfordisplay = createExtraServicesList(extrasList);
        const proserviceslistfordisplay = createExtraServicesList(prolist);
        const petserviceslistfordisplay = createExtraServicesList(petlist);


        serviceObj.extraservices = extraserviceslistfordisplay;
        serviceObj.proservices = proserviceslistfordisplay;
        serviceObj.petservices = petserviceslistfordisplay;

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
        console.log('==============EXTRAS and PRO Objects=======');
        console.log('[Provider] serviceObj.extraservices: ', serviceObj.extraservices);
        console.log('[Provider] serviceObj.proservices: ', serviceObj.proservices);
        console.log('[Provider] serviceObj.petservices: ', serviceObj.petservices);
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

    const createUser = async (obj) => {
        try {
            console.log('[Provider] createUser ', obj);

            const userdetails = obj;
            const userId = userdetails.userID;

            // Correct URL without the trailing slash
            const response = await axios.post(`${RC_API_URL}/users`, {
                userId,
                userDetails: userdetails  // Ensure the key matches what the Lambda expects
            });

            console.log('[Provider] createUser response.data ', response.data);
            const {message, item} = response.data;
            const processedMessage = message;
            const processedUser = item;  // Assuming the response contains user details
            console.log('[Provider] processedUser ', processedUser);
            setUser(processedUser);

        } catch (error) {
            console.error('Error creating user:', error.response ? error.response.data : error.message);
        }
    };


    const findUserById = async(userId) => {
        console.log('[Provider] findUserById, userID: ', userId);
        const response = await axios.get(`${RC_API_URL}/users/${userId}`);
        console.log('[Provider] findUserById Axios Get response.data: ', response.data);
        //return response;
        const foundUser = response.data;
        setUser(foundUser);
    }

    const findUserByUserId = async (userId) => {
        try {
            console.log('[Provider] findUserByUserId, userId: ', userId);
            // Make the GET request to fetch the user by userId
            const response = await axios.get(`${RC_API_URL}/estimates/users/${userId}`);
            // Log the response
            console.log('[Provider] findUserByUserId Axios Get response.data: ', response.data);
            // Extract the user from the response
            const user = response.data.user;
            // Set the user state
            setUser(user);
            console.log('[Provider] User set: ', user);
            // Return the user in case you need it for further use
            return user;
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };


    const findEstimateById = async(obj) => {
        console.log('[Provider] findEstimateById, obj.estimateID: ', obj.estimateID);
        const response = await axios.get(`${RC_API_URL}/estimates/${obj.estimateID}`);
        console.log('[Provider] findEstimateById Axios Get response.data: ', response.data);
        // for now we are going to find the user by the Estimate ID
        const foundEstimate = response.data;
        console.log('[Provider] findEstimateById foundEstimate: ', foundEstimate.userID);
        setEstimate(foundEstimate);
        //const userResponse = await axios.get(`http://localhost:3001/users/${foundEstimate.userID}`);
        //return response;
        //setEstimate(response.data);

    }

    const createEstimate = async (obj) => {
        try {
            console.log('[Provider] createEstimate obj:', obj);

            const servicedetails =  await calculateEstimate(obj);  // Ensure this function is returning the expected structure
            const estimateId = generateRandomId(8);
            console.log('[Provider] servicedetails:', servicedetails);
            console.log('[Provider] createEstimate RC_API_URL:', `${RC_API_URL}/estimates`);
            const response = await axios.post(`${RC_API_URL}/estimates` ,
                {
                    estimateId:  estimateId, // Ensure you are passing estimateId
                    servicedetails,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log('[Provider] createEstimate response.data.item:', response.data.item);
            const {message, item} =  response.data;
            console.log('[Provider] createEstimate message:', message);
            console.log('[Provider] createEstimate item:', item);
            const processedEstimate = item;
            setEstimate(processedEstimate);
        } catch (error) {
            console.error('[Provider] Error creating estimate:', error.response || error.message);
        }
    };


    const getAllEstimates = async () => {
        try {
            const response = await axios.get(`${RC_API_URL}/estimates`);
            const estimatesData = response.data.estimates || [];

            // Use flat() to remove any nested arrays (e.g., [[estimate1], [estimate2]] => [estimate1, estimate2])
            const flattenedEstimates = estimatesData.flat();
            console.log('Flattened estimates:', flattenedEstimates);

            setEstimates(flattenedEstimates);
        } catch (error) {
            console.error('Error fetching estimates:', error);
        }
    };

    const editEstimateById = async (estimateId, editReqObj) => {
        console.log('[Provider] editEstimateById: ', estimateId, ' editReqObj: ', editReqObj,);
        // Todo call estimate service with new information
        const servicedetails = await calculateEstimate(editReqObj);
        // store the updated response
        const response = await axios.put(`${RC_API_URL}/estimates/${estimateId}`,
            {
                estimateId, // Ensure you are passing estimateId
                servicedetails,
            },
            {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        //console.log('[Provider] editEstimateById response.data:', response.data);
        const { message, item } =  response.data;
        const updatedEstimate = item;
        const messageResponse = message;
        console.log('[Provider] editEstimateById Axios Put response.data: ', messageResponse, updatedEstimate);
        setEstimate(updatedEstimate)
    }

    const editUserById = async (userId, editReqObj) => {
        console.log('[Provider] editUserById: ', userId, ' editReqObj: ', editReqObj,);
        const userdetails = editReqObj;
        const response = await axios.put(`${RC_API_URL}/users/${userId}`, {
            userdetails
        });
        console.log('[Provider] editUserById Axios Put response.data: ', response.data);
        const updatedUser = response.data;
        setUser(updatedUser)
    }

    const createLocation = async (obj) => {
        try {
            console.log('[Provider] createLocation: ', obj);
            const locationdetails = obj;
            const locationId = generateRandomId(8); // lets rename this later
            const response = await axios.post(`${RC_API_URL}/locations`, {
                locationId,
                locationdetails
            });
            console.log('[Provider] createLocation response.data ', response.data);
            const { message, item } =  response.data;
            const processedLocation = item;
            const messageResponse = message;
            console.log('[Provider] createLocation Axios Put response.data: ', messageResponse, processedLocation);
            setLocation(processedLocation);
        } catch (error) {
            console.error('Error creating location:', error.response ? error.response.data : error.message);
        }
    };


    const editLocationById = async (id, editReqObj) => {
        console.log('[Provider] editLocationById: ', id, ' editReqObj: ', editReqObj,);
        const locationdetails = editReqObj;
        const response = await axios.put(`${RC_API_URL}/locations/${id}`, {
            locationdetails
        });
        console.log('[Provider] editUserById Axios Put response.data: ', response.data);
        const updatedLocation = response.data;
        setLocation(updatedLocation)
    }

    const findLocationById = async (obj) => {
        console.log('[Provider] findLocationById, obj.locationID: ', obj.locationID);
        const response = await axios.get(`${RC_API_URL}/location/${obj.locationID}`);
        console.log('[Provider] findLocationById Axios Get response.data: ', response.data);
        return response;
        //setLocation(response.data);
    }


    const findLocationByUserId = async (userId) => {
        try {
            console.log('[Provider] findLocationByUserId, userId: ', userId);
            const response = await axios.get(`${RC_API_URL}/locations/${userId}`);
            console.log('[Provider] findLocationByUserId Axios Get response.data: ', response.data);

            const locations = response.data.locations;
            const foundLocation = locations.find(location => location.locationdetails.userId === userId);

            if (foundLocation) {
                console.log('[Provider] findLocationByUserId foundLocation: ', foundLocation);
                setLocation(foundLocation);
            } else {
                console.warn('No matching location found for userId:', userId);
                setLocation(null);  // Clear location state if not found
            }
        } catch (error) {
            console.error('Error fetching location:', error.response ? error.response.data : error.message);
        }
    };


    // const createBooking = async (obj) => {
    //     try {
    //         console.log('[Provider] createBooking: ', obj);
    //
    //         const response = await axios.post(`${RC_API_URL}/bookings`, obj, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //
    //         console.log('[Provider] createBooking response: ', response.data);
    //         const { message, item } = response.data;
    //         const newBooking = item;  // Assuming the response contains the created booking
    //         console.log('[Provider] New booking created: ', newBooking);
    //
    //         return newBooking;  // Return the created booking in case it's needed elsewhere
    //     } catch (error) {
    //         console.error('[Provider] Error creating booking: ', error.response ? error.response.data : error.message);
    //     }
    // };

    const createBooking = async (obj) => {
        try {
            // Ensure estimateId is present
            if (!obj.estimateId || typeof obj.estimateId !== 'string') {
                console.error('Error: estimateId is required and must be a string.');
                return;
            }

            console.log('[Provider] createBooking: ', obj);

            const response = await axios.post(`${RC_API_URL}/bookings`, obj, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('[Provider] createBooking response: ', response.data);
            const { message, item } = response.data;
            const newBooking = item;  // Assuming the response contains the created booking
            console.log('[Provider] New booking created: ', newBooking);

            return newBooking;  // Return the created booking in case it's needed elsewhere
        } catch (error) {
            console.error('[Provider] Error creating booking: ', error.response ? error.response.data : error.message);
        }
    };






    // set new value to send back to context subscribers

    const providerValues = {
        setCurrentNavigation,
        nav,
        estimate,
        estimates,
        editEstimateById,
        findEstimateById,
        createEstimate,
        getAllEstimates,
        setEstimate,
        createUser,
        findUserById,
        findUserByUserId,
        editUserById,
        setUser,
        user,
        createLocation,
        editLocationById,
        findLocationByUserId,
        setLocation,
        location,
        createBooking,
    }


    return (
        <EstimateContext.Provider value={providerValues}>
            {children}
        </EstimateContext.Provider>
    )
}

export {Provider};

export default EstimateContext;