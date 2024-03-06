import React, { useState } from "react"
import axios from "axios";

const Bikebidding = (props)=>{
const[value, setvalue] = useState('5000')
const [email, setEmail] = useState('')
const [isConfirmed, setisconfirmed] = useState(false)

const handlesubmit = (e)=>{
    e.preventDefault()
    axios.post('https://e-auction.onrender.com/bikebid/1',({email})) 
    .then(result =>{
        console.log(result)
        if(result.data.Status === "confirmed"){
            setisconfirmed(true);
            console.log("good")
        }
        else{
            console.log("not good")
        }
       })
    .catch(err=> console.log(err))
}

const handleIncrease=()=>{
    setvalue(prevalue => parseInt(prevalue) + 500);
    axios.post('https://e-auction.onrender.com/bikebid/1/bid',({email}))
    .then(result =>{
        console.log(result)
        if(result.data.Status === "bid successfully"){
            console.log("bidded")
        }
        else{
            console.log("not bid")
        }
       })

}
const handleEmailChange = (e) =>{
    console.log(e.target.value)
    setEmail(e.target.value)
}
    return(
        <>
    <img className="bid-image" src={props.img}/>
    <div className="bid-card">
    <div className="bid-name">{props.name}</div>
    <div className="bid-desc">{props.desc}</div>
    <div className="bid-price">Starting Price: &#8377;{props.price}</div>
    <input type="text" value={email} onChange={handleEmailChange}/>
    <button onClick={handlesubmit}>Confirm </button>
    <div id="increasing-price">{value}</div>
    <button className="bid-increase" disabled={!isConfirmed} onClick={handleIncrease} >+500</button>
    </div>
    </>
    )
}

export default Bikebidding