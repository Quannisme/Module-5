import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as BookService from "../service/BookService";
export function CreateLibrary() {
  const Navigate=useNavigate();
  const initValue = {
    title: "",
    quantity: "",
  };
  const valueValidate = {
    title: Yup.string().required("Không được bỏ trống"),
    quantity: Yup.number().required("không được bỏ trống"),
  };
  const addNewBook = async (values) => {
    await BookService.add(values);
    Navigate("/");
  };
  return (
    <>
      <Formik
        initialValues={initValue}
        onSubmit={(values) => {
          addNewBook(values);
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
            {/* <Link className="btn btn-primary mt-3 mx-3" to={"/"}>
          Back
        </Link> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
