import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import getSmsDetail from '../function/db/getSmsDetail';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const SmsDetail = () => {
  const [queryString] = useSearchParams();
  const createdAt = queryString.get('createdAt'); // sms 작성 시간
  const recieverId = useParams().id; // sms 받은 사람의 id

  const [sms, setSms] = useState([]);
  const [users, setUsers] = useState([]);

  async function getUserList() {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      // 가져온 모든 문서들을 확인
      setUsers((prev) => [...prev, doc.data()]);
    });
  }

  useEffect(() => {
    getSmsDetail(setSms, createdAt, recieverId);
    getUserList();
  }, []);
  console.log(sms);

  function isName(senderId) {
    for (let i = 0; i < users.length; i++) {
      if (senderId === users[i].userId) {
        return users[i].email;
      }
    }
  }

  /*
  1. TODO:
  db - sms에서 createdAt과 recieverId를 사용해 일치하는 문자 메시지를 가져와 화면에 출력해주세요.
  새로운 함수는 function/db/getSmsDetail.js로 만들어서 사용해주세요.
  새 함수인 getSmsDetail 함수는 params로 setSms와 createdAt, recieverId를 받아주세요.
  새 함수 내에서는 1. db에서 sms 중 createdAt이 일치하는 document를 가져오고,
  1. 에서 recieverId가 params로 받은 recieverId인 것을 filter해서,
  setSms로 sms 상태에 배열 형식으로 넣어주세요.
  */

  /*
  2. TODO: 그 메시지를 보낸 사람에게 답장을 보내는 기능을 추가해주세요.
  */
  /*
  3. TODO: 해당 메시지를 삭제하는 기능을 추가해주세요.
  */

  return (
    <div className='page-content scrollbar-hidden'>
      <div className='relative flex flex-col items-center w-full '>
        <img src='/phone.png' alt='handphoneImg' className='absolute w-full' />
        {sms.length > 0 ? (
          <>
            <div className='bg-white w-[250px] h-[260px] mt-20 px-5 pt-12 pb-2 flex flex-col'>
              <div className='text-3xl h-3/4 '>{sms[0].content}</div>
              <div className='flex flex-col items-end text-xl text-gray-400 h-1/4'>
                <div className='h-1/2'>{sms[0].date}</div>
                <div className='h-1/2'>{isName(sms[0].senderId)}</div>
              </div>
            </div>
            <div className='w-[250px] z-10 flex justify-between px-3'>
              <button className='w-16 h-10 text-2xl text-white bg-green-900 border-4 border-white rounded-3xl'>
                답장
              </button>
              <button className='w-16 h-10 text-2xl text-white bg-red-600 border-4 border-white rounded-3xl'>
                삭제
              </button>
            </div>
          </>
        ) : (
          <div>로딩중입니다</div>
        )}
      </div>
    </div>
  );
};

export default SmsDetail;
