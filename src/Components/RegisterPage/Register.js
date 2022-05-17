import { useState } from 'react';
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom'
export default function Register() {

//     let navigate = useNavigate(); 
//   const routeChange = () =>{ 
//     let path = ``; 
//     navigate(path);
//   }
// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [number, setNumber] = useState('');
const [address, setAddress] = useState('');
const [OTP, setOTP] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

const handleNumber = (e) => {
setNumber(e.target.value);
setSubmitted(false);
};

const handleAddress = (e) => {
setAddress(e.target.value);
setSubmitted(false);
};

const handleOTP = (e) => {
    setOTP(e.target.value);
    setSubmitted(false);
    };

// Handling the form submission

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>Sucess</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1 className='text'>Please enter all the fields</h1>
</div>
); 
};

return (
<div className="form">
<div>
<h1 className='text'>User Registration</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form className='text'>
{/* Labels and inputs for form data */}
<label className="label">Name</label>
<input onChange={handleName} className="input"
value={name} type="text" />

<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />

<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />

<label className="label">Phone Number</label>
<input onChange={handleNumber} className="input"
value={number} type="number" />

<label className="label">Address</label>
<input onChange={handleAddress} className="input"
value={address} type="text" />

{/* <label className="label">OTP</label>
<input onChange={handleOTP} className="input"
value={OTP} type="number" />
<div>
    <button onClick={handleSubmit} className="btn2" type="submit">
       Get OTP
    </button>
    <button onClick={handleSubmit} className="btn3" type="submit">
       Enter OTP
    </button>

</div> */}


<button  className="btn2" type="submit"><Link to="/">Submit</Link>
</button>
</form>
</div>
);
}

