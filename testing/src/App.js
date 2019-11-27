import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }
  render(){
    //data-test attricute is used as selectors to target specific dom elements
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>{this.state.counter}</h1>
        <button 
          data-test='button'
          onClick = {() => this.setState((state) => ({counter:state.counter + 1}))}
          >Click Me
        </button>
      </div>
    );
  }
}
export default App;