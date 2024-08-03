import React from 'react'
import './Login.css'
import Login_header from './Login_header'
import eye from '../../images/eye.svg'
import google from '../../images/google.svg'
import face from '../../images/face.svg'


const Login = () => {
  return (
    <div id="login">
        <div className="wrapper">
        <div class="container">
            <Login_header title={'Please Login your account.'}/>
            <label for="email" class="login__text">Email</label>
            <input type="email" placeholder="delta123@gmail.com" id="email"/>
            <label for="password" class="login__text password">Password</label>
            <div class="password__group">
                <input type="password" placeholder="*********" id="password"/>
                <img src={eye} alt="" width="24" height="24"/>
            </div>
            <div class="checkbox-group">
                <div class="checkbox">
                    <input type="checkbox" name="remember" id="remember"/>
                    <label for="remember" class="remember">Remember me</label>            
                </div>
                <div>
                    <a href="#" class="forget">Forgot Password?</a>
                </div>       
            </div>
            <button>Log In</button>
            <label class="continue">Or Continue With</label>
            <div class="social-group">
                <div class="social">
                <img src={google} alt=""/><label for="">Google</label>
                 </div>
                <div class="social">
                    <img src={face} alt=""/><label for="">Facebook</label>
                </div>
            </div>
            <div class="new-member">
                <label>New member here? <span><a href="register.html">Register Now</a></span></label>
            </div>      
            
        </div>

    </div>
    </div>
  )
}

export default Login