import React, { Component } from 'react';
import './ResponseCheck.css';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작해보세요.',
    result: []
  };

  onClick = () => {

  };

  renderAverage = () => {
    return (
      this.state.result.length !== 0 &&
      <div>
        평균시간: { this.state.result.reduce((a, c) => a + c, 0) / this.state.result.length }ms
      </div>
    )
  }
  render() { 
    const { state, message } = this.state;

    return ( 
      <>
        <div onClick={this.onClick} className={ state }>
          { message }
        </div>
        {this.renderAverage()}
      </>
    );
  }
}
 
export default ResponseCheck;
