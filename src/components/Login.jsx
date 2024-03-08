import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SignIn from "./SignIn";

const Login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handlelogin =(e)=>{
        e.preventDefault()
        let err ={}
        if(email == 0){ 
            err.email = '*Enter Name'
           }
        if(!password){
            err.password = '*Enter valid password'
        } 
        if(Object.keys(err).length>0){
            setErrors({...err})
            return
        }
        axios.post('https://e-auction.onrender.com/login',({email, password})) 
        .then(result =>{
            console.log(result)
            if(result.data === "successfully login")
            navigate('/home')
        else{
            console.log("error")
            setErrors({...errors,invalid: result.data.auth === "Invalid login"})
        }
           })
        .catch(err=> console.log(err))
       
    }

    const handleEmailChange = (e) =>{
        console.log(e.target.value)
        setEmail(e.target.value)
        setErrors({...errors,email:''})
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
                <label className="nameinput"  htmlFor="">Email</label>
                <div>:&nbsp;
                <input type="text" value={email} onChange={handleEmailChange}/></div></div>
                {errors.email ? <div className="errorlogin">{errors.email}</div>:null}
        <div >
                <label className="nameinput"  htmlFor="">Password</label>
                <div>:&nbsp;
                <input type="text" value={password} onChange={handlePasswordChange}/></div></div>
                {errors.password ? <div className="errorlogin">{errors.password}</div>:null}
                
                 <button className="login-btn" type="submit" onClick={handlelogin}>Log in</button>
                {errors.invalid ? <div className="invalidlogin">Invalid Login</div>:null}

                <div className="signlink"> <span className="signincreate">Create an Account:</span> <a  href="/signin">signin</a></div>
               
                </div>
        </>
    )
}


export default Login