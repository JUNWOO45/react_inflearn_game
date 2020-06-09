import React, { Component } from 'react';
import './ResponseCheck.css';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작해보세요.',
    result: []
  };

  timeout;
  startTime;
  endTime;

  onClick = () => {
    const { state, message, result } = this.state;
    if(state === 'waiting') {
      this.setState({ 
        state: 'ready',
        message: '초록색이 되면 클릭하세요.'
      });

      this.timeout = setTimeout(() => {
        this.setState({ 
          state: 'now',
          message: '지금 클릭!'
        });
        
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);

    } else if(state === 'ready') {
      this.setState({ 
        state: 'waiting',
        message: '지금 누르지 마세요.. 다시 시작하려면 클릭!'
      });

      clearTimeout(this.timeout);

    } else if(state === 'now') {
      this.endTime = new Date();
      console.log(this.endTime - this.startTime);
      this.setState( prevState => {
        
        return {
          state: 'waiting',
          message: '클릭해서 시작해보세요.',
          result: [...prevState.result, this.endTime - this.startTime]
        }
      });
    }
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
