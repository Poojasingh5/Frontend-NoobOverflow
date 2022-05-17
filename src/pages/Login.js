import React from "react";
import Wrapper from "../assets/Wrappers/Login";
import Logo from "../Components/Logo";
import Shopping_cart from "../Components/Shopping_cart";
import Login1 from "../Components/LoginPage/Login";
import '../assets/index.loginpage.css'

const Login = () => {
  return (
    <Wrapper>
      <nav>
        {<Logo />}<h1>&nbsp;&nbsp;Buylend</h1>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Buy, Rent<span> and</span> Sell
          </h1>

          <p>
            Buylend makes it so easy to connect people to buy, sell or rent used goods and services. By Buylend,
            the goods are exchanged within the same organisation so you can trust that that your goods are in safe hands.
          </p>
          <p>
            Buylend is easy to use and completely free. So, its time to Buylend.
          </p>

          <Login1 />
        </div>
        {<Shopping_cart />}
      </div>
    </Wrapper>
  )
}

export default Login;
