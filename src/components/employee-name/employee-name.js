import React from 'react';
import EmployeeNameText from '../employee-name-text/employee-name-text';

function EmployeeName(props) {
    // console.log('They have a name', props)
    return (
        <td>
            <EmployeeNameText
                name = {props.empName}
            ></EmployeeNameText>
        </td>
    )
};

export default EmployeeName;