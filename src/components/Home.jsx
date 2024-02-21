import {Link} from "react-router-dom"

const Home=()=>{
    return(
        <div className="home">
            <h1>AutoAuction</h1>
            <h2>100% Commission Free</h2>
            <h3>Start Bidding</h3>
            <Link to="/bikes">Bikes</Link><br />
            <Link to="/cars">Cars</Link>
        </div>
    )
}

export default Home