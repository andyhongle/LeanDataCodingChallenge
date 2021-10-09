import React from 'react';

const ReadUserRow = (props) => {

    const onEditHandler = (event) => {
        props.editUser(event, props.user);
    }

    const onDeleteHandler = () => {
        props.deleteUser(props.user.id);
    }

    return (
        <tr>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.totalExpenses}</td>
            <td>
                <button type='button' onClick={onEditHandler}>Edit</button>
            </td>
            <td>
                <button type='button' onClick={onDeleteHandler}>Delete</button>
            </td>
        </tr>
    );
};

export default ReadUserRow;