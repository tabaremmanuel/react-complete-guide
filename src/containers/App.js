import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import Person from "../components/Persons/Person/Person";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "ffasd", name: "Max", age: 28 },
      { id: "gasfsdf", name: "Manu", age: 29 },
      { id: "asdagsag", name: "Steph", age: 26 }
    ],

    otherState: "some other value",
    showPersons: false
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if( this.state.showPersons ){
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          persons={this.state.persons} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App'));
  }
}

export default App;
