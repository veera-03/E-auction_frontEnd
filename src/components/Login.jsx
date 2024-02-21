import { useNavigate } from "react-router-dom";
import { useState } from "react"

const Login = () =>{

    const [name, setName] = useState('')
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handlelogin =(e)=>{
        e.preventDefault()
        let err ={}
        if(name == 0){ 
            err.name = '*Enter Name'
           }
        if(!password){
            err.password = '*Enter valid password'
        } 
        if(Object.keys(err).length>0){
            setErrors({...err})
            return
        }
        axios.post('https://e-auction.onrender.com/signin')
        navigate("/home");
    }

    const handleNameChange = (e) =>{
        console.log(e.target.value)
        setName(e.target.value)
        setErrors({...errors,name:''})
    }
    const handlePasswordChange = (e) =>{
            console.log(e.target.value)
            setPassword(e.target.value)
            setErrors({...errors,password:''})
    }
    
    
    return(
        
        <>
         <div className="login-content">
        <h2 className="heading">Log In</h2>
        <div >
                <label className="nameinput"  htmlFor="">Name</label>
                <div>:&nbsp;
                <input type="text" value={name} onChange={handleNameChange}/></div></div>
                {errors.name ? <div className="errorlogin">{errors.name}</div>:null}
        <div >
                <label className="nameinput"  htmlFor="">Password</label>
                <div>:&nbsp;
                <input type="text" value={password} onChange={handlePasswordChange}/></div></div>
                {errors.password ? <div className="errorlogin">{errors.password}</div>:null}
                <button className="login-btn" type="submit" onClick={handlelogin}>Log in</button>
                </div>
        </>
    )
}


export default Login