import React, { useState } from 'react';
import { handleSignUp } from '../function/auth';
import { Button, OAuthButton } from '../components';

const SignUp = () => {
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
      handleSignUp(email, password);
    }
  };

  return (
    <div className='flex-col w-64 bg-white h-1/2 flex-center'>
      <div className='mb-16'>회원가입</div>
      <input placeholder='email' onChange={(e) => handleChange(e, setEmail)}></input>
      <input
        placeholder='more than 6 letters'
        type='password'
        onChange={(e) => handleChange(e, setPassword)}
      ></input>
      <Button className='mt-12' onClick={handleClick}>
        SignUp
      </Button>
      <OAuthButton outhType='github' type='Sign up' />
      <OAuthButton outhType='google' type='Sign up' />
    </div>
  );
};
export default SignUp;
