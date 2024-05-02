import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
  };

  return (
    <div className='sign__container'>
      <div className='title__container'>
        <div className='title__sign'>
          <p className='title__sign-in'>Sign In</p>
        </div>
        <div className='title__sign signup'>
          <Link to={'/signup'} style={{ textDecoration: 'none'}}>
            <p className='title__sign-up'>Sign Up</p>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <p className="username__title">Email:</p>
        <input type="text" className='input__user' placeholder='Your email ...' id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <p className="username__title">Password:</p>
        <input type="password" className='input__user' placeholder='Your password ...' id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <div className='button__sunmit'>
          <button className='submit' type="submit">SIGN IN</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
