import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonForm from './Form';
import Person from './Person';

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Billy",
      email: "billy.bob@gmail.com",
      role: "mechanical engineer"
    }
  ]);

  const addNewPerson = person => {
    const newPerson = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    }
    setPeople([...people, newPerson])
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PersonForm addNewPerson={addNewPerson}/>
        <Person person={people}/>
      </header>
    </div>
  );
}

export default App;
