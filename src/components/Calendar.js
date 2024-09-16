// //import "./styles.css";
// import React, {useContext, useEffect} from 'react'
// import '../styles/Estimates.css';
// import EstimateContext from '../context/estimate';
//
// import Cal from "@calcom/embed-react";
//
// const Calendar = () => {
//     const { estimate, editEstimateById } = useContext(EstimateContext);
//     const { user } = useContext(EstimateContext);
//     const { location } = useContext(EstimateContext);
//
//     console.log('[Calendar] user: ', user.userDetails.firstname);
//     console.log('[Calendar] estimate total hours to prepend duration of meeting: ', estimate.servicedetails.data.totalhours);
//
//     // Cal("on", {
//     //     action: "BOOKING_COMPLETED", // Listen to all events, or use "BOOKING_COMPLETED"
//     //     callback: (e) => {
//     //         const { data, type } = e.detail;
//     //
//     //         // Handle the event when booking is completed
//     //         if (type === "BOOKING_COMPLETED") {
//     //             const bookingId = data.bookingId;
//     //
//     //             console.log("Booking completed. Booking ID: ", bookingId);
//     //
//     //             // Call updateOneEstimate to add bookingId to the estimate's serviceDetails
//     //             editEstimateById(estimate.estimateId, {
//     //                 ...estimate,
//     //                 servicedetails: {
//     //                     ...estimate.servicedetails,
//     //                     bookingId: bookingId  // Add the bookingId to the servicedetails
//     //                 }
//     //             });
//     //         }
//     //     }
//     // });
//
//     const al = estimate.servicedetails.data.totalhours;
//     console.log('[Calendar] al: ', al);
//
//     const callink = "rapidclean/" + al + "-hrs"
//
//     // if (callink) {
//     //     console.log('[Calendar] callink: ', callink);
//     //     Cal("on", "BOOKING_COMPLETED", (e) => {
//     //         console.log("Booking completed. Booking ID: ", e.detail.data.bookingId);
//     //     });
//     // }
//     // console.log(data);
//     // console.log(data.users[0].userdetails.firstname);
//     // console.log(data.estimates[0].servicedetails.data.totalhours);
//     // const al = data.estimates[0].servicedetails.data.totalhours
//     // const callink = "rapidclean/" + al + "-hrs"
//     //console.log(appointment_length)
//
//
//     return (
//         <div className="Calendar">
//             <Cal
//                 calLink={callink}
//                 styles={{
//                     height: "100vh",
//                     width: "100%",
//                     color: "red"
//                 }}
//                 config={{
//                     name: user.userDetails.firstname + " " + user.userDetails.lastname,
//                     email: user.userDetails.email,
//                     phone: user.userDetails.phone,
//                     location: JSON.stringify({
//                         value: "attendeeInPerson",
//                         // It can be any string that defines an address where the meeting would occur
//                         optionValue: location.locationdetails.streetaddress + " " + location.locationdetails.city + " " + location.locationdetails.state + " " + location.locationdetails.zip,
//                     }),
//                     notes: "Hi, here is your is your estimate ID, " + estimate.estimateId + " , please use this again in the future to rebook this location instantly. -RapidClean"
//                 }}
//             />
//         </div>
//     );
// };
//
// export default Calendar;

import React, {useContext} from 'react';
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';
import Cal from "@calcom/embed-react";

const Calendar = () => {
    const { estimate, editEstimateById } = useContext(EstimateContext);
    const { user } = useContext(EstimateContext);
    const { location } = useContext(EstimateContext);

    // Safely access totalhours
    const totalHours = estimate?.servicedetails?.data?.totalhours;
    const callink = totalHours ? `rapidclean/${totalHours}-hrs` : "rapidclean/default-link";

    // Safely access user and location details
    const userFirstName = user?.userDetails?.firstname || "Guest";
    const userLastName = user?.userDetails?.lastname || "";
    const userEmail = user?.userDetails?.email || "guest@example.com";
    const userPhone = user?.userDetails?.phone || "123-456-7890";
    const locationAddress = location?.locationdetails
        ? `${location.locationdetails.streetaddress}, ${location.locationdetails.city}, ${location.locationdetails.state} ${location.locationdetails.zip}`
        : "Unknown Location";

    console.log('[Calendar] calLink: ', callink);
    console.log('[Calendar] userFirstName: ', userFirstName);

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
                    name: `${userFirstName} ${userLastName}`,
                    email: userEmail,
                    phone: userPhone,
                    location: JSON.stringify({
                        value: "attendeeInPerson",
                        optionValue: locationAddress
                    }),
                    notes: `Hi, here is your estimate ID, ${estimate?.estimateId}, please use this again in the future to rebook this location instantly. -RapidClean`
                }}
            />
        </div>
    );
};

export default Calendar;
