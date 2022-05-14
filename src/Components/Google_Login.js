import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate, Link } from 'react-router-dom';

function Login1() {

  const navigate = useNavigate();

  function handleSuccess(response) {
    console.log(response);
    navigate('/organizations');

  }

  function handleFailure(response) {
    console.log(response);
    alert('Authentication Failed !');
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