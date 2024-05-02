import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    axios.post('/api/register', {
      username,
      name,
      password,
    })
      .then(() => {
        navigate('/signin');
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          setError('error during registr');
        }
      });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='signup__container'>
      <div className='title__container'>
        <div className='title__sign'>
        <Link to={'/signin'} style={{ textDecoration: 'none', color: 'black'}}>
          <p className='title__sign-in'>Sign In</p>
        </Link>
        </div>
        <div className='title__sign signup'>
          <p className='title__sign-up'>Sign Up</p>
        </div>
      </div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <p className="username__title">Name:</p>
        <input type="text" className='input__user' placeholder='Your name ...' id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <p className="username__title">Email:</p>
        <input type="text" className='input__user' placeholder='Your email ...' id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <p className="username__title">Password:</p>
        <div className="password__container">
          <input type={showPassword ? "text" : "password"} className='input__user' placeholder='Your password ...' id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button type="button" className="password__toggle" onClick={handleTogglePassword}> show password
            {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
          </button>
        </div>
        <p className="username__title">Confirm Password:</p>
        <div className="password__container">
          <input type={showPassword ? "text" : "password"} className='input__user' placeholder='Confirm your password ...' id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
          <button type="button" className="password__toggle" onClick={handleTogglePassword}> show password
            {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
          </button>
        </div>
        <div className='button__sunmit'>
          <button className='submit' type="submit">SIGN UP</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
