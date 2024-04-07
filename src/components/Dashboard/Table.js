import React, { useEffect, useState } from 'react';

const Table = (props) => {
  const[employees,setEmployees]= useState([]);
useEffect(()=>{
   setEmployees(props.employees);
},[])
// employees.forEach((employee, i) => {
//   employee.id = i + 1;
// });
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });
console.log(employees,"vinoth")
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            
            <th> Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr>
                {console.log (employee,"text")}
                <td>{employee.firstName} {employee.lastName}</td>
              
                <td>{employee.email}</td>
                <td>{employee.age}</td>
                <td>{employee.location}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => props.handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => props.handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
