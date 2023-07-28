import {TextField,Button, MenuItem,Select, Typography } from '@mui/material';

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

function Reg() {

    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[contactNumber,setContactNumber] = useState("");
    const[password,setPassword] = useState("");
     const navigate = useNavigate();
    // const[role,setRole] = useState("USER");

    const handleChange = async(e) => {
        e.preventDefault()
        console.log(username, email, contactNumber,password);
        try{
          const response = await axios.post('http://127.0.0.1:8080/auth/register',{
            username,
            email,
            contactNumber,
            password
          });
          if(response.status === 200){
             navigate('/Login');
            setUsername('');
            setEmail('');
            setContactNumber('');
            setPassword('');
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
     navigate('/Login');
    }
    
  return (<>
    <center>
    <div className='employee-background'>
    <div className = "employee-login-form">
    <h2 className = "sign-up">Sign - Up</h2>
        <form>
          <div className='signup-fields'>
        <TextField type = "text" label = "Name" value={username} onChange = {e => setUsername(e.target.value)}></TextField>
            <div className='signup-error'>
            {username.length === 0 ?"*required" : ""}
            </div><br/>

            <TextField type = "text" label = "Email" value={email} onChange = {e => setEmail(e.target.value)}></TextField>
            <div className='signup-error'>
            {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Enter a valid email" : ""}
            </div><br/>
            
                <TextField type = "number" label = "Contact Number" value={contactNumber} onChange = {e => setContactNumber(e.target.value)}></TextField>
                <br></br>
                <br></br>
                <TextField type = "password" label = "Password" value={password} onChange = {e => setPassword(e.target.value)}></TextField>
                <div className='signup-error'>
                  {password.length < 8 || !((/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(password)) ?"Enter a standard password" : ""}
                  {console.log(password)}
                </div><br/>

                <Typography  className='typography'>Already have an Account?{' '}<Link to = "/Login" onClick={handleRegisterClick}>Login here</Link></Typography>
                <Button onClick = {handleChange} className = "signup-login-btn" variant = "contained" type = "submit">SIGN UP</Button>
                </div>
        </form>
        </div>
    </div>
    </center>
    </>
  )
}

export default Reg;