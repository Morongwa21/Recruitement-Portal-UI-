import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpClick = () => {
    // Navigate to SignUpPage when Sign Up button is clicked
    navigate('/signup');
  };

  const handleForgotPasswordClick = () => {
    // Navigate to ForgotPasswordPage when "Forgot password?" link is clicked
    navigate('/forgotpassword');
  };

//   const handleNextClick = () => {
//     // Navigate to PersonalInfoPage when Next button is clicked
//     navigate('/personalinfo');
//   };

  const handleSubmit = (e) => {
    e.preventDefault();


        // Email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
          alert('Please enter a valid email address.');
          return;
        }
    

    // Check if password meets criteria (at least 8 characters and one number)
    if (password.length < 8 || !/\d/.test(password)) {
      alert('Password must contain at least 8 characters and at least one number.');
      return;
    }

    // Here you can handle form submission, like sending data to backend for authentication
    console.log('Username:', username);
    console.log('Password:', password);

    // Add your authentication logic here (e.g., call API to authenticate user)
    // For demo purposes, navigate to PersonalInfoPage directly
    navigate('/personalinfo');
  };

  return (
    <div className="login-page-container">
      {/* IKUSASATECH text */}
      <div className="brand-text">IKUSASATECH</div>

      <div className="login-form-container">
        <h2 className="login-heading">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your email or phone number"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="login-button" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <div className="forgot-password">
          {/* Use onClick to trigger handleForgotPasswordClick */}
          <span className="forgot-password-link" onClick={handleForgotPasswordClick}>
            Forgot password?
          </span>
        </div>
      </div>

      {/* Vertical line with break and "OR" text */}
      <div className="separator">
        <div className="line"></div>
        <div className="or-text">OR</div>
        <div className="line"></div>
      </div>

      {/* Sign Up button */}
      <div className="sign-up-container">
        <button className="sign-up-button" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
