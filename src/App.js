import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 26}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = newName => {
    // console.log('This was clicked!');
    // this.state.persons[0].name = 'Xam';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephon', age: 26}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximus')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={ this.state.persons[0].age} />
        <Person click={this.switchNameHandler.bind(this, 'Maxine')} name={this.state.persons[1].name} age={ this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={ this.state.persons[2].age}></Person>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App'));
  }
}

export default App;
