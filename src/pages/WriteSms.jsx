import React, { useEffect, useState } from 'react';
import { addData } from '../function/db';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useParams, useNavigate } from 'react-router-dom';

const WriteSms = () => {
  const [content, setContent] = useState('');
  const [recieverId, setRecieverId] = useState('');
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  let userId = window.sessionStorage.getItem('userId');
  const params = useParams();
  let reciever = params.id;

  function isName(reciever) {
    for (let i = 0; i < users.length; i++) {
      if (reciever === users[i].userId) {
        return users[i].email;
      }
    }
  }

  async function getUserList() {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      // 가져온 모든 문서들을 확인
      setUsers((prev) => [...prev, doc.data()]);
    });
  }

  const handleChangeText = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    getUserList();
  }, []);

  useEffect(() => {
    setRecieverId(isName(reciever));
  }, [users]);

  return (
    <div className='page-content scrollbar-hidden'>
      <div>{recieverId}님께 보낼 메세지</div>
      <input onChange={(e) => handleChangeText(e)} placeholder='문자내용' />

      <button
        onClick={() => {
          addData(content, reciever, userId, null, 'sms');
          navigate('/');
        }}
      >
        보내기
      </button>
    </div>
  );
};

export default WriteSms;
