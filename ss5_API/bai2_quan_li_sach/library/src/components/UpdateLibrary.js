import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export function Update() {
  // ban đầu là nó không có giá trị mà mình set cứng cho hắn là giá trị ban đầu mà mình lại dùng thằng value set cứng hắn nữa nên không thể thay đổi dữ liệu được
  // lần đầu hắn sẽ render ra lần đầu không có dữ liệu do mình useState là rỗng , lần sau hắn thực hiện useEffect thì mới có dữ liệu
  let { id } = useParams();
  const [item, setItem] = useState();
 
  const valueValidate = {
    title: Yup.string().required("Không được bỏ trống"),
    quantity: Yup.number().required("không được bỏ trống"),
  };
  // vì là sự kiện nên không thể là async và await nên nó là 1 promise
  useEffect(() => {
    // let temp=axios.get("http://localhost:8080/library?id_like="+id);
    // setItem(temp);
    axios
      .get("http://localhost:8080/library?id_like=" + id)
      .then((response) => {
        setItem(response.data[0]); // Giả sử rằng dữ liệu bạn cần nằm ở vị trí đầu tiên của mảng
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);
  const Navigate = useNavigate();
  const updateNow = (values) => {
    axios.put("http://localhost:8080/library/" + id,values);
    Navigate("/");
  };
  if(!item) {
    return null;
  }
  const initValue = {
    title: item.title,
    quantity: item.quantity
  };
  return (
    <>
      <Formik
        initialValues={initValue}
        onSubmit={(values) => {
          updateNow(values);
        }}
        validationSchema={Yup.object().shape(valueValidate)}
      >
          <Form>
            <div className="container">
              <h1 className="mb-5">Add a new book</h1>
              <label className="form-label">Title</label>
              <Field
                className="form-control"
                name="title"
                style={{ width: "500px" }}
                type="text"
              
              />
              <label className="form-label mt-2">Quantity</label>
              <Field
                className="form-control"
                style={{ width: "500px" }}
                type="number"
                name="quantity"
               
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
      </Formik>
    </>
    // <div className="container">
    //   <h1 className="mb-5">Update</h1>
    //   <label className="form-label">Title</label>
    //   <input
    //     className="form-control"
    //     style={{ width: "500px" }}
    //     type="text"
    //     value={item.title}
    //     onChange={(e) => handleChange("title", e.target.value)}
    //   ></input>
    //   <label className="form-label mt-2">Quantity</label>
    //   <input
    //     className="form-control"
    //     style={{ width: "500px" }}
    //     type="number"
    //     value={item.quantity}
    //     onChange={(e) => handleChange("quantity", e.target.value)}
    //   ></input>
    //   <Link className="btn btn-primary mt-3 mx-3" to={"/"}>
    //     Back
    //   </Link>
    //   <button className="btn btn-success mt-3" onClick={() => updateNow()}>
    //     Add
    //   </button>
    // </div>
  );
}
