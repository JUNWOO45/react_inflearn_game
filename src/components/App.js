import React from 'react';
import Gugudan from './Gugudan';
import GugudanHooks from './GugudanHooks';
import WordRelay from './WordRelay';
import WordRelayHooks from './WordRelayHooks';
import NumberBaseball from './NumberBaseball';
import ResponseCheck from './ResponseCheck';
import RSP from './RSP';

class App extends React.Component {
  state = { 
    RSPToggled: false  
  };

  toggleRSP = () => {
    this.setState({ RSPToggled: !this.state.RSPToggled  });
  }

  renderRSP = () => {
    return this.state.RSPToggled ? <RSP /> : null;
  }

  render() {
    return ( 
      <div>
        <Gugudan />
        <GugudanHooks />
        <WordRelay />
        <WordRelayHooks />
        <NumberBaseball />
        <ResponseCheck />
        <button onClick={ this.toggleRSP }>가위바위보</button>
        { this.renderRSP() }
      </div> 
    );
  }
}
 
export default App;
