import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import Register from './Register';
import Navbar from './Navbar';
function Login(){
    return(
    <div className='oo'>
   <div class="wrapper">
        <nav class="nav">
            <div class="nav-logo">
                <p></p>
            </div>
            <div class="nav-menu" id="navMenu">
                <ul>
                    <li><a href="" class="link active">Home</a></li>
                    <li><a href="#" class="link">Blog</a></li>
                    <li><a href="#" class="link">Services</a></li>
                    <li><a href="#" class="link">About</a></li>
                </ul>
            </div>
            <div class="nav-button">
        

            <button to='/Login' class="btn white-btn" id="loginBtn" ><Link to='/Login' className='ii'>Sign In</Link></button>
               
                
            
                
                  
               <button  class="btn" id="registerBtn" ><Link to='/Register' className='ii'>Sign Up</Link></button>
               
               
             
            </div>
            <div class="nav-menu-btn">
                <i class="bx bx-menu" onclick="myMenuFunction()"></i>
            </div>
        </nav>
    <div class="login-container">
    <form action="#">
        <div >

        <h1>Login</h1>
        <input type="text" placeholder="User Name" className='input-field' required></input>
        <input type="password" placeholder="Password" className='input-field' required></input>
        </div>
        <div >
       
        <button class="signbt"type="submit" className='submit'><Link to='/Navbar'>Sign In</Link></button>
        </div>
    </form>
    </div>
</div>
</div>
    )
}
export default Login;