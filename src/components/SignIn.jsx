import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [mobileno, setMobile] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handlesignin = (e) => {
    e.preventDefault();
    let err = {};
    if (username == 0) {
      err.username = "*Enter username";
    }
    if (!mobileno) {
      err.mobileno = "*Enter mobile number";
    }
    if (!age) {
      err.age = "*Enter your age";
    }
    if (!email) {
        
      err.email = "*Enter your email";
    }
    if (!address) {
      err.address = "*Enter your address";
    }
    if (!password) {
      err.password = "*Enter strong password";
    }
    if (!(repassword == password)) {
      err.repassword = "*Enter correct password";
    }
    if (Object.keys(err).length > 0) {
      setErrors({ ...err });
      return;
    }
    axios.post('https://e-auction.onrender.com/signin',({ username:username, mobileno:mobileno, age:age, email:email,address:address, password:password   }))
    navigate("/")
  }

  const handleUserChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
    setErrors({ ...errors, username: "" });
  };

  const handleMobileChange = (e) => {
    console.log(e.target.value);
    setMobile(parseInt(e.target.value));
    setErrors({ ...errors, mobileno: "" });
  };
  const handleAgeChange = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
    setErrors({ ...errors, age: "" });
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  };
  const handlePassChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    setErrors({ ...errors, password: "" });
  };
  const handleRepassChange = (e) => {
    console.log(e.target.value);
    setRepassword(e.target.value);
    setErrors({ ...errors, repassword: "" });
  };
  const handleAddressChange = (e) => {
    console.log(e.target.value);
    setAddress(e.target.value);
    setErrors({ ...errors, address: "" });
  };
  return (
    <>
      <div className="signin-content">
        <form action="" onSubmit={handlesignin}>
          <h2 className="heading">Sign In</h2>
          <div>
            <label className="nameinput" htmlFor="">Username</label>
            <div>
              :&nbsp;
              <input type="text" value={username} onChange={handleUserChange} />
            </div>
          </div>
          {errors.username ? (
            <div className="error">{errors.username}</div>
          ) : null}

          <div>
            <label className="noinput" htmlFor="">Mobile No</label>
            <div>
              :&nbsp;
              <input
                type="number"
                value={mobileno}
                onChange={handleMobileChange}
              />
            </div>
          </div>
          {errors.mobileno ? (
            <div className="error">{errors.mobileno}</div>
          ) : null}
          <div>
            <label className="ageinput" htmlFor="">
              Age
            </label>
            <div>
              :&nbsp;
              <input type="Number" value={age} onChange={handleAgeChange} />
            </div>
          </div>
          {errors.age ? <div className="error">{errors.age}</div> : null}
          <div>
            <label className="emailinput" htmlFor="">
              Email Address
            </label>
            <div>
              :&nbsp;
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>
          </div>
          {errors.email ? <div className="error">{errors.email}</div> : null}
          <div>
            <label className="addressinput" htmlFor="">
              Address
            </label>
            <div>
              :&nbsp;
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
          </div>
          {errors.address ? (
            <div className="error">{errors.address}</div>
          ) : null}
          <div>
            <label className="passinput" htmlFor="">
              Password
            </label>
            <div>
              :&nbsp;
              <input
                type="password"
                value={password}
                onChange={handlePassChange}
              />
            </div>
          </div>
          {errors.password ? (
            <div className="error">{errors.password}</div>
          ) : null}
          <div>
            <label className="repassinput" htmlFor="">
              Re-enter Password
            </label>
            <div>
              :&nbsp;
              <input
                type="password"
                value={repassword}
                onChange={handleRepassChange}
              />
            </div>
          </div>
          {errors.repassword ? (
            <div className="error">{errors.repassword}</div>
          ) : null}

          <button className="signin-btn" type="submit">Signin</button>
        </form>
      </div>
    </>
  )
};

export default SignIn
