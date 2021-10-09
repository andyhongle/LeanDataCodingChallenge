import "./App.css";
import React, { useState, useEffect } from "react";
import UsersTable from "./components/UsersTable/UsersTable";
import AddUsersForm from "./components/UsersTable/AddUserForm";
import ExpensesTable from "./components/ExpensesTable/ExpensesTable";
import AddExpenseForm from "./components/ExpensesTable/AddExpenseForm";
import CompanyTable from "./components/CompanyExpenses/CompanyTable";

function App() {
    const [usersList, setUsersList] = useState([]);
    const [expensesList, setExpensesList] = useState([]);
    const [categoryExpenses, setCategoryExpenses] = useState({
        Food: 0,
        Health: 0,
        Travel: 0,
        Supplies: 0,
    });

    const addUserHandler = (firstName, lastName) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    id: Math.random(),
                    firstName: firstName,
                    lastName: lastName,
                    fullName: firstName + " " + lastName,
                    totalExpenses: 0,
                },
            ];
        });
    };

    const editUserHandler = (editUserData) => {
        setUsersList((prevUsersList) => {
            const newUsersList = [...prevUsersList];
            const index = usersList.findIndex(
                (user) => user.id === editUserData.id
            );
            newUsersList[index] = editUserData;
            return newUsersList;
        });
    };

    const deleteUserHandler = (userId) => {
        setUsersList((prevUsersList) => {
            const newUsersList = [...prevUsersList];
            const index = usersList.findIndex((user) => user.id === userId);
            newUsersList.splice(index, 1);
            return newUsersList;
        });
    };

    const addExpenseHandler = (fullName, category, description, cost) => {
        setExpensesList((prevExpensesList) => {
            return [
                ...prevExpensesList,
                {
                    id: Math.random(),
                    fullName: fullName,
                    category: category,
                    description: description,
                    cost: parseInt(cost),
                },
            ];
        });
    };

    const editExpenseHandler = (editExpenseData) => {
        setExpensesList((prevExpensesList) => {
            const newExpensesList = [...prevExpensesList];
            const index = expensesList.findIndex(
                (expense) => expense.id === editExpenseData.id
            );
            newExpensesList[index] = editExpenseData;
            return newExpensesList;
        });
    };

    const deleteExpenseHandler = (expenseId) => {
        setExpensesList((prevExpensesList) => {
            const newExpensesList = [...prevExpensesList];
            const index = expensesList.findIndex(
                (expense) => expense.id === expenseId
            );
            newExpensesList.splice(index, 1);
            return newExpensesList;
        });
    };

    useEffect(() => {
        setUsersList((prevUsersList) => {
            return prevUsersList.map((user) => {
                let fullName = user.fullName;
                let sum = 0;
                for (let expense of expensesList) {
                    if (fullName === expense.fullName) {
                        sum += expense.cost;
                    }
                }
                user.totalExpenses = sum;
                return user;
            });
        });
    }, [expensesList]);

    useEffect(() => {
        setCategoryExpenses((prevCategoryExpenses) => {
            let newCategoryExpenses = { ...prevCategoryExpenses };
            newCategoryExpenses["Food"] = 0;
            newCategoryExpenses["Health"] = 0;
            newCategoryExpenses["Travel"] = 0;
            newCategoryExpenses["Supplies"] = 0;
            for (let expense of expensesList) {
                let category = expense.category;
                let cost = expense.cost;
                newCategoryExpenses[category] += cost;
            }
            return newCategoryExpenses;
        });
    }, [expensesList]);

    return (
        <div className="App">
            <AddUsersForm addUser={addUserHandler} />
            <UsersTable
                usersList={usersList}
                editUser={editUserHandler}
                deleteUser={deleteUserHandler}
            />
            <AddExpenseForm
                usersList={usersList}
                addExpense={addExpenseHandler}
            />
            <ExpensesTable
                usersList={usersList}
                expensesList={expensesList}
                editExpense={editExpenseHandler}
                deleteExpense={deleteExpenseHandler}
            />
            <CompanyTable categoryExpenses={categoryExpenses} />
        </div>
    );
}

export default App;
