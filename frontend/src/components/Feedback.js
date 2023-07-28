import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    const token= localStorage.getItem("token");
    event.preventDefault();
    setErrors(validateForm({ name, email, message}));
    try{
      const response=await axios.post('http://localhost:8080/api/v1/auth/send',{
        name:name,
        email:email,
        message:message
  
      },
      {
        headers:{
          'Authorization':`BEARER ${token}`,
          'cache-control': 'no-cache'
        }
      });
      console.log(response.status);
      if(response.status===200){
        setName("");
        setEmail('');
        setMessage('');
        navigate('/Navbar');
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if (isSubmit) {
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
      setIsSubmit(false);
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }
    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  return (
    <>
    <div className='al'>

      <div className='register7'>
        <form onSubmit={handleSubmit}>
          <h1 className='head'>Feedback</h1>
              <br /><br /><br />
            <div className='form-group5'>
              <label htmlFor='nm'>Username</label>
              <input
                type='name'
                className='form-control6'
                placeholder='username'
                id='nm'
                value={name}
                onChange={handleName}
              />
            {errors.name}
            </div><br/><br /><br />
          <div className='form-group5'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control6'
              placeholder='email'
              id='email'
              value={email}
              onChange={handleEmail}
            />
          {errors.email && <span>{errors.email}</span>}
          </div><br/><br /><br />
          <br /><br />
          <div className='form-group5'>
            <label htmlFor='State,City'>Message</label>
            <input
              type='text'
              maxlength="20" required
              className='form-control6'
              placeholder='message'
              value={message}
              id='nm'
              onChange={handleMessage}
            />
            {errors.message}
          </div>
          <br/><br /><br />
          <button
            type='submit' className="mm"
          
          >
            Submit
          </button>
        </form>
        
      </div>
              </div>
    </>
  );
};

export default Feedback;