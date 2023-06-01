import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='absolute bottom-0 flex justify-center w-full h-16 bg-slate-400'>
      <Link to='/' className='w-1/4 h-full flex-center'>
        홈으로
      </Link>
      <Link to='/friend' className='w-1/4 h-full flex-center'>
        친구목록
      </Link>
      <Link to='/login' className='w-1/4 h-full flex-center'>
        로그인
      </Link>
      <Link to='/signup' className='w-1/4 h-full flex-center'>
        회원가입
      </Link>
    </div>
  );
};

export default Navbar;
