import React from 'react';
import Gugudan from './Gugudan';
import GugudanHooks from './GugudanHooks';
import WordRelay from './WordRelay';
import WordRelayHooks from './WordRelayHooks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Gugudan />
        <GugudanHooks />
        <WordRelay />
        <WordRelayHooks />
      </div> 
    );
  }
}
 
export default App;
