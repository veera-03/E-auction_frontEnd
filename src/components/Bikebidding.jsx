import React, { useState, useEffect } from "react"
import axios from "axios";

const Bikebidding = (props)=>{
const[value, setvalue] = useState('5000')
const [email, setEmail] = useState('')
const [isConfirmed, setisconfirmed] = useState(false)
const [lastperson,setlastperson] = useState('')
const [Confirmed, setconfirmed] = useState(true)
const [timeRemaining, setTimeRemaining] = useState(null);

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
            setconfirmed(false)
            axios.get('https://e-auction.onrender.com/bikebid/1/bidresult')
            .then(result =>{
                console.log(result.data)
                setlastperson(result.data)
            })
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


useEffect(() => {
    const interval = setInterval(() => {
      // Get the current time
      const currentTime = new Date();

      // Set the target time to 5:00 PM
      const targetTime = new Date(currentTime);
      targetTime.setHours(14); // 5 o'clock
      targetTime.setMinutes(56);
      targetTime.setSeconds(0);

      // If the current time is before 5 o'clock
      if (currentTime < targetTime) {
        // Calculate the time remaining in milliseconds
        const timeDifference = targetTime.getTime() - currentTime.getTime();
        setTimeRemaining(timeDifference);
      } else {
        // If it's already past 5 o'clock, set the time remaining to null
        setTimeRemaining(null);
      }
    }, 1000); // Update every second

    // Clean up the interval
    return () => clearInterval(interval);
  }, []);

  // Convert milliseconds to hours, minutes, and seconds
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);
    return(
        <>
    <img className="bid-image" src={props.img}/>
    <div className="bid-card">
    <div className="bid-name">{props.name}</div>
    <div className="bid-desc">{props.desc}</div>
    <div className="bid-price">Starting Price: &#8377;{props.price}</div>
   

   <div>
      {timeRemaining !== null ? (
        <div>
          <h1>Timer</h1>
          <p>{hours} hours, {minutes} minutes, {seconds} seconds left to start bid</p>
        </div>
      ) : (
        <>
        <input type="text"disabled={!Confirmed} value={email} onChange={handleEmailChange}/>
        <button onClick={handlesubmit} >Confirm </button>
        <div id="increasing-price">{value}</div>
        <button className="bid-increase" disabled={!isConfirmed} onClick={handleIncrease} >+500</button>
       <div >Last updated person : {lastperson}</div>
        <h1>Now start your bid!</h1>
        </>
      )}
    </div>
    </div>
    </>
    )
}

export default Bikebidding