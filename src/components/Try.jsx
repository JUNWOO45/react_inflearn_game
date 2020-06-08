import React, { PureComponent, memo } from 'react';

const Try = memo(({item, index}) => {
  return (
    <li key={index}>
      <div>{item.try}</div>
      <div>{item.result}</div>
    </li>
  )
});

export default Try;
 