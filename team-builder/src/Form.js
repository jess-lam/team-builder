import React, { useState } from "react";

const personForm = props => {
    const [person, setPerson] = useState ({id: "", name: "",email: "", role: ""});

    const handleChanges = e => {
        setperson({...person, name: event.target.value, });
    };

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input 
                id="name"
                type="text"
                name="name"
                placeholder="Enter name here"
                onChange={handleChanges}
            />
        </form>
    )
}