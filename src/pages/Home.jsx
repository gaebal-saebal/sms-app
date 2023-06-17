import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [lists, setLists] = useState([]);
  /*
  TODO: 메인 페이지에 공개 문자를 불러오는 기능을 추가해주세요.
  userId : XJUH0riK0KRkFtg3YsxybKCJt072 인 계정이 받는 sms를 보여주시면 됩니다.
  공개 문자를 작성하는 버튼과 기능은 아래 Link 내에 완성되어 있으니 확인해주세요!

  getData에 setLists 상태변경함수와 type으로 'sms'를 보내면 lists 상태에 모든 sms를 가져올 수 있어요.
  getData(setLists, 'sms')
  userId를 사용해서 해당 user가 받은 sms를 filter하는 작업은 src/pages/SmsList.jsx에서 했었죠?
  lists에서 receiverId가 'XJUH0riK0KRkFtg3YsxybKCJt072'인 sms만 filter하시면 됩니다!
  */
  return (
    <div className='page-content scrollbar-hidden'>
      <div>메인페이지</div>
      <Link
        className='p-2 text-white rounded-lg bg-main-pink'
        to='/write/XJUH0riK0KRkFtg3YsxybKCJt072'
      >
        익명의 모두에게 문자 보내기
      </Link>
    </div>
  );
};

export default Home;
