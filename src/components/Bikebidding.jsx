import React, { useState, useEffect } from "react";
import axios from "axios";

const Bikebidding = (props) => {
  const [amount, setAmount] = useState();
  const [lastPerson, setLastPerson] = useState("");
  const [email, setEmail] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmed, setConfirmed] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    const fetchPrice = () => {
      axios
        .get(`https://e-auction.onrender.com/bikebid/${props.id}/bid`)
        .then((result) => {
          setAmount(result.data[0]);
        })
        .catch((error) => {
          console.error("Error fetching amount:", error);
        });
    };

    const fetchLastPerson = () => {
      axios
        .get(`https://e-auction.onrender.com/bikebid/${props.id}/bidresult`)
        .then((result) => {
          setLastPerson(result.data);
        })
        .catch((error) => {
          console.error("Error fetching last person:", error);
        });
    };

    fetchPrice();
    fetchLastPerson();

    const priceInterval = setInterval(() => {
      fetchPrice();
      fetchLastPerson();
    }, 5000); // Fetch price every 5 seconds

    return () => clearInterval(priceInterval);
  }, []);


  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post(`https://e-auction.onrender.com/bikebid/user_confirm`, { email })
      .then(result => {
        console.log(result);
        if (result.data.Status === "confirmed") {
          setIsConfirmed(true);
          console.log("good");
        } else {
          console.log("not good");
        }
      })
      .catch(err => console.log(err));
  };
  

  const handleIncrease = () => {
   const newAmount = parseInt(amount) + 500;
   setAmount(newAmount)
   let bikename = `${props.name}`;
    axios.post(`https://e-auction.onrender.com/bikebid/${props.id}/bid`, ({ email, newAmount, bikename }))
    .then(result => {
        console.log(result)
        if(result.data.Status === "bid successfully"){
            console.log("bidded")
            setConfirmed(false)
        }
        else{
            console.log("not bid")
        }
    })
}


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the current time
      const currentTime = new Date();

      // Set the target time to 5:00 PM
      const targetTime = new Date(currentTime);
      targetTime.setHours(9); // 5 o'clock
      targetTime.setMinutes(0);
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

  return (
    <>
      <img className="bid-image" src={props.img} alt="bike" />
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
              <input type="text" disabled={!confirmed} value={email} onChange={handleEmailChange} />
              <button onClick={handlesubmit}>Confirm</button>
              <div id="increasing-price">Amount:{amount}</div>
              <button className="bid-increase" disabled={!isConfirmed} onClick={handleIncrease}>+500</button>

              <h1>Now start your bid!</h1>
            </>
          )}
        </div>
        <div>Last updated person : {lastPerson}</div>
      </div>
    </>
  );
};

export default Bikebidding;
