import "./App.css";
import React, { useState } from "react";
import UsersTable from "./components/UsersTable/UsersTable";
import AddUsersForm from "./components/UsersTable/AddUserForm";
import ExpensesTable from './components/ExpensesTable/ExpensesTable';
import AddExpenseForm from './components/ExpensesTable/AddExpenseForm';

function App() {
    const [usersList, setUsersList] = useState([]);
    const [expensesList, setExpensesList] = useState([]);

    const addUserHandler = (firstName, lastName, totalExpenses) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    id: Math.random(),
                    firstName: firstName,
                    lastName: lastName,
                    totalExpenses: "testing",
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
            cost: cost
          }
        ]
      })
    }

    return (
        <div className="App">
            <AddUsersForm addUser={addUserHandler} />
            <UsersTable
                usersList={usersList}
                editUser={editUserHandler}
                deleteUser={deleteUserHandler}
            />
            <AddExpenseForm/>
            <ExpensesTable />
        </div>
    );
}

export default App;
