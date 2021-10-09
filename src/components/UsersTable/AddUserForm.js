import React, { useState } from "react";

const AddUserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const changeFNHandler = (event) => {
        setFirstName(event.target.value);
    };

    const changeLNHandler = (event) => {
        setLastName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.addUser(firstName, lastName);
        setFirstName("");
        setLastName("");
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="First Name"
                required="required"
                value={firstName}
                onChange={changeFNHandler}></input>
            <input
                type="text"
                placeholder="Last Name"
                required="required"
                value={lastName}
                onChange={changeLNHandler}></input>
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUserForm;
