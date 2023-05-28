import React, { useState, useEffect } from 'react';
// import components from componets dir
import { Button, SignUp } from './components';
// import handle DB functions from function/db dir
import { addData, getData, deleteData } from './function/db';
// import handle Auth functions from function/auth dir
import { handleGithubLogin, handleGoogleLogin, handleLogOut } from './function/auth';

function App() {
  const [user, setUser] = useState('로그인 해주세요'); // 현재 user(비로그인/로그아웃시 '로그인 해주세요')
  const [id, setId] = useState(0); // DB에 담길 id
  const [content, setContent] = useState(''); // DB에 담길 content
  const [lists, setLists] = useState([]); // DB에서부터 가져온 data list

  useEffect(() => {
    getData(setLists);
  }, []); // '/' 페이지가 로드될 시 data list 가져옴

  return (
    <div>
      <header>
        <h1 className={`text-[35px] font-bold underline`}>Hello world!</h1>
        <h1 className='test'>Test</h1>
      </header>

      <div className='my-10 border-2'>
        <p> {user}</p>
        <SignUp />

        {/* Auth buttons */}
        <div>
          <Button onClick={() => handleGoogleLogin(setUser)}>Log in with google</Button>
          <Button onClick={() => handleGithubLogin(setUser)}>Log in with github</Button>
          <Button onClick={() => handleLogOut(setUser)}>Log-out</Button>
        </div>
      </div>

      <div className='py-2 my-10 border-2'>
        <div>
          <label htmlFor='id'>id</label>
          <input className='mx-4 border-2' id='id' onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor='content'>content</label>
          <input
            className='mx-4 mb-4 border-2'
            id='content'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Data Buttons */}
        <Button onClick={() => getData(setLists)}>새로 불러오기</Button>
        <Button
          onClick={async () => {
            await addData(id, content);
            getData(setLists);
          }}
        >
          데이터 추가/수정하기
        </Button>
        <Button
          onClick={async () => {
            await deleteData(id);
            getData(setLists);
          }}
        >
          데이터 삭제
        </Button>
      </div>

      <div className='flex flex-wrap'>
        {lists.map((list, i) => {
          return (
            <div className='w-1/4 h-full p-5 my-2 bg-red-200 border-2' key={i}>
              <div className='text-xs text-gray-500'>{list.id}</div>
              <div>{list.content}</div>
              <div className='text-xs text-gray-500'>{list.date}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
