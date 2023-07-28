import {TextField,Button, MenuItem,Select, Typography } from '@mui/material';
import React from 'react'

import { useState } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

function Signup() {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[pwd,setPwd] = useState("");
    const[role,setRole] = useState("USER");
    const navigate = useNavigate();

    const handleChange = async(e) => {
        e.preventDefault()
        console.log(name, email, pwd, role);
        let password = pwd;
        try{
          const response = await axios.post('http://localhost:8080/api/v1/auth/register',{
            name,
            email,
            password,
            role
          });
          if(response.status === 200){
            navigate('/Signin');
            setName('');
            setEmail('');
            setPwd('');
          }
        }
        catch(error){
          console.error("Error:",error);
        }
        // if(fname.length !== 0 && lname.length !== 0 && age >= 18 && dob.length === 10 && 
        //   address.length !== 0 && email.length !== 0 && cno.length === 10 ){
        //     window.location.href = "../HomePage";
        // }
    };
    const handleRegisterClick = () => {
      navigate('/Signin');
    }
    
  return (<>
    <center>
    <div className='oo'>
<div className='bu'>
      

      <button className='lol'><Link to="/Signin">SIGN IN</Link></button>
    
  

      <button className='Re'><Link to="/Signup">SIGNUP</Link></button>
    
     </div>
    <div className = "reg-container">
    <h2 className = "head">SIGNUP</h2>
        <form>
      
        <input type = "text" className='input-field' placeholder='username' onChange = {e => setName(e.target.value)}></input>
            <div className='signup-error'>
            {name.length === 0 ?"*required" : ""}
            </div><br/>

            <input type = "text" placeholder = "@gmai.com" className='input-field' onChange = {e => setEmail(e.target.value)}></input>
            <div className='signup-error'>
            {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Enter a valid email" : ""}
            </div><br/>
            
                <input type = "password" placeholder = "Password" className='input-field' onChange = {e => setPwd(e.target.value)}></input>
                <div className='signup-error'>
                  {pwd.length < 8 || !((/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(pwd)) ?"Enter a standard password" : ""}
                  {console.log(pwd)}
                </div><br/>

                <Select className="select"label = "Role" value = {role} onChange = {e => setRole(e.target.value)}> 
                <MenuItem value = "USER">User</MenuItem>
                <MenuItem value = "ADMIN">Admin</MenuItem>
                </Select>
                <br></br>
                <br></br>
                <div className='plac'>

                <button onClick = {handleChange} style={{background:'black',color:'white',width:180,height:50}} className = "submit"  type = "submit">SIGN UP</button>
                </div>
                
        </form>
        </div>
    </div>
    </center>
    </>
  )
}

export default Signup