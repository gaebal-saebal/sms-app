import React from 'react';
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const SmsDetail = () => {
  const [queryString] = useSearchParams();
  const createdAt = queryString.get('createdAt'); // 리뷰 작성 시간
  const recieverId = useParams(); // 리뷰 받은 사람의 id

  const [sms, setSms] = useState({});

  /*
  TODO:
  db - sms에서 createdAt과 recieverId를 사용해 일치하는 문자 메시지를 가져와 화면에 출력해주세요.
  새로운 함수는 function/db/getSmsDetail.js로 만들어서 사용해주세요.
  새 함수인 getSmsDetail 함수는 params로 setSms와 createdAt, recieverId를 받아주세요.
  새 함수 내에서는 1. db에서 sms 중 createdAt이 일치하는 document를 가져오고,
  1. 에서 recieverId가 params로 받은 recieverId인 것을 filter해서,
  setSms로 sms 상태에 객체 형식으로 넣어주세요.
  */

  return <div className='page-content scrollbar-hidden'>상세 문자메시지 페이지</div>;
};

export default SmsDetail;
