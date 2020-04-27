import React from 'react';
import EmployeeJobText from '../employee-job-text/employee-job-text';

function EmployeeJob(props) {
    // console.log('They have a job')
    return (
        <td>
            <EmployeeJobText
                job = {props.empJob}
            ></EmployeeJobText>
        </td>
    )
};

export default EmployeeJob;