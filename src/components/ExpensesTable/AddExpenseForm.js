import React, { useState } from "react";

const AddExpenseForm = (props) => {
    const [fullName, setFullName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState(0);

    const selectFullNameHandler = (event) => {
        setFullName(event.target.value);
    };
    const selectCategoryHandler = (event) => {
        setCategory(event.target.value);
    };

    const changeDescriptionHandler = (event) => {
        setDescription(event.target.value);
    };

    const costChangeHandler = (event) => {
        setCost(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.addExpense(fullName, category, description, cost)
        

    }
    return (
        <form onSubmit={submitHandler}>
            <select value={fullName} onChange={selectFullNameHandler}>
                <option value="" disabled hidden>
                    Choose a name
                </option>
                {props.usersList.map((user, idx) => (
                    <option key={idx} value={user.fullName}>
                        {user.firstName} {user.lastName}
                    </option>
                ))}
            </select>
            <select value={category} onChange={selectCategoryHandler}>
                <option value="" disabled hidden>
                    Choose a category
                </option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
                <option value="Supplies">Supplies</option>
            </select>
            <input
                type="text"
                placeholder="Description"
                required="required"
                value={description}
                onChange={changeDescriptionHandler}
            />
            <input
                type="number"
                placeholder="Cost"
                required="required"
                value={cost}
                onChange={costChangeHandler}
            />
            <button type='submit'>Add Expense</button>
        </form>
    );
};

export default AddExpenseForm;
