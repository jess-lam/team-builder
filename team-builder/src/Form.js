import React, { useState } from "react";

const PersonForm = ({addNewPerson}) => {
    const [person, setPerson] = useState ({id: "", name: "",email: "", role: ""});

    const handleChanges = event => {
        setPerson({...person, [event.target.name]: event.target.value, });
    };

    const submitForm = event => {
        event.preventDefault();
        addNewPerson(person);
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input 
                id="name"
                type="text"
                name="name"
                placeholder="Enter name here"
                onChange={handleChanges}
                value={person.name}
            />
            <label>Email</label>
            <input 
                id="email"
                type="text"
                name="email"
                placeholder="Email address"
                onChange={handleChanges}
                value={person.email}
            />
            <label>Occupation</label>
            <input 
                id="role"
                type="text"
                name="role"
                placeholder="Occupation"
                onChange={handleChanges}
                value={person.role}
            />
            <button type="submit">Submit</button>
        </form>
    )
};

export default PersonForm;