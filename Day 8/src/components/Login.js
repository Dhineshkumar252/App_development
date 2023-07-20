import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import Register from './Register';
import Navbar from './Navbar';
function Login(){
    return(
    <div className='oo'>
  
       <div className='bu'>
      

        <button className='lol'><Link to="/Login">SIGN IN</Link></button>
      
    

        <button className='Re'><Link to="/Register">SIGNUP</Link></button>
      
       </div>
    <div class="login-container">
    <form action="#">
        <div >
        <h1 className='he'>Login</h1>
        <input type="text" placeholder="User Name" className='input-field' required></input>
        <input type="password" placeholder="Password" className='input-field' required></input>
        </div>
        <div >
        <button class="signbt"type="submit" className='submit'><Link to='/Navbar'>Sign In</Link></button>
        </div>
    </form>
  
</div>
</div>
    )
}
export default Login;