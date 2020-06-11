import React, { Component } from 'react';
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

class RSP extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0
  };

  interval;

  componentDidMount() {
    this.interval = setInterval(() => {
      const { imgCoord } = this.state;

      if(imgCoord === rspCoords.바위) {
        this.setState({ 
          imgCoord: rspCoords.가위
        });
      } else if(imgCoord === rspCoords.가위) {
        this.setState({ 
          imgCoord: rspCoords.보
        });
      } else if(imgCoord === rspCoords.보) {
        this.setState({ 
          imgCoord: rspCoords.바위
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClickBtn = (item) => {
    console.log(item);
  }

  render() { 
    const { result, score, imgCoord } = this.state;

    return ( 
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
        <div>
          <button id="rock" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={() => this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}
 
export default RSP;