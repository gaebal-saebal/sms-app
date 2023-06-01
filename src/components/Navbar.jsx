import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>홈으로</Link>
      <Link to='/friend'>친구목록</Link>
      <Link to='/login'>로그인</Link>
      <Link to='/signup'>회원가입</Link>
    </div>
  );
};

export default Navbar;
