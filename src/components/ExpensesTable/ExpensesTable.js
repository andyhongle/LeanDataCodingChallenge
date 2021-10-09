import React, { Fragment } from 'react';
import ReadExpenseRow from './ReadExpenseRow';
const ExpensesTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {props.expensesList.map((expense, idx) => (
                    <Fragment key={idx}>
                        <ReadExpenseRow expense={expense}/>
                    </Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default ExpensesTable;