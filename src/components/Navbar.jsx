import React from 'react';
import { Link } from 'react-router-dom';
import { handleLogOut } from '../function/auth';

const Navbar = ({ isLogin, setIsLogin }) => {
  return (
    <div className='absolute bottom-0 flex justify-between w-full h-16 px-10 align-center bg-main-blue'>
      <Link to='/' className='h-full flex-center'>
        홈으로
      </Link>
      <Link to='/friend' className='h-full flex-center'>
        친구목록
      </Link>
      {isLogin ? (
        <div className='flex-center hover:cursor-pointer' onClick={() => handleLogOut(setIsLogin)}>
          로그아웃
        </div>
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
