import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { Link } from 'react-router-dom';

const FriendList = () => {
  const [users, setUsers] = useState([]);
  const [usersTotal, setUsersTotal] = useState([]);
  let userId = window.sessionStorage.getItem('userId');

  function isName(senderId) {
    for (let i = 0; i < usersTotal.length; i++) {
      if (senderId === usersTotal[i].userId) {
        return usersTotal[i].email;
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach((doc) => {
        // 가져온 모든 문서들을 확인
        setUsersTotal((prev) => [...prev, doc.data()]);
        if (userId === doc.data().userId) {
          setUsers(doc.data().address);
        }
      });
    }
    fetchData();
  }, []);

  return (
    <div className='page-content scrollbar-hidden'>
      <div className='mb-6 text-5xl'>주소록</div>
      {users.map((user, i) => {
        return (
          <div className='flex justify-center w-full' key={i}>
            <div className='w-4/6 px-16 mb-1 duration-500 bg-white border-2 rounded-lg hover:bg-slate-100'>
              {isName(user)}
            </div>
            <Link to={`/write/${user}`} className='flex items-center justify-center w-1/6 ml-5'>
              <div className='w-1/2 text-center duration-500 hover:text-5xl'>💌</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FriendList;
