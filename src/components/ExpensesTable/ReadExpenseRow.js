import React from 'react';

const ReadExpenseRow = (props) => {

    return (
        <tr>
            <td>{props.expense.fullName}</td>
            <td>{props.expense.category}</td>
            <td>{props.expense.description}</td>
            <td>{props.expense.cost}</td>
            <td></td>
            <td></td>
        </tr>
    );


};

export default ReadExpenseRow;