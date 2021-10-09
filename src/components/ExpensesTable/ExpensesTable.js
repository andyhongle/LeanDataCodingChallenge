import React, { useState, Fragment } from "react";
import ReadExpenseRow from "./ReadExpenseRow";
import EditExpenseRow from "./EditExpenseRow";

const ExpensesTable = (props) => {
    const [editExpenseRowID, setEditExpenseRowID] = useState(null);

    const editExpenseRowHandler = (event, expense) => {
        event.preventDefault();
        setEditExpenseRowID(expense.id);
    };

    const saveExpenseRowHandler = (event) => {
        event.preventDefault();
        setEditExpenseRowID(null);
    };

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
                        {editExpenseRowID === expense.id ? (
                            <EditExpenseRow
                                usersList={props.usersList}
                                expense={expense}
                                saveExpense={saveExpenseRowHandler}
                                editExpense={props.editExpense}
                            />
                        ) : (
                            <ReadExpenseRow
                                expense={expense}
                                editExpense={editExpenseRowHandler}
                                deleteExpense={props.deleteExpense}
                            />
                        )}
                    </Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default ExpensesTable;
