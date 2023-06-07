import React, { useEffect, useState } from 'react';
import { getData } from '../function/db';

const SmsDetail = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getData(setLists);
  }, []);

  return <div>{lists.content}</div>;
};

export default SmsDetail;
