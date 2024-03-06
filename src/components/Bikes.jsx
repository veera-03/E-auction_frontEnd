import { useNavigate } from "react-router-dom"
import React from "react"


const Bikes=(props)=>{
    const navigate = useNavigate()
const handleClick=()=>{
   if(props.id  == 1){
    console.log('first')
    navigate(`/bikebid/${props.id}`)
   }
   if(props.id  == 2){
    console.log('second')
    navigate(`/bikebid/${props.id}`)
   }
   if(props.id  == 3){
    console.log('third')
    navigate(`/bikebid/${props.id}`)
   }
}

    return(
    <>
    <div className="bike-card">
    <img className="bike-image" src={props.img}/>
    <div className="bike-name">{props.name}</div>
    <div className="bike-desc">{props.desc}</div>
    <div className="bike-price">Starting Price: &#8377;{props.price}</div>
    <button className={props.id} onClick={handleClick}>view details</button>
    </div>
    </>
    )}


export default Bikes