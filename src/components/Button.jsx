import React from 'react';

//TODO: props style 이름 변경
/**
 *
 * @param {*} style Should be created by Tailwind classname
 * @returns
 */
const Button = ({ children, style, ...rest }) => {
  return <button className={`${style} px-4 w-64 mb-4 rounded-lg`}>{children}</button>;
};

export default Button;
