import React, { Component } from 'react';

class WordRelay extends Component {
  state = {
    word: '박준우',
    value: '',
    result: '',
  };

  calculate = (e) => {
    e.preventDefault();
    console.log(this.state.value.slice(0), this.state.word.slice(-1))
    if(this.state.value.slice(0, 1) === this.state.word.slice(-1)) {
      this.setState({ word: this.state.value, value: '', result: '딩동댕' });
    } else {
      this.setState({ result: '땡!!!' });
    }

    this.input.focus(); 
  }

  onKeyDown = (e) => {
    this.setState({ value: e.target.value });
  }

  input;

  onRefInput = (c) => {
    this.input = c;
  }

  render() { 
    console.log('렌더링')
    return ( 
      <>
        <br />
        <div>{this.state.word}</div>
        <form onSubmit={this.calculate}>
          <input ref={this.onRefInput}type="text" value={this.state.value} onChange={this.onKeyDown}></input>
          <button>입력</button>
        </form>
        <div>결과 : {this.state.result}</div>
      </>
    );
  }
}
 
export default WordRelay;