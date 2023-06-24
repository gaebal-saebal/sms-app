import React, { useEffect, useState } from 'react';
import { addData } from '../function/db';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
    if (e.target.value.length <= 40) {
      setContent(e.target.value);
    } else {
      alert('글자수가 40자를 초과하였습니다.');
      let result = e.target.value.substr(0, 40);
      e.target.value = result;
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  useEffect(() => {
    setRecieverId(isName(reciever));
  }, [users]);

  if (userId) {
    return (
      <div className='page-content scrollbar-hidden'>
        {recieverId !== 'main@gaesae.com' ? (
          <div>{`${recieverId} 님께 보낼 메세지`}</div>
        ) : (
          <div>익명의 모두에게 보낼 메시지를 작성해주세요!</div>
        )}
        <div className='relative flex flex-col items-center w-full '>
          <img src='/phone.png' alt='handphoneImg' className='absolute w-full' />
          <div className='bg-white w-[227px] h-[215px] mt-[120px] px-3 mb-2 flex flex-col rounded-xl z-10'>
            <textarea
              onChange={(e) => handleChangeText(e)}
              className='pt-2 text-3xl resize-none h-5/6 focus:outline-none'
              placeholder='문자내용'
            />
            <span className='text-xl text-gray-400 h-1/6'>{content.length}/40</span>
          </div>
        </div>
        <div className='w-[250px] z-10 flex justify-between px-3'>
          <button
            onClick={() => {
              addData(content, reciever, userId, null, 'sms');
              navigate('/');
            }}
            className='w-16 h-10 text-2xl text-center text-white bg-green-900 border-4 border-white rounded-3xl'
          >
            전송
          </button>
          <Link
            to='/sms'
            className='w-16 h-10 text-2xl text-center text-white bg-red-600 border-4 border-white rounded-3xl'
          >
            취소
          </Link>
        </div>

        {/* <textarea
          className='resize-none'
          onChange={(e) => handleChangeText(e)}
          placeholder='문자내용'
        /> */}
        {/* <button
          onClick={() => {
            addData(content, reciever, userId, null, 'sms');
            navigate('/');
          }}
        >
          보내기
        </button> */}
      </div>
    );
  } else {
    return (
      <div className='page-content scrollbar-hidden'>
        <div>모두에게 문자메시지를 보내기 위해서 로그인 해주세요!</div>
        <Link className='p-2 text-white rounded-lg bg-main-pink' to='/login'>
          로그인하러 가기
        </Link>
      </div>
    );
  }
};

export default WriteSms;
