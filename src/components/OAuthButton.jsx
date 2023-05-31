import React from 'react';
import { Button } from './';
import { handleGithubLogin, handleGoogleLogin } from '../function/auth';

/**
 *
 * @param {string} type 'github' or 'google'
 * @param {function} setUser
 * @param {*} children
 * @returns
 */
const OAuthButton = ({ outhType, setUser }) => {
  const handleClick = () => {
    if (outhType === 'github') {
      handleGithubLogin(setUser);
    } else {
      handleGoogleLogin(setUser);
    }
  };

  const buttonStyle = {
    color: outhType === 'github' ? 'white' : 'black',
    background: outhType === 'github' ? 'black' : 'white',
  };

  return (
    <Button onClick={handleClick} style={buttonStyle}>
      {outhType === 'github' ? 'Sign up with GitHub' : 'Sign up with Google'}
    </Button>
  );
};

export default OAuthButton;
