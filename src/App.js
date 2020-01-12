import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: ['HELLO', 'Second', 'Third'], typed: "" };
  }
  render() {
    return (
      <div className="App">
        <h1> Todo App </h1>
        <input type="text" value={this.state.typed} onChange={(evt) => {
          console.log(evt.target.value);
          this.setState({ typed: evt.target.value });
        }}></input>
        <button onClick={() => {
          this.setState({ data: this.state.data.concat(this.state.typed), typed: "" });
        }}>Add</button>
        <ul>
          {this.state.data.map((d, i) => <li key={i}> {d} <a href="#" onClick={() => {
            let new_data = [...this.state.data];
            new_data.splice(i, 1);
            this.setState({data: new_data});
          }}>x</a> </li>)}
        </ul>
      </div>
    );
  }
}


export default App;
