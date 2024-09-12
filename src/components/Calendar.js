//import "./styles.css";
import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';

import Cal from "@calcom/embed-react";

const Calendar = () => {
    const { estimate } = useContext(EstimateContext);
    const { user } = useContext(EstimateContext);
    const { location } = useContext(EstimateContext);

    console.log('[Calendar] user: ', user.userDetails.firstname);
    console.log('[Calendar] estimate total hours to prepend duration of meeting: ', estimate.servicedetails.data.totalhours);

    const al = estimate.servicedetails.data.totalhours;
    console.log('[Calendar] al: ', al);

    const callink = "rapidclean/" + al + "-hrs"




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
                    name: user.userDetails.firstname + " " + user.userDetails.lastname,
                    email: user.userDetails.email,
                    phone: user.userDetails.phone,
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
