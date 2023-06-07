import React, { useEffect, useState } from 'react';
import { getData } from '../function/db';

const SmsDetail = () => {
  const [lists, setLists] = useState([]);
  const [sms, setSms] = useState([]);

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
    arr2.sort((a, b) => a - b);
    // arr2 : 작성일자 순서대로 정렬된 createdAt만으로 구성된 배열
  };

  useEffect(() => {
    getData(setLists, 'sms');
  }, []);

  useEffect(() => {
    getSms();
  }, [lists]);

  console.log(sms);

  return (
    <div>
      <div>리스트네요</div>
      {sms.map((msg, i) => {
        return (
          <div key={i}>
            <div>내용 : {msg.content}</div>
            <div>받은시간 : {msg.date}</div>
            <div>보낸사람 : {msg.senderId}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SmsDetail;
