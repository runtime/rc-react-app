import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';

const EstimateDetail = () => {

   const [showEdit, setShowEdit] = useState(false);
   const { estimate } = useContext(EstimateContext);


   console.log('[EstimateDetail] estimate: ' + estimate);

   console.log('[EstimateDetail] estimate.hasOwnProperty estimate: ' + estimate.hasOwnProperty("cost"));

   let content = <div><p>Loading...</p></div>;
    if (!estimate.hasOwnProperty("cost")) {
       content = <div>
           <p>no estimate yet</p>
           <p>waiting...</p>
       </div>;
    } else {
        content = <div>
            <p>Your current Estimate is <b>${estimate.cost.total} </b> Click Book to Book Now</p>
            <button onClick={() => setShowEdit(!showEdit)}>Book It!</button>
            <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        </div>

    }

    return (
        <div>
            <h1>Estimate Details</h1>
            {content}
        </div>
    )
}


export default EstimateDetail;