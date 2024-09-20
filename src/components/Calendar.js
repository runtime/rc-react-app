//import "./styles.css";
import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';

import Cal from "@calcom/embed-react";

const Calendar = () => {
    const { estimate } = useContext(EstimateContext);
    const { user } = useContext(EstimateContext);
    const { location } = useContext(EstimateContext);

    console.log('[Calendar] user: ', user.userdetails.firstname);
    console.log('[Calendar] estimate: ', estimate.servicedetails.data.totalhours);

    const al = estimate.servicedetails.data.totalhours;
    console.log('[Calendar] al: ', al);

    const callink = "rapidclean/" + al + "-hrs"


    const data = {
        estimates: [
            {
                "servicedetails": {
                    "serviceID": "",
                    "userID": "purplebutterfly_276",
                    "typeofservice": "Standard Cleaning",
                    "construct": "Apartment",
                    "sqft": 250,
                    "numpeople": 2,
                    "numrooms": 1,
                    "numbaths": 5.5,
                    "numpets": 2,
                    "cleanfactor": 0,
                    "laundrywashandfold": "",
                    "dishwashing": "",
                    "mealprep": "",
                    "ovencleaning": false,
                    "fridgecleaning": false,
                    "deepcleaning": false,
                    "professionalcouchcleaning": false,
                    "professionalrugshampoo": false,
                    "professionalfloorwaxing": false,
                    "dogwalking": false,
                    "petsitting": false,
                    "dispensingmedication": false,
                    "waste": false,
                    "rate": 30,
                    "minimum": 60,
                    "cost": {
                        "total": 198,
                        "cleaning": 198,
                        "extra": 0,
                        "pro": 0,
                        "pet": 0
                    },
                    "data": {
                        "totaltimerooms": 2,
                        "totaltimebaths": 3,
                        "totalhours": 5
                    },
                    "extraservices": [
                        {
                            "label": "Laundry",
                            "cost": 0
                        },
                        {
                            "label": "Dishes",
                            "cost": 0
                        },
                        {
                            "label": "Meals",
                            "cost": 0
                        }
                    ],
                    "proservices": [],
                    "petservices": []
                },
                "id": "iiBCg1F"
            }
        ],
        locations: [
            {
                "locationdetails": {
                    "userId": "KSydB8-",
                    "estimateId": "iiBCg1F",
                    "streetaddress": "1024 Flora Street",
                    "floor": "2F",
                    "city": "Elizabeth",
                    "state": "NJ",
                    "zip": "07201"
                },
                "id": 5
            }

        ],
        users: [
            {
                "userdetails": {
                    "userID": "purplebutterfly_276",
                    "firstname": "erik",
                    "lastname": "john",
                    "phone": "12123334567",
                    "email": "erik.kroha@gmail.com",
                    "estimates": [
                        "iiBCg1F"
                    ]
                },
                "id": "KSydB8-"
            }

        ],
        services: [

        ]
    }

    // console.log(data);
    // console.log(data.users[0].userdetails.firstname);
    // console.log(data.estimates[0].servicedetails.data.totalhours);
    // const al = data.estimates[0].servicedetails.data.totalhours
    // const callink = "rapidclean/" + al + "-hrs"
    //console.log(appointment_length)


    return (
        <div className="Calendar">
            <Cal
                calLink={callink}
                styles={{
                    height: "100vh",
                    width: "100%",
                    color: "red"
                }}
                config={{
                    name: user.userdetails.firstname + " " + user.userdetails.lastname,
                    email: user.userdetails.email,
                    phone: user.userdetails.phone,
                    location: JSON.stringify({
                        value: "attendeeInPerson",
                        // It can be any string that defines an address where the meeting would occur
                        optionValue: location.locationdetails.streetaddress + " " + location.locationdetails.city + " " + location.locationdetails.state + " " + location.locationdetails.zip,
                    })
                }}
            />
        </div>
    );
};

export default Calendar;
