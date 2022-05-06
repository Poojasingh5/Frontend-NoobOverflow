import React from 'react';
import GoogleLogin from 'react-google-login';

function Login1(){
    const responseGoogle = response => {
      console.log(response);
    };
    return (
      <div className="App">
      <GoogleLogin
        clientId="674249707936-bna6slr5o7ru716f3r2hfftc0u1lke1q.apps.googleusercontent.com"
        buttonText="Login"
       onSuccess={responseGoogle}
       onFailure={responseGoogle}
       cookiePolicy={'single_host_origin'}
      />
      </div>
    );
  }
  export default Login1;