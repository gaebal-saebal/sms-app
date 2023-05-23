import React, { useState } from 'react';
import { SignUp } from './components';

import Button from './components/Button';
import { handleGithubLogin } from './function/login/githubOauthLogin';
import { handleGoogleLogin } from './function/login/googleOauthLogin';
import { handleLogOut } from './function/login/logout';
import addData from './function/db/addData';
import getData from './function/db/getData';

function App() {
  const [user, setUser] = useState('로그인 해주세요');
  const [id, setId] = useState(0);
  const [content, setContent] = useState('');
  const [date, setDate] = useState('230523');
  const [lists, setLists] = useState([]);

  return (
    <div>
      <h1 className={`text-[35px] font-bold underline`}>Hello world!</h1>
      <h1 className='test'>Test</h1>
      <SignUp />
      <Button onClick={() => handleGoogleLogin(setUser)}>Log in with google</Button>
      <p> {user}</p>
      <Button onClick={() => handleGithubLogin(setUser)}>Log in with github</Button>
      <Button onClick={() => handleLogOut(setUser)}>Log-out</Button>
      <div>
        <div>
          <label htmlFor='id'>id</label>
          <input id='id' onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor='content'>content</label>
          <input id='content' onChange={(e) => setContent(e.target.value)} />
        </div>

        <Button onClick={() => addData(id, content, date)}>데이터 추가하기</Button>
        <Button onClick={() => getData(setLists)}>테스트</Button>
      </div>
      {lists.map((list, i) => {
        return (
          <div key={i}>
            <div>{`id : ${list.id}`}</div>
            <div>{`content : ${list.content}`}</div>
            <div>{`date : ${list.date}`}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
