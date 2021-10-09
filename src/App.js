import "./App.css";
import React, { useState } from "react";
import UsersTable from "./components/UsersTable/UsersTable";
import UsersForm from "./components/UsersTable/UsersForm";

function App() {
    const [usersList, setUsersList] = useState([]);

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

    return (
        <div className="App">
            <UsersForm addUser={addUserHandler} />
            <UsersTable
                usersList={usersList}
                editUser={editUserHandler}
                deleteUserHandler={deleteUserHandler}
            />
        </div>
    );
}

export default App;
