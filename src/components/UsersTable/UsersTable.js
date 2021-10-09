import React, { useState } from "react";
import ReadUserRow from "./ReadUserRow";
import EditUserRow from "./EditUserRow";

const UsersTable = (props) => {
    const [editUserRowID, setEditUserRowID] = useState(null);
    const [editFormData, setEditFormData] = useState()
    const handleEditClick = (event, user) => {
        event.preventDefault()
        setEditUserRowID(user.id)
    }

    return (
        <div className="users-table-container">
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
                                <EditUserRow />
                            ) : (
                                <ReadUserRow
                                    user={user}
                                    handleEditClick={handleEditClick}
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
