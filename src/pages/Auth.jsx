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
      <div className='page-content scrollbar-hidden'>
        <div className='w-[80px] h-[80px]'>
          <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 20 20'>
            <path
              fill='#ffc0cb'
              fillRule='evenodd'
              d='m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z'
            ></path>
          </svg>
        </div>
        <div className='mt-4 mb-6 text-6xl'>회원가입</div>
        <input
          className='w-64 px-4 rounded-t-lg'
          placeholder='email'
          onChange={(e) => handleChange(e, setEmail)}
        ></input>
        <input
          className='w-64 px-4 rounded-b-lg'
          placeholder='more than 6 letters'
          type='password'
          onChange={(e) => handleChange(e, setPassword)}
        ></input>
        <Button customStyle={'mt-12 bg-main-pink text-white'} onClick={handleClick}>
          SignUp
        </Button>
        <OAuthButton outhType='github' type='Sign up' setIsLogin={setIsLogin} />
        <OAuthButton outhType='google' type='Sign up' setIsLogin={setIsLogin} />
      </div>
    );
  } else if (authType === 'login') {
    return (
      <div className='page-content scrollbar-hidden'>
        <div className='w-[80px] h-[80px]'>
          <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'>
            <g fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
              <path d='M0 0h24v24H0z'></path>
              <path
                fill='#ffc0cb'
                d='m14.872 14.287l6.522 6.52a2.996 2.996 0 0 1-2.218 1.188L19 22H5a2.995 2.995 0 0 1-2.394-1.191l6.521-6.522l2.318 1.545l.116.066a1 1 0 0 0 .878 0l.116-.066l2.317-1.545zM2 9.535l5.429 3.62L2 18.585zm20 0v9.05l-5.43-5.43zm-9.56-7.433l.115.066l8.444 5.629l-8.999 6l-9-6l8.445-5.63a1 1 0 0 1 .994-.065z'
              ></path>
            </g>
          </svg>
        </div>
        <div className='mt-4 mb-6 text-6xl'>로그인</div>
        <input
          className='w-64 px-4 rounded-t-lg'
          placeholder='email'
          onChange={(e) => handleChange(e, setEmail)}
        ></input>
        <input
          className='w-64 px-4 rounded-b-lg'
          placeholder='more than 6 letters'
          type='password'
          onChange={(e) => handleChange(e, setPassword)}
        ></input>
        <Button customStyle={'mt-12 bg-main-pink text-white'} onClick={handleClick}>
          Login
        </Button>
        <OAuthButton outhType='github' type='Login' />
        <OAuthButton outhType='google' type='Login' />
      </div>
    );
  }
};
export default Auth;
