import React, { useState } from 'react';
import { addData } from '../function/db';

const WriteSms = () => {
  const [content, setContent] = useState('');
  const [reciever, setReciever] = useState('');

  const handleChangeText = (e) => {
    setContent(e.target.value);
  };

  const handleChangeReciever = (e) => {
    setReciever(e.target.value);
  };

  return (
    <div>
      <input onChange={(e) => handleChangeText(e)} placeholder='문자내용' />
      <input onChange={(e) => handleChangeReciever(e)} placeholder='받는사람' />
      <button onClick={() => addData(content, reciever, 'sms')}>보내기</button>
    </div>
  );
};

export default WriteSms;
