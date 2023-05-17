import React, { useState } from 'react';
import { SignUp } from './components';

import Button from './components/Button';
import { handleGithubLogin } from './function/login/githubOauthLogin';
import { handleGoogleLogin } from './function/login/googleOauthLogin';

function App() {
  const [user, setUser] = useState('');
  return (
    <div>
      <h1 className={`text-[35px] font-bold underline`}>Hello world!</h1>
      <h1 className='test'>Test</h1>
      <SignUp />
      <Button onClick={() => handleGoogleLogin(setUser)}>
        Log in with google
      </Button>
      <p>현재 로그인한 유저 : {user}</p>
      <Button onClick={() => handleGithubLogin(setUser)}>
        Log in with github
      </Button>
    </div>
  );
}

export default App;
