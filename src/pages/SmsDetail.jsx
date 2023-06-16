import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const SmsDetail = () => {
  const [queryString] = useSearchParams();
  const createdAt = queryString.get('createdAt'); // 리뷰 작성 시간
  const recieverId = useParams(); // 리뷰 받은 사람의 id

  /*
  TODO:
  db - sms에서 createdAt과 recieverId를 사용해 일치하는 문자 메시지를 가져와 화면에 출력해주세요.
  새로운 함수는 function/db/getSmsDetail.js로 만들어서 사용해주세요.
  */

  return <div className='page-content scrollbar-hidden'>상세 문자메시지 페이지</div>;
};

export default SmsDetail;
