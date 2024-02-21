const Cars2=(props)=>{

    return(
    <>
    <div className="car2-card">
    <img className="car2-image" src={props.img}/>
    <div className="car2-name">{props.name}</div>
    <div className="car2-desc">{props.desc}</div>
    <div className="car2-price">Starting Price: &#8377;{props.price}</div>
    <div className="car2-date">{props.date}</div>
    <button className="car2-buy">Remind me</button>
    </div>
    </>
    )}


export default Cars2