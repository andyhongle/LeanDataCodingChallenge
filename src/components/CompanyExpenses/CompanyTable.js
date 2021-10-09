import React from "react";

const CompanyTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Total Expenses</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Food</td>
                    <td>{props.categoryExpenses.Food}</td>
                </tr>
                <tr>
                    <td>Health</td>
                    <td>{props.categoryExpenses.Health}</td>
                </tr>
                <tr>
                    <td>Travel</td>
                    <td>{props.categoryExpenses.Travel}</td>
                </tr>
                <tr>
                    <td>Supplies</td>
                    <td>{props.categoryExpenses.Supplies}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default CompanyTable;
