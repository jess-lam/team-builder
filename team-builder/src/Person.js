import React from "react";

const Person = props => {
    return (
        <div className="person-list">
      {props.person.map(person => (
        <div className="person" key={person.id}>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
          <p>{person.role}</p>
        </div>
      ))}
    </div>
    );
};

export default Person;