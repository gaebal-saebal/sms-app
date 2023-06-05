import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './';
import { handleGithubLogin, handleGoogleLogin } from '../function/auth';

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
    <Button onClick={handleClick} style={buttonStyle}>
      {outhType === 'github' ? `${type} with GitHub` : `${type} with Google`}
    </Button>
  );
};

export default OAuthButton;
