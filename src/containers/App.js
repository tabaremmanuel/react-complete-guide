import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from '../hoc/WithClass';
// import Person from "../components/Persons/Person/Person";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: "ffasd", name: "Max", age: 28 },
      { id: "gasfsdf", name: "Manu", age: 29 },
      { id: "asdagsag", name: "Steph", age: 26 }
    ],

    otherState: "some other value",
    showPersons: false,
    showCokpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // UNSAFE_componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
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
    console.log('[App.js] render');
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
      <WithClass classes={classes.App}>
        <button
          children="toggleCockpit"
          onClick={()=> {
            this.setState({ showCokpit: false })
          }} />
        { this.state.showCokpit ?
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler} />
          : null
        }
        { persons }
      </WithClass>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App'));
  }
}

export default App;
