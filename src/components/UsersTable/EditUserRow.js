import React, { useState } from "react";

const EditUserRow = (props) => {
    const [firstName, editFirstName] = useState(props.user.firstName);
    const [lastName, editLastName] = useState(props.user.lastName);
    const [editError, setEditError] = useState(false);
    const changeFNHandler = (event) => {
        editFirstName(event.target.value);
    };

    const changeLNHandler = (event) => {
        editLastName(event.target.value);
    };

    const errorHandler = (event) => {};

    const onSaveHandler = (event) => {
        event.preventDefault();
        if (firstName.trim().length === 0 || lastName.trim().length === 0) {
            setEditError(true);
            return;
        }
        setEditError(false);
        const editUserData = {
            id: props.user.id,
            firstName: firstName,
            lastName: lastName,
            totalExpenses: props.user.totalExpenses,
        };
        props.editUser(editUserData);
        props.handleSaveClick(event);
    };

    return (
        <tr key={props.idx}>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="First Name"
                    value={firstName}
                    onChange={changeFNHandler}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={changeLNHandler}
                />
            </td>
            <td>filler</td>
            <button onClick={onSaveHandler} type="submit">
                Save
            </button>
            {editError && <td>Please do not leave first or last name blank</td>}
        </tr>
    );
};

export default EditUserRow;