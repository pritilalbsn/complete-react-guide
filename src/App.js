import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Pritilal', age: '28' },
      { name: 'Saheblal', age: '30' },
      { name: 'Asha', age: '22' }
    ],
    showPersons: false
  }
  switchNameHandler = (newName) => {
    //console.log("I am clicked");
    this.setState({
      persons: [
        { name: 'Pritilal', age: '28' },
        { name: 'Saheblal', age: '30' },
        { name: newName, age: '19' }
      ]
    });
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "jonas", age: '28' },
        { name: event.target.value, age: '30' },
        { name: "newName", age: '19' }
      ]
    });
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    const style = {
      backgroundColor: 'orange',
      color: 'green',
      padding: '10px',
      outline: "none",
      borderRadius: '10px',
      border: "none",
      cursor: 'pointer'
    }
    let classes = ['red', 'bold'].join(' ');
    return (
      <div className="App">
        <h1 className={classes}>Hello react app</h1>
        <button
          onClick={this.togglePersonHandler}
          style={style}>
          Toggle Persons
        </button>
        {this.state.showPersons === true ?
          <div className='person-container'>
            {this.state.persons.map((i) => {
              return <Person
                name={i.name}
                age={i.age} />

            })}
            {/*<Person name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name}
              age={this.state.persons[1].age} />
            <Person name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
            {style.backgroundColor = 'red'} */}
          </div>
          : null}
      </div>
    );
    //return React.createElement("h1", { className: "App" }, "Hi am pritilal");
  }
}

export default App;
