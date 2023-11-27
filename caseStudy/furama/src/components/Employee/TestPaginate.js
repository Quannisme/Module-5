import { useEffect, useState } from "react";
import * as employees from "../../service/RentService";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import "./List.css";
export function Employee() {
  const [employee, setEmployee] = useState([]);
  const [totalEmployees,setTotalEmployees]=useState(0);
  const [totalPages,setTotalPages]=useState(0);
  useEffect(() => {
    getAllEmployee(1);
  }, []);
  const getAllEmployee = async (page) => {
    let temp = await employees.getAllEmployee(page);
    console.log(temp); 
    if(temp){
      setTotalEmployees(temp.total);
      setEmployee(temp.employees);
      setTotalPages(temp.total_pages);
    }
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
  const handlePageClick=(event)=>{
      getAllEmployee(event.selected +1);
  }
  return (
    <>
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
                  <button
                    className="btn btn-danger"
                    >
                      <Link to={`/update/${value.id}`}>Update</Link>
                    </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ReactPaginate
       breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"

        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
}
