import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import { useState,useNavigate,useDispatch } from 'react';
import axios from 'axios';
import Register from './Register';
import Navbar from './Navbar';
import Signup from './Signup';
function Login(){
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
    return(
    <div className='oo'>
  
       <div className='bu'>
      

        <button className='lol'><Link to="/Login">SIGN IN</Link></button>
      
    

        <button className='Re'><Link to="/Reg">SIGNUP</Link></button>
      
       </div>
    <div class="login-container">

  
    <form className='login_form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='gogo'>
            <div className='form-floating mb-3'>
            <label for='nm'>Email</label>
            <br></br>
            <input type='email' className='form-control'
            placeholder='abc@gmail.com'
            value={name} id='nm'
            onChange={handleName} />
            </div>
            {errors.name}
            </div>

            <div className='loginbox'>
              <div className="jo">
            <div className='form-floating mb-3'>
            <label for='pwd'>Password</label>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            </div>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

        </form>
</div>
</div>
    )
}
export default Login;