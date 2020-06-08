import React from 'react';
import Gugudan from './Gugudan';
import GugudanHooks from './GugudanHooks';
import WordRelay from './WordRelay';
import WordRelayHooks from './WordRelayHooks';
import NumberBaseball from './NumberBaseball';
import ResponseCheck from './ResponseCheck';

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
        <NumberBaseball />
        <ResponseCheck />
      </div> 
    );
  }
}
 
export default App;
