// import React, { useContext, useEffect, useState } from 'react';
// import '../styles/Estimates.css';
// import EstimateContext from '../context/estimate';
// import Cal, { getCalApi } from "@calcom/embed-react";
//
//     const Calendar = ({  }) => {
//         const { estimate, updateBookingWithEstimateId } = useContext(EstimateContext);
//         const { user } = useContext(EstimateContext);
//         const { location } = useContext(EstimateContext);
//         const [iframeReady, setIframeReady] = useState(false);
//
//         // Dynamically generate the calLink based on totalHours
//         const totalHours = estimate?.servicedetails?.data?.totalhours;
//         const callink = totalHours ? `rapidclean/${totalHours}-hrs` : `rapidclean/4-hrs`;
//         const ns =  totalHours ? `${totalHours}-hrs` : `4-hrs`;
//         console.log('[Calendar] callink ', callink);
//
//         const onBookingConfirmed = (e) => {
//             console.log('[Calendar] onBookingConfirmed e.detail: ', e.detail);
//             //updateBookingWithEstimateId(estimate.estimateId);
//         };
//
//     useEffect(() => {
//         (async function () {
//             console.log('[Calendar] useEffect')
//             const cal = await getCalApi({
//                 // namespace: {ns},
//                 namespace: "2-hrs",
//                 embedLibUrl: "http://localhost:3000/embed/embed.js",
//             });
//             cal("ui", {
//                 theme: "dark",
//                 styles: { branding: { brandColor: "#b5da91" }, height: "100vh"},
//                 hideEventTypeDetails: false,
//                 layout: "month_view",
//             });
//             // cal("on", {
//             //     action: "bookingSuccessful", // Listen to booking completed events
//             //     callback: (e) => {
//             //         const { data } = e.detail;
//             //         const bookingId = data.booking.id; // Correct scope to access booking ID
//             //
//             //         console.log("[Calendar] Booking completed. Booking ID: ", bookingId);
//             //         //setIframeReady(true);
//             //         // Notify UserDetail component about the booking completion
//             //         //onBookingComplete(bookingId);
//             //     }
//             // });
//         })();
//     }, [iframeReady]);
//     return (
//         <Cal
//             id="book"
//             calLink= {callink}
//             style={{ width: "100%", height: "100%", overflow: "scroll" }}
//             // config={{
//             //     name: `${user.userDetails.firstname} ${user.userDetails.lastname}`,
//             //     email: user.userDetails.email,
//             //     phone: user.userDetails.phone,
//             //     location: `${location.locationdetails.streetaddress}, ${location.locationdetails.city}, ${location.locationdetails.state} ${location.locationdetails.zip}`,
//             //     notes: `Estimate ID: ${estimate.estimateId}. Please use this for future reference.`,
//             // }}
//             calOrigin="https://app.cal.com"
//             embedJsUrl="https://app.cal.com/embed/embed.js"
//         />
//     );
// }
//
// export default Calendar;

//working sample code with event listener
// import Cal, { getCalApi } from "@calcom/embed-react";
// import { useEffect } from "react";
// export default function MyApp() {
//     useEffect(() => {
//         (async function () {
//             const cal = await getCalApi({
//                 namespace: "first-one",
//             });
//             cal("on", {
//                 action: "bookingSuccessfulV2",
//                 callback: (e) => {
//                     console.log(e.detail.data);
//                     alert("Booking Successful V2 event");
//                 },
//             });
//             cal("ui", {
//                 theme: "dark",
//                 styles: { branding: { brandColor: "#000000" } },
//                 hideEventTypeDetails: true,
//                 layout: "month_view",
//             });
//         })();
//     }, []);
//     return (
//         <Cal
//             namespace="first-one"
//             calLink="rick"
//             style={{ width: "100%", height: "100%", overflow: "scroll" }}
//             config={{ layout: "month_view", theme: "dark" }}
//             calOrigin="https://app.cal.com"
//             embedJsUrl="https://app.cal.com/embed/embed.js"
//         />
//     );
// }

