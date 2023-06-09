import React, { useState, useEffect } from 'react';
// import components from componets dir
import { Navbar } from './components';
// import handle DB functions from function/db dir
import { addData, getData, deleteData } from './function/db';
// import handle Auth functions from function/auth dir
import { handleLogOut } from './function/auth';
// import pages
import { FriendList, SmsList, WriteSms, Auth, Home, SmsDetail } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [id, setId] = useState(0); // DB에 담길 id
  const [content, setContent] = useState(''); // DB에 담길 content
  const [isLogin, setIsLogin] = useState(window.sessionStorage.getItem('accessToken'));

  return (
    <div className='relative bg-[#fff4f6]  h-full w-[576px] pb-16 flex-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Auth authType={'login'} setIsLogin={setIsLogin} />} />
          <Route path='/signup' element={<Auth authType={'signup'} setIsLogin={setIsLogin} />} />
          <Route path='/friend' element={<FriendList />} />
          <Route path='/sms' element={<SmsList />} />
          <Route path='/sms-detail/:id' element={<SmsDetail />} />
          <Route path='/write/:id' element={<WriteSms />} />
        </Routes>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin}>
          네비게이션바
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
