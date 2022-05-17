import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import demo from '../DemoData/Api1';

function Login1() {

  const navigate = useNavigate();

  const apiReturn = demo;

  function handleSuccess() {
    alert("Login Successfull !");
    navigate('/organizations', { state: apiReturn });
  }

  function handleFailure() {
    alert("Login Successfull !");
    navigate('/organizations', { state: apiReturn });
  }
  return (
    <div className="App">
      <GoogleLogin
        clientId="674249707936-bna6slr5o7ru716f3r2hfftc0u1lke1q.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}
export default Login1;