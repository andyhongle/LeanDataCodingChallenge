import React, { useState, Fragment } from "react";
import ReadUserRow from "./ReadUserRow";
import EditUserRow from "./EditUserRow";

const UsersTable = (props) => {
    const [editUserRowID, setEditUserRowID] = useState(null);

    const editUserRowHandler = (event, user) => {
        event.preventDefault();
        setEditUserRowID(user.id);
    };

    const saveUserRowHandler = (event) => {
        event.preventDefault();
        setEditUserRowID(null);
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Total Expenses</th>
                </tr>
            </thead>
            <tbody>
                {props.usersList.map((user, idx) => (
                    <Fragment key={idx}>
                        {editUserRowID === user.id ? (
                            <EditUserRow
                                saveUser={saveUserRowHandler}
                                editUser={props.editUser}
                                user={user}
                            />
                        ) : (
                            <ReadUserRow
                                user={user}
                                editUser={editUserRowHandler}
                                deleteUser={props.deleteUser}
                            />
                        )}
                    </Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
