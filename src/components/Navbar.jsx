import React from 'react';
import { Link } from 'react-router-dom';
import { handleLogOut } from '../function/auth';
import { Button } from './';

const Navbar = ({ isLogin, setIsLogin }) => {
  return (
    <div className='absolute bottom-0 flex justify-between w-full h-16 px-10 bg-slate-400'>
      <Link to='/' className='h-full flex-center'>
        홈으로
      </Link>
      <Link to='/friend' className='h-full flex-center'>
        친구목록
      </Link>
      {isLogin ? (
        <Button onClick={() => handleLogOut(setIsLogin)}>로그아웃</Button>
      ) : (
        <>
          <Link to='/login' className='h-full flex-center'>
            로그인
          </Link>
          <Link to='/signup' className='h-full flex-center'>
            회원가입
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
