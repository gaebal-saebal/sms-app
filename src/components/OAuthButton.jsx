import React from 'react';
import { Button } from './';
import { handleGithubLogin, handleGoogleLogin } from '../function/auth';

/**
 *
 * @param {string} outhType 'github' or 'google'
 * @param {function} setUser
 * @param {string} type 'Log in' or 'Sign up'
 * @param {*} children
 * @returns
 */
const OAuthButton = ({ outhType, setUser, type }) => {
  const handleClick = () => {
    if (outhType === 'github') {
      handleGithubLogin(setUser);
    } else {
      handleGoogleLogin(setUser);
    }
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
