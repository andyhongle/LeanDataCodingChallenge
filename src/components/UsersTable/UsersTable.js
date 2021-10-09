import React, { useState } from "react";
import ReadUserRow from "./ReadUserRow";
import EditUserRow from "./EditUserRow";

const UsersTable = (props) => {
    const [editUserRowID, setEditUserRowID] = useState(null);

    const editUserHandler = (event, user) => {
        event.preventDefault();
        setEditUserRowID(user.id);
    };

    const saveClickHandler = (event) => {
        event.preventDefault();
        setEditUserRowID(null);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Total Expenses</th>
                    </tr>
                </thead>
                <tbody>
                    {props.usersList.map((user, idx) => (
                        <>
                            {editUserRowID === user.id ? (
                                <EditUserRow
                                    saveClickHandler={saveClickHandler}
                                    editUser={props.editUser}
                                    user={user}
                                />
                            ) : (
                                <ReadUserRow
                                    user={user}
                                    editUserHandler={editUserHandler}
                                    deleteUserHandler={props.deleteUserHandler}
                                />
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
