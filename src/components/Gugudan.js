import React, { Component } from 'react';

class Gugudan extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      first: Math.ceil(Math.random() * 9),
      last: Math.ceil(Math.random() * 9),
      value: '',
      result: '',
     }
  }

  input;

  onKeyDown = (e) => {
    this.setState({ value: Number(e.target.value) });
  }

  calculate = (e) => {
    e.preventDefault();
    if(this.state.first * this.state.last === this.state.value) {
      this.setState((prevState) => {
        return {
          result: '딩동댕!' + prevState.value, 
          first: Math.ceil(Math.random() * 9), 
          last: Math.ceil(Math.random() * 9), 
          value: ''
        }
       })
    } else {
      
      this.setState({ 
        result: '땡', 
        value: '' 
      });
    } 

    this.input.focus();
  }

  render() { 
    return ( 
      <>
        {this.state.first} 곱하기 {this.state.last}는?
        <form onClick={this.calculate}>
          <input ref={c => this.input = c} type="number" value={this.state.value} onChange={this.onKeyDown}/>
          <button>입력</button>
        </form>
        <div>
          결과: {this.state.result}
        </div>
      </> 
    );
  }
}
 
export default Gugudan;