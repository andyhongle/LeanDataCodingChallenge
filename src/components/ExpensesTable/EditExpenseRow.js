import React, { useState } from "react";

const EditExpenseRow = (props) => {
    const [fullName, editFullName] = useState(props.expense.fullName);
    const [category, editCategory] = useState(props.expense.category);
    const [description, editDescription] = useState(props.expense.description);
    const [cost, editCost] = useState(props.expense.cost);
    const [editError, setEditError] = useState(false);

    const changeFullNameHandler = (event) => {
        editFullName(event.target.value);
    };
    const changeCategoryHandler = (event) => {
        editCategory(event.target.value);
    };
    const changeDescriptionHandler = (event) => {
        editDescription(event.target.value);
    };
    const changeCostHandler = (event) => {
        editCost(event.target.value);
    };

    const onSaveExpenseHandler = (event) => {
        event.preventDefault();
        if (cost <= 0 || description.trim().length === 0) {
            setEditError(true);
            return;
        }
        setEditError(false);
        const editExpenseData = {
            id: props.expense.id,
            fullName: fullName,
            category: category,
            description: description,
            cost: parseInt(cost),
        };
        props.editExpense(editExpenseData);
        props.saveExpense(event);
    };

    return (
        <tr>
            <td>
                <select required value={fullName} onChange={changeFullNameHandler}>
                    <option value="" disabled hidden>
                        Choose a name
                    </option>
                    {props.usersList.map((user, idx) => (
                        <option key={idx} value={user.fullName}>
                            {user.firstName} {user.lastName}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <select required value={category} onChange={changeCategoryHandler}>
                    <option value="" disabled hidden>
                        Choose a category
                    </option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Health">Health</option>
                    <option value="Supplies">Supplies</option>
                </select>
            </td>
            <td>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={changeDescriptionHandler}
                />
            </td>
            <td>
                <input
                    type="number"
                    placeholder="Cost"
                    value={cost}
                    onChange={changeCostHandler}
                />
            </td>
            <td>
                <button type="submit" onClick={onSaveExpenseHandler}>
                    Save
                </button>
            </td>
            {editError && (
                <td>Please enter a valid cost and non-empty description</td>
            )}
        </tr>
    );
};

export default EditExpenseRow;