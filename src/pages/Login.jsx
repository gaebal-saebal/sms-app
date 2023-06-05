import React, { useState } from 'react';
import { handleSignIn } from '../function/auth';
import { Button, OAuthButton } from '../components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleClick = () => {
    if (emailRegex.test(email) === false) {
      alert('Please enter a valid email');
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters');
    } else {
      handleSignIn(email, password);
    }
  };

  return (
    <div className='flex-col w-64 bg-white h-1/2 flex-center'>
      <div className='mb-16'>로그인</div>
      <input placeholder='email' onChange={(e) => handleChange(e, setEmail)}></input>
      <input
        placeholder='more than 6 letters'
        type='password'
        onChange={(e) => handleChange(e, setPassword)}
      ></input>
      <Button className='mt-12' onClick={handleClick}>
        Login
      </Button>
      <OAuthButton outhType='github' type='Login' />
      <OAuthButton outhType='google' type='Login' />
    </div>
  );
};
export default Login;
