import React, { useState } from 'react';
import { addData } from '../function/db';

const WriteSms = () => {
  const [content, setContent] = useState('');
  const [recieverId, setRecieverId] = useState('');

  let userId = window.sessionStorage.getItem('userId');

  const handleChangeText = (e) => {
    setContent(e.target.value);
  };

  const handleChangeReciever = (e) => {
    setRecieverId(e.target.value);
  };

  return (
    <div className='page-content scrollbar-hidden'>
      <input onChange={(e) => handleChangeText(e)} placeholder='문자내용' />
      <input onChange={(e) => handleChangeReciever(e)} placeholder='받는사람' />
      <button onClick={() => addData(content, recieverId, userId, null, 'sms')}>보내기</button>
    </div>
  );
};

export default WriteSms;
