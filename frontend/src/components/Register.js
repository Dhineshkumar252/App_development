import React, { useEffect, useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Register = ({history}) => {
  
  
    const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [confirmpasswordError, setConfirmpasswordError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data object to be sent to the server
    const data = {
      username,
      email,
      contactNumber,
      password,
      confirmpassword
    };

    try {
      // Make an HTTP POST request using Axios
      await axios.post('http://127.0.0.1:8080/auth/register', data);

      // Registration successful
      setIsRegistered(true);

      // Show toast message
      setTimeout(() => {
        setIsRegistered(false);
        history.push('/');
      }, 3000);
    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error);
    }
  };
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      signUpButton.removeEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.removeEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    };
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleContactNumberChange = (e) => {
    const input = e.target.value;

    if (/^\d{0,10}$/.test(input)) {
      setContactNumber(input);
      setContactNumberError('');
    } else {
      setContactNumberError('Please enter a valid 10 digit number');
    }
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;

    setPassword(input);
    setPasswordError('');

    if (input.length < 8 || input.length > 16) {
      setPasswordError('Password should be 8-16 characters long');
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError('Password should contain at least one uppercase letter');
    } else if (!/\d.*\d/.test(input)) {
      setPasswordError('Password should contain at least two numbers');
    } else if (!/[!@#$%^&*()]/.test(input)) {
      setPasswordError('Password should contain at least one special character');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmpassword(e.target.value);
    setConfirmpasswordError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Please enter an email');
      return;
    }

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Enter a valid email address');
      return;
    }

    if (!contactNumber || contactNumber.length !== 10) {
      setContactNumberError('Enter a 10 digit number');
      return;
    }

    if (!password) {
      setPasswordError('Please enter a password');
      return;
    }

    if (password !== confirmpassword) {
      setConfirmpasswordError('Password do not match');
      return;
    }

    // Rest of your form submission logic...
  };

  return (
    <div className='oo'>
 
    <div className='bu'>
      

      <button className='lol'><Link to="/Login">SIGN IN</Link></button>
    
  

      <button className='Re'><Link to="/Register">SIGNUP</Link></button>
    
     </div>
        <div class="register-container" id="container">
            <div class="form-container sign-up-container">
                <form onSubmit={handleSubmit}>
                    <h1 className='he'>Registration</h1>
                    <input type="text" placeholder="User Name"  className='input-field' 
                     id="username"
                     value={username}
                     onChange={(event) => setusername(event.target.value)}
                    required />
                    <input
                        type="email"
                        placeholder="Email"
                        className='input-field'
                        id="email"
                     value={email}
                     onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    {emailError && <p class="error">{emailError}</p>}
                    <input
                        type="numbber"
                        placeholder="Contact Number"
                        className='input-field'
                        id="contactNumber"
                     value={contactNumber}
                     onChange={(event) => setContactNumber(event.target.value)}
                    />
                    {contactNumberError && (
                    <p class="error">{contactNumberError}</p>
                    )}
                    <input
                        type="password"
                        placeholder="Password"
                        className='input-field'
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    {passwordError && <p class="error">{passwordError}</p>}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className='input-field'
                        id="confirmpassword"
                     value={confirmpassword}
                     onChange={(event) => setConfirmpassword(event.target.value)}
                        required
                    />
                    {confirmpasswordError && (
                    <p class="error"   className='input-field' >{confirmpasswordError}</p>
                    )}
                    <div>
                    <button class="btn" type="submit" className='submit'>Submit</button>
                    </div>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <p class="ghost" id="signIn" type="button">
                         
                        </p>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <p class="ghost" id="signUp" type="button">    
                        </p>
                    </div>
                </div>
            </div>
        </div>
</div>

  );
}

export default Register;