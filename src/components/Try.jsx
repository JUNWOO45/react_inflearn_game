import React from 'react';

const Try = ({item, index}) => {
  return (
    <li key={index}>
      <div>{item.try}</div>
      <div>{item.result}</div>
    </li>
  )
};

export default Try;
 