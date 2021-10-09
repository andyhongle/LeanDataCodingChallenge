import React from 'react';

const ReadExpenseRow = (props) => {

    const onEditHandler = (event) => {
        props.editExpense(event, props.expense);
    }

    const onDeleteHandler = (event) => {
        props.deleteExpense(props.expense.id)
    }

    return (
        <tr>
            <td>{props.expense.fullName}</td>
            <td>{props.expense.category}</td>
            <td>{props.expense.description}</td>
            <td>{props.expense.cost}</td>
            <td>
                <button type="button" onClick={onEditHandler}>
                    Edit
                </button>
            </td>
            <td>
                <button type="button" onClick={onDeleteHandler}>
                    Delete
                </button>
            </td>
        </tr>
    );


};

export default ReadExpenseRow;