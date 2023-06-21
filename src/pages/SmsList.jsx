import React, { useEffect, useState } from 'react';
import { getData } from '../function/db';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Link } from 'react-router-dom';

const SmsList = () => {
  const [lists, setLists] = useState([]);
  const [sms, setSms] = useState([]);
  const [users, setUsers] = useState([]);

  let userId = window.sessionStorage.getItem('userId');

  const getSms = () => {
    const arr = new Array();
    if (lists.length > 0) {
      lists.forEach((list) => {
        if (list.recieverId === userId) {
          arr.push(list);
        }
      });
    }
    const arr2 = arr.map((e) => {
      return e.createdAt;
    });
    arr2.sort((a, b) => b - a);
    // arr2 : 작성일자 순서대로 정렬된 createdAt만으로 구성된 배열

    const arr3 = new Array();
    arr2.forEach((e) => {
      lists.forEach((list) => {
        if (list.createdAt === e) {
          arr3.push(list);
        }
      });
    });
    setSms(arr3);
  };

  function isName(senderId) {
    for (let i = 0; i < users.length; i++) {
      if (senderId === users[i].userId) {
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

  useEffect(() => {
    getData(setLists, 'sms');
    getUserList();
  }, []);

  useEffect(() => {
    getSms();
  }, [lists]);

  return sms.length > 0 ? (
    <div className='page-content scrollbar-hidden'>
      {sms.map((msg, idx) => {
        return (
          <div className='flex justify-center w-full' key={idx}>
            <Link
              className='w-4/6 px-16 mb-1 duration-500 bg-white border-2 rounded-lg hover:bg-slate-100'
              to={`/sms-detail/${msg.recieverId}?createdAt=${msg.createdAt}`}
            >
              <div className='truncate'>{msg.content}</div>
              <div className='flex justify-between text-xl text-gray-400'>
                <div>{msg.date}</div>
                <div>{isName(msg.senderId)}</div>
              </div>
              {/* <Link to={`/write/${msg.senderId}`}>답장 보내기</Link> */}
            </Link>
            <button className='flex items-center justify-center w-1/6 ml-5'>
              <img className='w-1/2 duration-500 hover:w-2/3' src='/address.png' alt='logo' />
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <div className='pt-40 page-content scrollbar-hidden'>
      <img
        className='w-1/2 rounded-xl'
        src='https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDZfMjQ2/MDAxNTYyMzczMjgzNTgx.IXblXaUMmHKhpV4kJd4B8V3_LHUFxTgZpMWAM-4sl9Ig.amTnOFfmbg8Y8e64xXVTU02BYthZT1KtDvhBBsXX7bUg.JPEG.ordo1194/1562373282776.jpg?type=w800'
        alt='alert'
      />
      <div>아직 친구와 나눈 문자 메시지가 없어요.</div>
      <Link className='p-2 text-white rounded-lg bg-main-pink' to='/'>
        대화할 친구 찾으러 가기
      </Link>
    </div>
  );
};

export default SmsList;
