import React from 'react'
import './Register.css'
import Login_header from '../login/Login_header'
import eye from '../../images/eye.svg'
const Register = () => {
  return (
    <div id="register">
        <div class="container1">
        <Login_header/>
            <label for="email" class="register__text">Email</label>
            <input type="email" placeholder="delta_user@gmail.com" id="email"/>
            <div class="first-last-group">
                <div>
                <label for="firstname" class="register__text">First name</label>
                <input type="text" placeholder="Delta" id="firstname"/>
                </div>
                <div>
                    <label for="lastname" class="register__text">Last name</label>
                    <input type="text" placeholder="Youthrive" id="lastname"/>
                </div>
            </div>
            <div class="password-group">
                <div>
                    <label for="password" class="register__text margin-t">Create Password</label>
                    <div class="pass1">
                        <input type="password" placeholder="*********" id="password"/>
                        <img src={eye} alt="" width="24" height="24"/>
                    </div>
                </div>
                <div>
                    <label for="password" class="register__text margin-t">Confirm Password</label>
                    <div class="pass1">
                        <input type="password" placeholder="*********" id="password"/>
                        <img src={eye} alt="" width="24" height="24"/>
                    </div>
                </div>
            </div>
            <button>Create Account</button>
        </div>
        </div>
    
  )
}

export default Register