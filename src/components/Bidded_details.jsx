import axios from "axios";
import { useState, useEffect } from "react";

const Bidded_details = () => {
    const [bidDetails, setBidDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://e-auction.onrender.com/bikebidded_details`, { withCredentials: true })
            .then((result) => {
                console.log(result)
                if (typeof result.data === 'string') {
                    setError(result.data);  // This handles the "Login to view bidding history" case
                } 
             else  if (result.data && result.data.length > 0) {
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

    return (
        <>
            <h1>Thank you for your participation</h1>
            <div className="bid_history_container">
                <h3>Email: {bidDetails.email}</h3>
                <h3>Last bidded amount: {bidDetails.newAmount}</h3>
            </div>
        </>
    );
};

export default Bidded_details;
