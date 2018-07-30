import React, { Component } from 'react';

class App extends Component {

  state = {
    firtName: 'Luis',
    lastName: 'Garzon',
    counter: 'bob'
  }

  render() {
    return (
      <div>
        <h1>State</h1>
        <h2>{this.state.firtName} {this.state.lastName}</h2>
        <input type="number" value = {this.state.counter} />
      </div>
    );
  }
}

export default App;
