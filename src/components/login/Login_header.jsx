import React from 'react'
import './Login_header.css'
import logo from '../../images/logo1.png'
const Login_header = ({title}) => {
  return (
    <div id="login_header">
        <img src={logo} alt="" class="login__logo"/>
        <div class="login__title">
            <h4 class="login__title1">Welcome to</h4>
            <h3 class="login__title2">Delta Property Management System</h3>
            <h5 class="login__title3">{title?title:'Enter your information below to continue.'}</h5>
        </div>
    </div>
  )
}

export default Login_header