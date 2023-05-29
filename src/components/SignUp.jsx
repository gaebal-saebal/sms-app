import React, { useState } from 'react';
import signUp from '../function/auth/signUp'; // 왜 이게 없으면 오류?
import { handleSignUp } from '../function/auth';

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
    <>
      <input placeholder='email' onChange={(e) => handleChange(e, setEmail)}></input>
      <input
        placeholder='more than 4 letters'
        type='password'
        onChange={(e) => handleChange(e, setPassword)}
      ></input>
      <button onClick={handleClick}>SignUp</button>
    </>
  );
};
export default SignUp;
