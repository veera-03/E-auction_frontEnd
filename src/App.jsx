import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import{RouterProvider, createBrowserRouter } from "react-router-dom"
import  axios from "axios"
import Login from "./components/Login"
import SignIn from "./components/SignIn"
import Home from "./components/Home"
import Header from "./components/Header"
import Bikes from "./components/Bikes"
import Bikes2 from "./components/Bikes2"
import Cars from "./components/Cars"
import Cars2 from "./components/Cars2"
import Bikebidding from "./components/Bikebidding"
import Bidded_details from "./components/Bidded_details"
import Bike_add from "./components/Bike_add"


const App = () =>{
  
  const [live_bikeDetails, setlive_bikeDetails]= useState([
   
  ])

  useEffect(() =>{
    axios.get('https://e-auction.onrender.com/getlivebikedetails')
    .then(res => {
      setlive_bikeDetails(res.data)
    })
    .catch(err => console.log(err))
  
  }, [])

 const addBike_details =(Bike_img, Bike_name,Bike_desc,Bike_price) =>{
  console.log(Bike_desc)
  const nextId = (live_bikeDetails[live_bikeDetails.length-1]?.id || 0)+1
  setlive_bikeDetails([...live_bikeDetails, { id:nextId, img:Bike_img, name:Bike_name, desc: Bike_desc, Price: Bike_price}])  
 axios.post(`https://e-auction.onrender.com/addbikedetails`,({id:nextId,img:Bike_img, name:Bike_name, desc: Bike_desc, Price: Bike_price}))   
}

  

 const upcoming_bikeDetails=[
  {
    img  :"https://www.jansatta.com/wp-content/uploads/2022/06/Second-hand-Bajaj-Platina.jpg",
    name :"Bajaj Platina",
    desc : "2015 - 52,000 km",
    price:"80,000",
    date : "01.03.2024"
},
{
    img  :"https://bd.gaadicdn.com/upload/usedbikesimages/2020/08/5f338b549ec2c.jpg?tr=w-300",
    name :"Tvs XL Heavy Duty",
    desc : "2014 - 3,000 km",
    price:"23,000",
    date : "01.03.2024"
    
},{
    img  :"https://s3-ap-southeast-1.amazonaws.com/apnacomplexdocs/user_content/ramky-towers-association/classifieds/730706e9dbb0d1e69b6c8f290cc48854___DSC00361.JPG",
    name :"Hero Pleasure",
    desc : "2019 - 19,000 km",
    price:"55,000",
    date : "01.03.2024"

}]


 const live_carDetails=[
  {
    img  :"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201511/thar_story_647_112215042013.jpg?VersionId=qf53KhZ3yh8i2C0gsz4wEgT94f8XjovJ",
    name :"Mahindra Thar",
    desc : "2022 - 7029.0 km",
    price:"12,80,000"
},
{
    img  :"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20180514020834_Maruti-Swift-front-static.jpg&w=700&q=90&c=1",
    name :"Maruti Suzuki Swift",
    desc : "2012 - 82,795 km",
    price:"5,60,000"
    
},{
    img  :"https://5.imimg.com/data5/SELLER/Default/2023/1/PC/MW/TT/75499445/maruti-baleno-second-hand.jpeg",
    name :"Maruti Suzuki Baleno",
    desc : "2000 - 109.668 km",
    price:"89,000"
}]
const upcoming_carDetails=[
  {
    img  :"https://5.imimg.com/data5/QI/MG/GLADMIN-3321790/mahindra-verito.jpg",
    name :"Mahindra Verito",
    desc : "2013 - 120,000 km",
    price:"2,70,000",
    date : "01.03.2024"
},
{
    img  :"https://5.imimg.com/data5/SELLER/Default/2022/2/XY/GQ/BK/145346095/maruti-suzuki-alto-800-used-500x500.jpg",
    name :"Alto",
    desc : "2011 - 38,000 km",
    price:"1,60,000",
    date : "01.03.2024"
    
},{
    img  :"https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/WHC3RB3_f10c9cdaedc04f9b934402dc96788bf7_1_36535387.jpg?q=80",
    name :"Ford Ikon",
    desc : "2009 - 102,000 km",
    price:"1,20,000",
    date : "01.03.2024"
}]

const livebid_bikes=[
  {
    id : 1,
    img  :"https://s3.ap-south-1.amazonaws.com/scredr-userfiles-mobilehub-348411523/CC/1664694701229.jpg",
    name :"Yamaha r15 v3.0",
    desc : "2021 - 19,800 km",
    price:"80,000",
},
{
  id : 2,
  img  :"https://bikeadvice.in/wp-content/uploads/2011/03/Suzuki-Max-100R-Review-by-Thirumal-Alagana-Bikeadvice-2.jpg",
  name :"Suzuki max 100R",
  desc : "2006 - 50,000 km",
  price:"50,000",
  
},
{
  id : 3,
  img  :"https://s3.ap-south-1.amazonaws.com/fdpayments/1661320398815-blob",
  name :"Royal Enfield 350",
  desc : "2017 - 53,000 km",
  price:"1,20,000",
  
},
]
const [Isadmin, setIsadmin] = useState(false)
useEffect(() => {
  axios.get(`https://e-auction.onrender.com/loginuser`, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
      .then((result) => {
          console.log(result.data)
         if ( result.data ==='vimal@gmail.com') {
              setIsadmin(true);
          } else {
              console.log("Not admin");
          }
      })
      .catch((error) => {
         console.log(error)
      });
}, []);


const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/signin",
      element:<SignIn/>
    },

    {
      path:"/home",
      element:<Home/> 
    },

    {
      path:"/biddeddetails",
      element: <Bidded_details/>
    },

    {
      path:"/bikes",
      element:
      <>
      <Header/>
      <div className="admin_layout">
      <div></div> {/* USED FOR ALIGNMENT*/}
      <h1>Live Auctions </h1>
      <div>
      <button className="Adding_button " hidden={!Isadmin} > <Link to="/bikeadding"> Add Bike </Link></button>
      </div>
      </div>
      <div className="bike-cards">
      {
      live_bikeDetails.map((items)=>{
      return(
        <>
        <Bikes key={items} {...items}/>
        </>
      )
      })}
      </div>
      
      <h1>Upcoming Auctions</h1>
      <div className="bike-cards">
      {upcoming_bikeDetails.map((items)=>{
      return(
      <>
      <Bikes2 key={items} {...items}/>
      </>
    )
    })}
    </div>
    </>
    },

    {
      path:"/bikeadding",
      element: <Bike_add addBike_details = {addBike_details}/>
    },
    
  
    {
          path:"/cars",
          element:
          <>
          <Header/>
          <h1>Live Auctions</h1>
    <div className="car-cards">
    {live_carDetails.map((items)=>{
    return(
      <>
      <Cars key={items} {...items}/>
      </>
    )
    })}
    </div>
    <h1>Upcoming Auctions</h1>
    <div className="car-cards">
    {upcoming_carDetails.map((items)=>{
    return(
      <>
      <Cars2 key={items} {...items}/>
      </>
    )
    })}
    </div>
    </>
    },


...livebid_bikes.map((bid) =>({
  path:`/bikebid/${bid.id}`,
  element:
  <>
  <h1>Welcome to Auctions</h1>
  <Bikebidding {...bid}/>
</>
})),

 ])


    return(
    <>
  <RouterProvider router={router}/>
  
    </>
  
  )}

export default App
       
    
