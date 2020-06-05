import React from 'react';
import Gugudan from './Gugudan';
import GugudanHooks from './GugudanHooks';

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
      </div> 
    );
  }
}
 
export default App;
