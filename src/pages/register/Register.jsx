import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.scss";
const Register = () => {
  
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:""
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    // e.preventDefault();
    if((inputs.username==="")||(inputs.email==="")||(inputs.password==="")||(inputs.name==="")){
        console.log("Not all feilds are filled");
        setError("Enter all the feilds");
        return;
    }
    try {
      await axios.post("http://localhost:3400/api/auth/register", inputs);
    } catch (err) {
      setError(err.response.data);
    }
  };
  console.log(error)
  return (
    <>
    <div className="Rwrapper">
        <div className="form-box register">
        <h2>Registration</h2>
        
         <form>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="text"
              placeholder=""
              name="username"
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input
              type="email"
              placeholder=""
              name="email"
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              placeholder=""
              name="password"
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <label>Password</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="name"
              placeholder=""
              name="name"
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <label>Name</label>
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="btn" onClick={handleClick}>
            Register
          </button>
          <div className="login-register">
            <p>
              Already have an account?<br />
              <Link to="/login" className="login-link">
                Login
              </Link>
            </p>
          </div>
        </form> 
      </div>
      </div>
    </>
  );
};

export default Register;
