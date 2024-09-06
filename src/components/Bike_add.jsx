import { useState } from "react"

const Bike_add =(props)=>{
    const {addBike_details} = props
const [Bike_img, setBike_img]  = useState('')
const [Bike_name, setBike_name]  = useState('')
const [Bike_desc, setBike_desc]  = useState('')
const [Bike_price, setBike_price]  = useState()
const [errors, setErrors] = useState({})

    const handlesubmit = (e) =>{
        e.preventDefault()
        let err ={}
        if(!Bike_img){
            err.img = 'Enter Bike image url'
        }
        if(!Bike_name){
            err.name ='Enter Bike name '
        }
        if(!Bike_desc){
            err.desc = 'Enter Bike description'
        }
        if(!Bike_price){
            err.price = 'Enter Bike price'
        }
        if(Object.keys(err).length>0){
            setErrors({...err})
            return
        }
        addBike_details(Bike_img,Bike_name,Bike_desc,Bike_price)
        setBike_img('')
        setBike_name('')
        setBike_desc('')
        setBike_price('')
        
       
        
    }
   
    const handleimgchange = (e) => {
        setBike_img(e.target.value)
        setErrors({...errors,img:''})
    }

    const handlenamechange = (e) => {
        setBike_name(e.target.value)
        setErrors({...errors,name:''})
    }
    const handledescchange = (e) => {
        setBike_desc(e.target.value)
        setErrors({...errors,desc:''})
    }
    const handlepricechange = (e) => {
        setBike_price(e.target.value)
        setErrors({...errors,price:''})
    }
    return(
        <>
         <div className="Bikeadd_css">
        <form onSubmit={handlesubmit}>
        
         <div className="BikeAdd_Label">  
         <label htmlFor="">Bike_img : </label>
        <input type="text" value={Bike_img} onChange={handleimgchange}/><br />
        {errors.img ? <div className="error">{errors.img}</div>:null}
        </div>

        <div className="BikeAdd_Label">
        <label htmlFor="">Bike_name : </label>
        <input type="text" value={Bike_name} onChange={handlenamechange}/><br />
        {errors.name ? <div className="error">{errors.name}</div>:null}
        </div>
       
        <div className="BikeAdd_Label">
       <label htmlFor="">Bike_desc: </label>
        <input type="text" value={Bike_desc} onChange={handledescchange}/><br />
        {errors.desc ? <div className="error">{errors.desc}</div>:null}
        </div>
       
        <div className="BikeAdd_Label">
        <label htmlFor="">Bike_price : </label>
        <input type="number" value={Bike_price}  onChange={handlepricechange}/><br />
        {errors.price ? <div className="error">{errors.price}</div>:null}
        </div>
        <div className="BikeAdd_Label">
        <button>Add</button>
       </div>
        </form>
        </div>
        </>
    )
}
export default Bike_add