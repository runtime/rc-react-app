import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';

const EstimateDetail = () => {

   const [showEdit, setShowEdit] = useState(false);
   const { estimate } = useContext(EstimateContext);


   console.log('[EstimateDetail] estimate: ' + estimate);

   console.log('[EstimateDetail] estimate.hasOwnProperty servicedetails: ' + estimate.hasOwnProperty("servicedetails"));

   let content = <div><p>Loading...</p></div>;
    if (!estimate.hasOwnProperty("servicedetails")) {
       content = <div>
           <p>no details about your service yet</p>
           <p>waiting...</p>
       </div>;
    } else {
        content = <div>
            <p>Your current Estimate is <b>${estimate.servicedetails.cost.total} </b> Click Book to Book Now</p>
            <button onClick={() => setShowEdit(!showEdit)}>BOOK NOW</button>
            <button onClick={() => setShowEdit(!showEdit)}>EDIT</button>
        </div>

    }

    return (
        <div>
            <h1>Service Details</h1>
            {content}
        </div>
    )
}


export default EstimateDetail;