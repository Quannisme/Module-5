import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import * as BookService from "../service/BookService";
import { Link } from "react-router-dom";
export function List() {
  const [book, setBook] = useState([]);
  const [title , setTitle]=useState("");
  const[quantity, setQuantity]=useState("");
  useEffect(() => {
    axios.get;
  });
  useEffect(() => {
    getAllLibrary();
  }, [title,quantity]);
  const getAllLibrary = async () => {
    let temp = await BookService.getAll(title , quantity);
    setBook(temp);
  };
  const getDelete = async (id)=>{
    await BookService.deletee(id);
    await getAllLibrary();
  }
  const handleDelete = (id)=>{
    getDelete(id).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
  return (
    <>
      <input onChange={(evt)=>setTitle(evt.target.value)}/>
      <input onChange={(evt)=>setQuantity(evt.target.value)}/>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {book.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.title}</td>
                <td>{value.quantity}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    // ids={value.id}
                    // onClick={() => handleEdit(value.id)}
                  >
                    {/* Edit */}
                    <Link to={`/update/${value.id}`}>Update</Link>
                  </button>
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
  );
}
