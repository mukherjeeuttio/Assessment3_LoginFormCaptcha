import React, { useState } from 'react';
import './LoginForm.css';
import { FaUserAlt, FaLock, FaRedoAlt } from 'react-icons/fa';

const generateCaptcha = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const LoginForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptcha === captcha) {
      // Proceed with login logic
      console.log('Login successful');
    } else {
      // Show error message for invalid captcha
      console.log('Invalid captcha');
      // Regenerate the captcha
      setCaptcha(generateCaptcha());
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Welcome User...</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUserAlt className='icon' />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className='icon' />
        </div>
        <div className="captcha-box">
          <input
            type="text"
            placeholder="Enter Captcha"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            className="captcha-input"
            required
          />
          <span className="captcha-text">{captcha}</span>
          <FaRedoAlt className="reload-icon" onClick={() => setCaptcha(generateCaptcha())} />
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot Password</a>
        </div>

        <button type='submit'>Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;