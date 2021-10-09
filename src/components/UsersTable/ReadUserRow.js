import React from 'react';

const ReadUserRow = (props) => {

    const onEditClickHandler = (event) => {
        props.editUser(event, props.user);
    }

    const onDeleteUserHandler = () => {
        props.deleteUser(props.user.fullName);
    }

    return (
        <tr>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.totalExpenses}</td>
            <td>
                <button type='button' onClick={onEditClickHandler}>Edit</button>
            </td>
            <td>
                <button type='button' onClick={onDeleteUserHandler}>Delete</button>
            </td>
        </tr>
    );
};

export default ReadUserRow;