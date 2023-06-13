import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './';
import { handleGithubLogin, handleGoogleLogin } from '../function/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';

/**
 *
 * @param {string} outhType 'github' or 'google'
 * @param {string} type 'Log in' or 'Sign up'
 * @param {function} setIsLogin
 * @param {*} children
 * @returns
 */
const OAuthButton = ({ outhType, type, setIsLogin }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (outhType === 'github') {
      handleGithubLogin(setIsLogin);
    } else {
      handleGoogleLogin(setIsLogin);
    }
    navigate('/');
  };

  const buttonStyle =
    (outhType === 'github' ? 'text-white' : 'text-black') +
    ' ' +
    (outhType === 'github' ? 'bg-black' : 'bg-white');

  return (
    <Button onClick={handleClick} customStyle={buttonStyle}>
      {outhType === 'github' ? (
        <span className='flex items-center justify-around'>
          <FaGithub className='text-2xl' />
          {`${type} with GitHub`}
        </span>
      ) : (
        <span className='flex items-center justify-around'>
          <FaGoogle className='text-2xl' />
          {`${type} with Google`}
        </span>
      )}
    </Button>
  );
};

export default OAuthButton;
