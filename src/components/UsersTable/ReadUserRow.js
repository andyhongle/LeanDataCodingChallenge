import React from 'react';

const ReadUserRow = (props) => {

    const onEditClickHandler = (event) => {
        props.editUserHandler(event, props.user);
    }

    const onDeleteUserHandler = () => {
        props.deleteUserHandler(props.user.id);
    }

    return (
        <tr key={props.idx}>
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