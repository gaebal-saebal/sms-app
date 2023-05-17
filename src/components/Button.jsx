import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button className='w-18' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
