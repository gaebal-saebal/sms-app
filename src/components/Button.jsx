import React from 'react';

//TODO: props style 이름 변경
/**
 *
 * @param {*} customStyle Should be created by Tailwind classname
 * @returns
 */
const Button = ({ onClick, children, customStyle }) => {
  return (
    <button onClick={onClick} className={`${customStyle} px-4 w-64 mb-4 rounded-lg`}>
      {children}
    </button>
  );
};

export default Button;
