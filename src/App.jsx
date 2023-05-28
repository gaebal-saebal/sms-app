import React, { useState, useEffect } from 'react';
import { Button, SignUp } from './components';
import { addData, getData, deleteData } from './function/db';
import { handleGithubLogin, handleGoogleLogin, handleLogOut } from './function/auth';

function App() {
  const [user, setUser] = useState('로그인 해주세요');
  const [id, setId] = useState(0);
  const [content, setContent] = useState('');
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getData(setLists);
  }, []);

  return (
    <div>
      <h1 className={`text-[35px] font-bold underline`}>Hello world!</h1>
      <h1 className='test'>Test</h1>
      <SignUp />
      <p> {user}</p>

      <Button onClick={() => handleGoogleLogin(setUser)}>Log in with google</Button>
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

        <Button onClick={() => getData(setLists)}>새로 불러오기</Button>
        <Button onClick={() => addData(id, content)}>데이터 추가하기</Button>
        <Button onClick={() => deleteData(id)}>데이터 삭제</Button>
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
