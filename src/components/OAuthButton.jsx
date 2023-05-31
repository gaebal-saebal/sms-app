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
const OAuthButton = (type, setUser, children) => {
  const handleClick = () => {
    if (type === 'github') {
    }
  };
  return <Button>{children}</Button>;
};

export default OAuthButton;
