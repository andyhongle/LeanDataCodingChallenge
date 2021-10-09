import './App.css';
import React, { useState } from 'react';
import UsersTable from './components/UsersTable/UsersTable';
import UsersForm from './components/UsersTable/UsersForm';

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
          totalExpenses: "testing"
        }
      ]
    })
  };


  const editUserHandler = (firstName, lastName) => {

  }



  return (
      <div className="App">
          <UsersForm addUser={addUserHandler}/>
          <UsersTable usersList={usersList}/>
      </div>
  );
}

export default App;
