import React from 'react';

const EditUserRow = (props) => {
    return (
        <tr key={props.idx}>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="First Name"
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Last Name"
                />
            </td>
        </tr>
    );
};

export default EditUserRow;