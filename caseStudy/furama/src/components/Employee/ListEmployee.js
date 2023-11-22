import { useEffect , useState } from "react";
import * as employees from '../../service/RentService'
import "bootstrap/dist/css/bootstrap.css";
export function Employee(){
    const[employee , setEmployee]=useState([]);
    useEffect(()=>{
        getAllEmployee();
    },[]);
    const getAllEmployee=async()=>{
        let temp= await employees.getAllEmployee();
        setEmployee(temp);
    }
    return(
        <>
         <table class="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">birthDay</th>
            <th scope="col">Card</th>
            <th scope="col">salary</th>
            <th scope="col">phone</th>
            <th scope="col">email</th>
            <th scope="col">Degree</th>
            <th scope="col">Position</th>
            <th scope="col">Division</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.birthday}</td>
                <td>{value.identity_card}</td>
                <td>{value.salary}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
                <td>{value.Degree}</td>
                <td>{value.Position}</td>
                <td>{value.Division}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    ids={value.id}
                    onClick={() => handleDelete(value.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </>
    )
}