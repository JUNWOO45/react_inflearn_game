import React from 'react';
import { useState, useRef} from 'react';

const WordRelayHooks = () => {
  const [word, setWord] = useState('박준우');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const inputRef = useRef(null);

  const calculate = (e) => {
    e.preventDefault();

    if(value.slice(0, 1) === word.slice(-1)) {
      setWord(value);
      setValue('');
      setResult('딩동댕');
    } else {
      setResult('땡!!!!!');
    }

    inputRef.current.focus();
  }

  const onKeyDown = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <br />
      <div>{word}</div>
      <form onSubmit={calculate}>
        <input ref={inputRef} type="text" value={value} onChange={onKeyDown}></input>
        <button>입력</button>
      </form>
      <div>결과 : {result}</div>
    </>
  );
};

export default WordRelayHooks;
