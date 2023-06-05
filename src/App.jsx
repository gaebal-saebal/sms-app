import React, { useState, useEffect } from 'react';
// import components from componets dir
import { Navbar } from './components';
// import handle DB functions from function/db dir
import { addData, getData, deleteData } from './function/db';
// import handle Auth functions from function/auth dir
import { handleLogOut } from './function/auth';
// import pages
import { FriendList, SmsDetail, WriteSms, Auth } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState('로그인 해주세요'); // 현재 user(비로그인/로그아웃시 '로그인 해주세요')
  const [id, setId] = useState(0); // DB에 담길 id
  const [content, setContent] = useState(''); // DB에 담길 content
  const [lists, setLists] = useState([]); // DB에서부터 가져온 data list
  const [isLogin, setIsLogin] = useState(window.sessionStorage.getItem('accessToken'));

  useEffect(() => {
    getData(setLists);
  }, []); // '/' 페이지가 로드될 시 data list 가져옴

  return (
    <div className='relative h-screen w-[768px] bg-red-100 flex-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>메인페이지</div>} />
          <Route path='/login' element={<Auth authType={'login'} setIsLogin={setIsLogin} />} />
          <Route path='/signup' element={<Auth authType={'signup'} />} />
          <Route path='/friend' element={<FriendList />} />
          <Route path='/sms:id' element={<SmsDetail />} />
          <Route path='/write' element={<WriteSms />} />
        </Routes>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin}>
          네비게이션바
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