// changed callink
// added const bookingId
// added context method to send estimate and booking id
// export default function Calendar() {
//     const { estimate } = useContext(EstimateContext);
//     const { user } = useContext(EstimateContext);
//     const { location } = useContext(EstimateContext);
//     const { createBooking } = useContext(EstimateContext);
//     console.log('[Calendar] estimate: ', estimate);
//     console.log('[Calendar] user: ', user);
//     console.log('[Calendar] location: ', location);
//     const estimateId = estimate.estimateId;
//
//     useEffect(() => {
//         (async function () {
//             const cal = await getCalApi({
//                 namespace: "first-one",
//             });
//             cal("on", {
//                 action: "bookingSuccessfulV2",
//                 callback: (e) => {
//                     console.log(e.detail.data);
//                     const bookingId = e.detail.data.uid;
//                     console.log('[Calendar] bookingId: ', bookingId);
//                     createBooking(estimateId, bookingId);
//                     alert("Booking Successful V2 event");
//
//                 },
//             });
//             cal("ui", {
//                 theme: "dark",
//                 styles: { branding: { brandColor: "#18f31e" } },
//                 hideEventTypeDetails: true,
//                 layout: "month_view",
//             });
//         })();
//     }, []);
//     return (
//         <Cal
//             namespace="first-one"
//             calLink="rapidclean/2-hrs"
//             style={{ width: "100%", height: "100%", overflow: "scroll" }}
//             config={{ layout: "month_view", theme: "dark" }}
//             calOrigin="https://app.cal.com"
//             embedJsUrl="https://app.cal.com/embed/embed.js"
//         />
//     );
// }


import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useContext } from "react";
import EstimateContext from '../context/estimate';

export default function Calendar() {
    const { estimate } = useContext(EstimateContext);
    const { user } = useContext(EstimateContext);
    const { location } = useContext(EstimateContext);
    const { createBooking } = useContext(EstimateContext);
    const estimateId = estimate.estimateId;

    //Dynamically generate the calLink based on totalHours
    const totalHours = estimate?.servicedetails?.data?.totalhours;
    const callink = totalHours ? `rapidclean/${totalHours}-hrs` : `rapidclean/4-hrs`;


    console.log('[Calendar] estimate: ', estimate);
    console.log('[Calendar] user: ', user);
    console.log('[Calendar] location: ', location);
    console.log('[Calendar] estimateId: ', estimateId);
    console.log('[Calendar] callink ', callink);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({
                namespace: "first-one",
            });
            cal("on", {
                action: "bookingSuccessfulV2",
                callback: (e) => {
                    console.log(e.detail.data);
                    const bookingId = e.detail.data.uid;
                    console.log('[Calendar] bookingId: ', bookingId);
                    createBooking(estimateId, bookingId);
                    alert("Booking Successful V2 event");

                },
            });
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#86b95a" } },
                hideEventTypeDetails: true,
                layout: "month_view",
            });
        })();
    }, []);
    return (
        <Cal
            namespace="first-one"
            calLink={callink}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{
                layout: "month_view",
                theme: "light",
                name: `${user.userDetails.firstname} ${user.userDetails.lastname}`,
                email: user.userDetails.email,
                phone: user.userDetails.phone,
                location: `${location.locationdetails.streetaddress}, ${location.locationdetails.city}, ${location.locationdetails.state} ${location.locationdetails.zip}`,
                notes: `Hey ${user.userDetails.firstname}, Congratulations on booking a ${estimate.servicedetails.typeofservice} with RapidClean.
                        We value your privacy, so we have created an anonymous account and booking for you.
                        Your anonymous user name is ${estimate.servicedetails.userID}.
                        For your convenience and ours please use this Estimate ID: ${estimate.estimateId} for future appointments.
                        
                        Please have $ ${estimate.servicedetails.cost.total} cash ready on arrival.
                        
                        Thank you for choosing RapidClean, we look forward to working with you. :)
                        `,

            }}
            calOrigin="https://app.cal.com"
            embedJsUrl="https://app.cal.com/embed/embed.js"
        />
    );
}
