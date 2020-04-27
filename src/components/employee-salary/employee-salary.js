import React from 'react';
import EmployeeSalaryText from '../employee-salary-text/employee-salary-text';

function EmployeeSalary(props) {
    // console.log('They are paid')
    return (
        <td>
            <EmployeeSalaryText
            salary = {props.empSal}
            ></EmployeeSalaryText>
        </td>
    )
};

export default EmployeeSalary;