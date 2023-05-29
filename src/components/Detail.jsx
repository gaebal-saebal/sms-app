import React from 'react';

const Detail = ({ children }) => {
  return (
    <span className='relative flex w-96 h-96'>
      <img src='/phone.png' className='absolute w-auto h-96' />
      <div className='absolute w-40 px-4 py-2 h-36 top-20 left-28'>{children}</div>
    </span>
  );
};

export default Detail;
