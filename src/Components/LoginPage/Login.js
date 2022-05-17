import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import loginCredintial from "./demologin_credintial";
import "./Login.css";
import demo from '../../DemoData/Api1'
import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom'



function Login1() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `signup`; 
    navigate(path);
  }
  let navigate2 = useNavigate(); 
  const routeChange2 = () =>{ 
    let path = `organizations`; 
    navigate2(path,{state:demo});
  }


  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = loginCredintial.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        routeChange2();
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form1">
      <form onSubmit={handleSubmit}>
        <div >
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div>
          <label className="input-container">Password  </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">     
            <button onClick={handleSubmit} className="btn4" type="submit">
               Submit
            </button>
            <button onClick={routeChange} className="btn3" type="submit">
               Signup
            </button>
        </div>        
      </form>
    </div>
  );

  return (
    <div className="login1">
        <div className="title">Sign In</div>
        {isSubmitted ? <h1>Logged in</h1>:renderForm }
    </div>  
  );
}

export default Login1;