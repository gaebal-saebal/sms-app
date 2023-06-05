import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSignIn, handleSignUp } from '../function/auth';
import { Button, OAuthButton } from '../components';

/**
 *
 * @param {string} authType 'login' or 'signup'
 * @returns
 */
const Auth = ({ authType, setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleClick = () => {
    if (emailRegex.test(email) === false) {
      alert('Please enter a valid email');
      return;
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    } else {
      authType === 'login'
        ? handleSignIn(email, password, setIsLogin)
        : handleSignUp(email, password);
    }
    navigate('/');
  };

  if (authType === 'signup') {
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
        <OAuthButton outhType='github' type='Sign up' setIsLogin={setIsLogin} />
        <OAuthButton outhType='google' type='Sign up' setIsLogin={setIsLogin} />
      </div>
    );
  } else if (authType === 'login') {
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
  }
};
export default Auth;
