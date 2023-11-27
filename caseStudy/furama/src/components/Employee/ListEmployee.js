import { useEffect, useState } from "react";
import * as employees from "../../service/RentService";
import "bootstrap/dist/css/bootstrap.css";
import Data from './../../data/db.json';
import { Route, Routes, NavLink, Link } from "react-router-dom";
import { Modal } from "bootstrap";
import Example from "./Modal";
export function Employee() {
  const [employee, setEmployee] = useState([]);
  const [name , setName]=useState("");
  const [degree , setDegree]=useState("");
  const[searchItem,setSearchItem]=useState("")
  // phan trang
  const [currentPage, setCurrentPage]=useState(1);
  const recordsPerPage=5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex= lastIndex - recordsPerPage;
  const records=employee.slice(firstIndex , lastIndex);
  const npage = Math.ceil(employee.length / recordsPerPage);
  const numbers= [...Array(npage + 1).keys()].slice(1);
  useEffect(() => {
    getAllEmployee();
  }, [name,degree,searchItem]);
  const getAllEmployee = async () => {
    let temp = await employees.getAllEmployee(name,degree,searchItem);
    setEmployee(temp);
  };
  const getDelete = async (id) => {
    await employees.getDeleteEmployee(id);
    await getAllEmployee();
  };
  const handleDelete = (id) => {
    getDelete(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <input onChange={(evt)=>setName(evt.target.value)}/>
    <select onChange={(evt) => setDegree(evt.target.value)} value={degree}>
        <option value="">Select Degree</option>
        <option value="Trung cấp">Trung cấp</option>
        <option value="Cao đẳng">Cao đẳng</option>
        <option value="Đại học">Đại học</option>
        <option value="Sau Đại học">Sau Đại học</option>
      </select>
       <NavLink to="/createEmployee">Create</NavLink>
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
          {records.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.birthday}</td>
                <td>{employee.identity_card}</td>
                <td>{employee.salary}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.Degree}</td>
                <td>{employee.Position}</td>
                <td>{employee.Division}</td>
                <td>
                  {/* <button
                    className="btn btn-danger"
                    ids={employee.id}
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button> */}
                  <Example id={employee.id} handleDelete={handleDelete}/>
                  <button
                    className="btn btn-danger"
                    >
                      <Link to={`/update/${employee.id}`}>Update</Link>
                    </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link"
            onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n,i)=>{
              return(
              <li className={`page-item ${currentPage == n ? `active` : ` `}`} key={i}>
                <a href="#" className="page-link"
                onClick={()=>changeCPage(n)} >{n}</a>
              </li>)
            })
          }
          <li className="page-item">
            <a href="#" className="page-link"
            onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </>
  );
  function changeCPage(id){
    setCurrentPage(id);
  }
  function nextPage(){
    if(currentPage !== npage){
      setCurrentPage(currentPage +1);
    }
  }
  function prePage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage -1);
    }
  }
}
