import React, { useState, useEffect } from 'react';
// import components from componets dir
import { Navbar } from './components';
// import handle DB functions from function/db dir
import { addData, getData, deleteData } from './function/db';
// import handle Auth functions from function/auth dir
import { handleLogOut } from './function/auth';
// import pages
import { SignUp, Login, FriendList, SmsDetail, WriteSms } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
      <BrowserRouter>
        <Navbar>네비게이션바</Navbar>
        <Routes>
          <Route path='/' element={<div>메인페이지</div>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/friend' element={<FriendList />} />
          <Route path='/sms:id' element={<SmsDetail />} />
          <Route path='/write' element={<WriteSms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
