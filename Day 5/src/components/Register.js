import React, { useEffect, useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
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

    if (password !== confirmPassword) {
      setConfirmPasswordError('Password do not match');
      return;
    }

    // Rest of your form submission logic...
  };

  return (
    <div className='log'>
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
                <button class="btn white-btn" id="loginBtn" ><Link to='/Login' className='ii'>Sign In</Link></button>
               <button  class="btn" id="registerBtn" ><Link to='/Register' className='ii'>Sign Up</Link></button>      
            </div>
            <div class="nav-menu-btn">
                <i class="bx bx-menu" onclick="myMenuFunction()"></i>
            </div>
        </nav>
        <div class="register-container" id="container">
            <div class="form-container sign-up-container">
                <form onSubmit={handleFormSubmit}>
                    <h1>Registration</h1>
                    <input type="text" placeholder="User Name"  className='input-field' required />
                    <input
                        type="email"
                        placeholder="Email"
                        className='input-field'
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {emailError && <p class="error">{emailError}</p>}
                    <input
                        type="tel"
                        placeholder="Contact Number"
                        className='input-field'
                        value={contactNumber}
                        onChange={handleContactNumberChange}
                        required
                    />
                    {contactNumberError && (
                    <p class="error">{contactNumberError}</p>
                    )}
                    <input
                        type="password"
                        placeholder="Password"
                        className='input-field'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {passwordError && <p class="error">{passwordError}</p>}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className='input-field'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                    {confirmPasswordError && (
                    <p class="error"   className='input-field' >{confirmPasswordError}</p>
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
</div>

  );
}

export default Register;