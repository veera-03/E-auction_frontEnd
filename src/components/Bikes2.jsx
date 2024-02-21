const Bikes2=(props)=>{

    return(
    <>
    <div className="bike2-card">
    <img className="bike2-image" src={props.img}/>
    <div className="bike2-name">{props.name}</div>
    <div className="bike2-desc">{props.desc}</div>
    <div className="bike2-price">Starting Price: &#8377;{props.price}</div>
    <div className="bike2-date">{props.date}</div>
    <button className="bike2-buy">Remind me</button>
    </div>
    </>
    )}


export default Bikes2