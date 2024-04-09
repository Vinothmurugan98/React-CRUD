


const EmpHome=()=>{
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
            <tr><td>Raja</td>
            <td>raja@gmail.com</td>
            <td>25</td>
            <td>Chennai</td>
            <td>80000</td>
            <td>18-10-1997</td>
            <td>Edit</td>
            </tr>
          {/* {employees.length > 0 ? (
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
          )} */}
        </tbody>
      </table>
    </div>
)
}
export default EmpHome;