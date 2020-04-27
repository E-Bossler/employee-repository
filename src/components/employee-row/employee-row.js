import React from 'react';
import EmployeeJob from '../employee-job/employee-job';
import EmployeeName from '../employee-name/employee-name';
import EmployeeSalary from '../employee-salary/employee-salary';


function EmployeeCard(props) {
    // console.log('I have an employee')
    return (
        <tr>

            <EmployeeName
                empName={props.data.name}
            >

            </EmployeeName>
            <EmployeeJob
                empJob={props.data.job}>

            </EmployeeJob>
            <EmployeeSalary
                empSal={props.data.salary}>

            </EmployeeSalary>
        </tr>
    )
};


export default EmployeeCard;