import React from 'react';

const ReadUserRow = (props) => {

    const onEditClickHandler = (event) => {
        props.handleEditClick(event, props.user);
    }

    return (
        <tr key={props.idx}>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.totalExpenses}</td>
            <td>
                <button type='button' onClick={onEditClickHandler}>Edit</button>
            </td>
        </tr>
    );
};

export default ReadUserRow;