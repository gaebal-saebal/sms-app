import React, { useEffect, useState } from 'react';
import { getData } from '../function/db';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Link } from 'react-router-dom';
//TODO: 문자 메시지 20자 까지만 보이게 하기 + 각 문자 메시지 클릭하면 상세로 들어가서 답장/삭제 할 수 있게 만들기

const SmsDetail = () => {
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

  return (
    <div className='page-content scrollbar-hidden'>
      <div>리스트네요</div>
      {sms.length > 0
        ? sms.map((msg, i) => {
            return (
              <div key={i}>
                <div>내용 : {msg.content}</div>
                <div>받은시간 : {msg.date}</div>
                <div>보낸사람 : {isName(msg.senderId)}</div>
                <Link to={`/write/${msg.senderId}`}>답장 보내기</Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SmsDetail;
