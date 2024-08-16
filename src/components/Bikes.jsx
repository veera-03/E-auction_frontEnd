import { useNavigate } from "react-router-dom"
import React from "react"


const Bikes=(props)=>{
    const navigate = useNavigate()
const handleClick=()=>{
    navigate(`/bikebid/${props.id}`)
}

    return(
    <>
    <div className="bike-card">
    <img className="bike-image" src={props.img}/>
    <div className="bike-name">{props.name}</div>
    <div className="bike-desc">{props.desc}</div>
    <div className="bike-price">Starting Price: &#8377;{props.price}</div>
    <button onClick={handleClick}>view details</button>
    </div>
    </>
    )}


export default Bikes