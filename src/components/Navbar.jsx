import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { handleLogOut } from '../function/auth';

const Navbar = ({ isLogin, setIsLogin }) => {
  const location = useLocation();
  const urlName = location.pathname;

  return (
    <div className='absolute bottom-0 z-20 flex justify-between w-full h-16 px-10 align-center bg-main-blue'>
      <Link
        to='/'
        className={`h-full flex-center ${
          urlName === '/' ? 'text-white text-4xl' : 'hover:text-white'
        }`}
      >
        홈으로
      </Link>
      <Link
        to='/friend'
        className={`h-full flex-center ${
          urlName === '/friend' ? 'text-white text-4xl' : 'hover:text-white'
        }`}
      >
        친구목록
      </Link>
      {isLogin ? (
        <>
          <Link
            to='/sms'
            className={`h-full flex-center ${
              urlName === '/sms' ? 'text-white text-4xl' : 'hover:text-white'
            }`}
          >
            SMS
          </Link>
          <div
            className='flex-center hover:cursor-pointer hover:text-white'
            onClick={() => handleLogOut(setIsLogin)}
          >
            로그아웃
          </div>
        </>
      ) : (
        <>
          <Link
            to='/login'
            className={`h-full flex-center ${
              urlName === '/login' ? 'text-white' : 'hover:text-white'
            }`}
          >
            로그인
          </Link>
          <Link
            to='/signup'
            className={`h-full flex-center ${
              urlName === '/signup' ? 'text-white' : 'hover:text-white'
            }`}
          >
            회원가입
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
