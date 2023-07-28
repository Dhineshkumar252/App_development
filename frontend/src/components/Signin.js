

import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
 import './Login.css'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'



const Signin = () => {
 const [name,setName]=useState('')
 const [id,setId]=useState('')  
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();
 const dispatch=useDispatch();

 const handleName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
 
  const handleId=(event)=>{
    event.preventDefault();
    setId(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    setErrors(validateForm({name,id,password}));
    try{
      const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
        
        email:name,
        password:password
  
      });
      navigate('/Navbar');
      let token=response.data.token;
      localStorage.setItem('token',token);
      console.log(response.status);
      if(response.status===200){
        setName("");
        setId('');
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      console.log(error);
      setIsSubmit(false);
  
    }
    // setIsSubmit(true);
    
    
   
};
  

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Email is required';
      setIsSubmit(false);
    }

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };

  

  return (
    <div className='oo'>
<div className='bu'>
      

      <button className='lol'><Link to="/Signin">SIGN IN</Link></button>
    
  

      <button className='Re'><Link to="/Signup">SIGNUP</Link></button>
    
     </div>
      <div className='login-container'>

        <form  onSubmit={handleSubmit}>
            <h1 className='head'>SIGNIN</h1>
            <div className='gogo'>
            <div className='form-floating mb-3'>
           
        
            <input type='email' 
            placeholder='@gmail.com'
            value={name} id='nm' className='innput-field'
            onChange={handleName} />
            </div>
            {errors.name}
            </div>

            <div className='loginbox'>
              <div className="jo">
            <div className='form-floating mb-3'>
          
            <input type='password'
            placeholder='password' id='pwd' className='innput-field'
            value={password}
            onChange={handlePassword}/>
            </div>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            <div className='pla'>

            <button  type='submit' className='submit' style={{background:'black',color:'white',width:180,height:50}}>Sign In</button>
            </div>
            

        </form>
       
    </div>
    
          
    </div>
  )
}

export default Signin