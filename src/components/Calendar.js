import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useContext } from "react";
import EstimateContext from '../context/estimate';

export default function Calendar({onBookingComplete}) {
    const { estimate, user, location, createBooking} = useContext(EstimateContext);

    const estimateId = estimate.estimateId;

    //Dynamically generate the calLink based on totalHours
    const totalHours = estimate?.servicedetails?.data?.totalhours;
    // UNCOMMENT for PROD
    //const callink = totalHours ? `rapidclean/${totalHours}-hrs` : `rapidclean/4-hrs`;
    // comment for LOCAL DEV
    const callink = `rapidclean/2-hrs-test`;


    // console.log('[Calendar] estimate: ', estimate);
    // console.log('[Calendar] user: ', user);
    // console.log('[Calendar] location: ', location);
    // console.log('[Calendar] estimateId: ', estimateId);
    // console.log('[Calendar] callink ', callink);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({
                namespace: "first-one",
            });
            cal("on", {
                action: "bookingSuccessfulV2",
                callback: (e) => {

                    const bookingId = e.detail.data.uid;
                    const bookingData = e.detail.data;
                    const booking = {
                        bookingId: bookingId,
                        bookingDetails: {
                            estimateId: estimateId,
                            userId: user.userId,
                            locationId: location.locationId,
                            name: user.userDetails.firstname + " " + user.userDetails.lastname,
                            email: user.userDetails.email,
                            phone: user.userDetails.phone,
                            location: `${location.locationdetails.streetaddress}, ${location.locationdetails.city}, ${location.locationdetails.state} ${location.locationdetails.zip}`,
                            start: bookingData.startTime,
                            end: bookingData.endTime,
                            duration:  estimate.servicedetails.data.totalhours,
                            status: bookingData.status,
                            eventTitle: bookingData.eventTitle,
                    }}
                    // console.log('[Calendar] bookingData: ', bookingData);
                    // console.log('[Calendar] bookingId: ', bookingId);
                    // console.log('[Calendar] booking: ', booking);
                    createBooking(booking);
                    onBookingComplete(bookingId);
                    //alert("Booking Successful V2 event");

                },
            });
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#3366cc"} , height: "100vh"},
                hideEventTypeDetails: true,
                layout: "month_view",
            });
        })();
    }, []);
    return (
        <Cal
            namespace="first-one"
            calLink={callink}
            config={{
                layout: "month_view",
                theme: "light",
                name: `${user.userDetails.firstname} ${user.userDetails.lastname}`,
                email: user.userDetails.email,
                phone: user.userDetails.phone,
                location: JSON.stringify({
                    value: "attendeeInPerson",
                    // It can be any string that defines an address where the meeting would occur
                    optionValue: location.locationdetails.streetaddress + " " + location.locationdetails.city + " " + location.locationdetails.state + " " + location.locationdetails.zip,
                }),
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
