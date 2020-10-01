import React from 'react';

const FirstTitle = ({ title, className }) => {
  return <h1 className={className + ' first-title'}>{title}</h1>;
};

export default FirstTitle;
