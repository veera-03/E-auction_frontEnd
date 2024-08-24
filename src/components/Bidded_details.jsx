import axios from "axios";
import { useState, useEffect } from "react";

const Bidded_details = () => {
    const [bidDetails, setBidDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://e-auction.onrender.com/bikebidded_details`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((result) => {
                console.log(result.data)
               if ( result.data) {
                    setBidDetails(result.data);
                } else {
                    setError("No bidding history found.");
                }
            })
            .catch((error) => {
                console.error("Error fetching bid details:", error);
                setError("An error occurred while fetching bidding details.");
            });
    }, []);

    if (error) {
        return (
            <>
                <h1>{error}</h1>
            </>
        );
    }
    if (!bidDetails) {
        return <h1>Loading...</h1>;
    }
return(
    <>
    <h1>Thanks for particiapting in Bidding</h1>
    {bidDetails.map((details)=>(
       <div className="bid_history_layout">
            <div className="bid_history_container">
                <h3>Email: {details.email}</h3>
                <h3>{details.bikename}</h3>
                <h3>Last bidded amount: {details.newAmount}</h3>
          
            </div>
            </div>
        )
    )}
</>
)
};

export default Bidded_details;
