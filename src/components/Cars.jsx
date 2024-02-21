const Cars=(props)=>{

    return(
    <>
    <div className="car-card">
    <img className="car-image" src={props.img}/>
    <div class="car-name">{props.name}</div>
    <dir class="car-desc">{props.desc}</dir>
    <div className="car-price">Starting Price: &#8377;{props.price}</div>
    <button className="car-buy">Bid</button>
    </div>
    </>
    )}

export default Cars