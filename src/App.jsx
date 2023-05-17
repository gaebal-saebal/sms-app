import React, { useState } from 'react';
import { SignUp } from './components';

import Button from './components/Button';
import { handleGithubLogin } from './function/login/githubOauthLogin';
import { handleGoogleLogin } from './function/login/googleOauthLogin';
import { handleLogOut } from './function/login/logout';

function App() {
  const [user, setUser] = useState('로그인 해주세요');
  return (
    <div>
      <h1 className={`text-[35px] font-bold underline`}>Hello world!</h1>
      <h1 className='test'>Test</h1>
      <SignUp />
      <Button onClick={() => handleGoogleLogin(setUser)}>
        Log in with google
      </Button>
      <p> {user}</p>
      <Button onClick={() => handleGithubLogin(setUser)}>
        Log in with github
      </Button>
      <Button onClick={() => handleLogOut(setUser)}>Log-out</Button>
    </div>
  );
}

export default App;
