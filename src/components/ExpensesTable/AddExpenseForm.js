import React, { useState } from "react";

const AddExpenseForm = () => {
    const [fullName, setFullName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState(0);

    const selectCategoryHandler = (event) => {
        setCategory(event.target.value);
    };

    const changeDescriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    const costChangeHandler = (event) => {
        setCost(event.target.value);
    }
    return (
        <form>
            <select value={category} onChange={selectCategoryHandler}>
                <option value="" disabled selected hidden>
                    Choose a category
                </option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="health">Health</option>
                <option value="supplies">Supplies</option>
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
        </form>
    );
};

export default AddExpenseForm;
