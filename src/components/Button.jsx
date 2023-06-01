import React from 'react';

/**
 *
 * @param {*} style Should be created by Tailwind classname
 * @returns
 */
const Button = ({ onClick, children, style }) => {
  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
};

export default Button;
