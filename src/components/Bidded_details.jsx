import axios from "axios";
import { useState } from "react";

const Bidded_details =(props) =>{
const [bidded_history, setbidded_history] = useState('cvgjgjvj')

    axios.get(`https://e-auction.onrender.com/bikebidded_details`)
    .then((result) => {
        console.log(result.data)
        setbidded_history(result.data)
    })
    .catch((error) => {
      console.error("Error fetching amount:", error);
    });

    return(
        <>
        <h1>Thank you for your participations</h1>
        <h3>Details: {bidded_history}</h3>
        </>
    )
}

export default Bidded_details