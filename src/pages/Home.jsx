import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../function/db';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import addAddress from '../function/db/addAddress';

const Home = () => {
  const [lists, setLists] = useState([]);
  const [sms, setSms] = useState([]);
  const [users, setUsers] = useState([]);
  /*
  1) TODO: 메인 페이지에 공개 문자를 불러오는 기능을 추가해주세요.
  userId : XJUH0riK0KRkFtg3YsxybKCJt072 인 계정이 받는 sms를 보여주시면 됩니다.
  공개 문자를 작성하는 버튼과 기능은 아래 Link 내에 완성되어 있으니 확인해주세요!

  getData에 setLists 상태변경함수와 type으로 'sms'를 보내면 lists 상태에 모든 sms를 가져올 수 있어요.
  getData(setLists, 'sms')
  userId를 사용해서 해당 user가 받은 sms를 filter하는 작업은 src/pages/SmsList.jsx에서 했었죠?
  lists에서 receiverId가 'XJUH0riK0KRkFtg3YsxybKCJt072'인 sms만 filter하시면 됩니다!
  */

  /*
  2) TODO: 공개 문자를 클릭해서 그 문자를 작성한 사람에게 SMS를 보내는 기능을 추가해주세요.
  */

  async function getUserList() {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      // 가져온 모든 문서들을 확인
      setUsers((prev) => [...prev, doc.data()]);
    });
  }

  const anonymousSms = () => {
    const arr = [];
    if (lists.length > 0) {
      lists.forEach((list) => {
        if (list.recieverId === 'XJUH0riK0KRkFtg3YsxybKCJt072') {
          arr.push(list);
        }
      });
    }
    const sortArr = arr.map((e) => {
      return e.createdAt;
    });
    sortArr.sort((a, b) => b - a);

    const result = [];
    sortArr.forEach((sort) => {
      lists.forEach((list) => {
        if (list.createdAt === sort) {
          result.push(list);
        }
      });
    });

    setSms(result);
  };

  const addFriend = (e) => {
    addAddress(e.target.alt);
  };

  function isName(senderId) {
    for (let i = 0; i < users.length; i++) {
      if (senderId === users[i].userId) {
        return users[i].email;
      }
    }
  }

  useEffect(() => {
    getData(setLists, 'sms');
    getUserList();
  }, []);

  useEffect(() => {
    anonymousSms();
  }, [lists]);

  return (
    <div className='page-content scrollbar-hidden'>
      <Link
        className='p-2 mb-5 text-white rounded-lg bg-main-pink'
        to='/write/XJUH0riK0KRkFtg3YsxybKCJt072'
      >
        익명의 모두에게 문자 보내기
      </Link>
      {sms.map((item, idx) => {
        return (
          <div className='flex justify-center w-full' key={idx}>
            <Link
              to={`/write/${item.senderId}`}
              className='w-4/6 px-16 mb-1 duration-500 bg-white border-2 rounded-lg hover:bg-slate-100'
            >
              <div className='truncate'>{item.content}</div>
              <div className='flex justify-between text-xl text-gray-400'>
                <div>{item.date}</div>
                <div>{isName(item.senderId)}</div>
              </div>
            </Link>
            <button className='flex items-center justify-center w-1/6 ml-5'>
              <img
                className='w-1/2 duration-500 hover:w-2/3'
                src='/address.png'
                alt={item.senderId}
                onClick={(e) => {
                  addFriend(e);
                }}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
