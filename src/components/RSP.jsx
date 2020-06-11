// import React, { Component } from 'react';
import React, { useState, useRef, useEffect } from 'react';
import './RSP.css';

// 클래스 컴포넌트 라이프사이클
//  constructor -> render -> ref -> componentDidMount -> (setState/props바뀔때) -> shouldComponentUpdate -> render -> componentDidUpdate
// 부모 컴포넌트에서 자식컴포넌트 없앨때 -> componentWillUnmount -> 소멸

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px'
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1
};

const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState('0');
  const [score, setScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState('');
  const interval = useRef();

  useEffect(() => { //componentDidMount, conponentDidUpdate 역할
    interval.current = setInterval(startRSP, 100);
    return () => { //componentWillUnmount 역할
      clearInterval(interval.current);
    }
  }, [imgCoord]);

  const startRSP = () => {
      if(imgCoord === rspCoords.바위) {
        setImgCoord(rspCoords.가위);
        setComputerChoice('가위');
      } else if(imgCoord === rspCoords.가위) {
        setImgCoord(rspCoords.보);
        setComputerChoice('보');

      } else if(imgCoord === rspCoords.보) {
        setImgCoord(rspCoords.바위);
        setComputerChoice('바위');
      }
  };

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const computerScore = scores[computerChoice];
    const diff = myScore - computerScore;

    if(diff === 0) {
      // 무승부
      setResult('무승부');
    } else if(diff === 1 || diff === -2) {
      // 패배
      setResult('패배');
      setScore(prevScore => prevScore - 1);
    } else {
      // 승리
      setResult('승리');
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      interval.current = setInterval(startRSP(), 100);
    }, 2000)
  }


  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RSP;


// class RSP extends Component {
//   // state = {
//   //   result: '',
//   //   imgCoord: '0',
//   //   score: 0,
//   //   computerChoice: ''
//   // };

//   // interval;

//   // startRSP = () => {
//   //   return (() => {
//   //     const { imgCoord } = this.state;

//   //     if(imgCoord === rspCoords.바위) {
//   //       this.setState({ 
//   //         imgCoord: rspCoords.가위,
//   //         computerChoice: '가위'
//   //       });
//   //     } else if(imgCoord === rspCoords.가위) {
//   //       this.setState({ 
//   //         imgCoord: rspCoords.보,
//   //         computerChoice: '보'
//   //       });
//   //     } else if(imgCoord === rspCoords.보) {
//   //       this.setState({ 
//   //         imgCoord: rspCoords.바위,
//   //         computerChoice: '바위'
//   //       });
//   //     }
//   //   });
//   // }

//   componentDidMount() {
//     this.interval = setInterval(this.startRSP(), 100);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   // onClickBtn = (choice) => () => {
//   //   clearInterval(this.interval);
//   //   const myScore = scores[choice];
//   //   const computerScore = scores[this.state.computerChoice];
//   //   const diff = myScore - computerScore;

//   //   if(diff === 0) {
//   //     // 무승부
//   //     this.setState({ 
//   //       result: '무승부'
//   //     });
//   //   } else if(diff === 1 || diff === -2) {
//   //     // 패배
//   //     this.setState(prevState => {
//   //       return {
//   //         result: '패배',
//   //         score: prevState.score - 1
//   //       }
//   //     });
//   //   } else {
//   //     // 승리
//   //     this.setState(prevState => { 
//   //       return {
//   //         result: '승리',
//   //         score: prevState.score + 1
//   //       }
//   //     });
//   //   }

//   //   setTimeout(() => {
//   //     this.interval = setInterval(this.startRSP(), 100);
//   //   }, 2000)

//   // }

//   render() { 
//     const { result, score, imgCoord } = this.state;

//     return ( 
//       <>
//         <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
//         <div>
//           <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
//           <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
//           <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
//         </div>
//         <div>{result}</div>
//         <div>현재 {score}점</div>
//       </>
//     );
//   }
// }
 
// export default RSP;