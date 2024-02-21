import {Link} from "react-router-dom"
const Header = () => {
  return(
  <>
  <div className='navbar1'>
    <div >GearUp</div>
  <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/bikes">Bikes</Link></li>
    <li><Link to="/cars">Cars</Link></li>
  </ul>
  </div>
  </>
  )
}

export default Header