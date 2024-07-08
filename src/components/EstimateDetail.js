import React, {useContext, useState} from 'react'
import '../styles/Estimates.css';
import EstimateContext from '../context/estimate';

const EstimateDetail = () => {

   const [showEdit, setShowEdit] = useState(false);
   const { estimate } = useContext(EstimateContext);


   console.log('[EstimateDetail] estimate: ' + estimate);

    console.log('[EstimateDetail] estimate.hasOwnProperty total: ' + estimate.hasOwnProperty("total"));

    return (
        <div>
            <h1>Estimate Details</h1>

            {/*<p>Your current Estimate is {estimate.obj.total} Click Book to Book Now</p>*/}
            <button onClick={() => setShowEdit(!showEdit)}>Book It!</button>
            <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        </div>
    )
}


export default EstimateDetail;