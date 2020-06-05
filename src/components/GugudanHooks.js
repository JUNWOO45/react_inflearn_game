import React from 'react';

const GugudanHooks = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null);

  const calculate = (e) => {
    e.preventDefault();
    if(Number(first) * Number(second) === Number(value)) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      setResult('딩동댕! ' + result);
    } else {
      setResult('땡');
      setValue('');
    } 

    inputRef.current.focus();
  }

  const onKeyDown = (e) => {
    setValue(e.target.value);
  }

  console.log('rendering')

  return (
      <>
        <div>{first} 곱하기 {second}는?</div>
        <form onSubmit={calculate}>
          <input ref={inputRef} type="number" onChange={onKeyDown} value={value}></input>
          <button>입력</button>
        </form>
        <div>
          결과 : {result}
        </div>
      </>
    );
}

export default GugudanHooks;
